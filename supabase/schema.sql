-- Blazesites CRM Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Organizations
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  logo_url TEXT,
  subscription_tier TEXT NOT NULL DEFAULT 'starter' CHECK (subscription_tier IN ('starter', 'growth', 'pro', 'agency')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Users (extends Supabase auth.users)
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  avatar_url TEXT,
  role TEXT NOT NULL DEFAULT 'editor' CHECK (role IN ('owner', 'admin', 'manager', 'editor', 'viewer')),
  subscription_tier TEXT NOT NULL DEFAULT 'starter' CHECK (subscription_tier IN ('starter', 'growth', 'pro', 'agency')),
  org_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  onboarding_completed BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Organization members
CREATE TABLE org_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  org_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'editor' CHECK (role IN ('owner', 'admin', 'manager', 'editor', 'viewer')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, org_id)
);

-- Clients
CREATE TABLE clients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  company TEXT,
  industry TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'prospect')),
  notes TEXT,
  org_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Client notes / activity log
CREATE TABLE client_notes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE SET NULL,
  content TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'note' CHECK (type IN ('note', 'call', 'email', 'meeting')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Templates
CREATE TABLE templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  thumbnail_url TEXT,
  industry_tags TEXT[] DEFAULT '{}',
  style_tags TEXT[] DEFAULT '{}',
  page_count INTEGER NOT NULL DEFAULT 1,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'archived')),
  template_data JSONB NOT NULL DEFAULT '{"pages": []}',
  template_type TEXT NOT NULL DEFAULT 'block' CHECK (template_type IN ('block', 'astro')),
  template_dir TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Projects (website builds)
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  client_id UUID REFERENCES clients(id) ON DELETE SET NULL,
  template_id UUID REFERENCES templates(id) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'in_progress', 'under_review', 'building', 'live', 'archived')),
  domain TEXT,
  subdomain TEXT,
  custom_domain TEXT,
  dns_verified BOOLEAN NOT NULL DEFAULT FALSE,
  cf_hostname_id TEXT,
  brand_profile JSONB,
  built_url TEXT,
  published_at TIMESTAMPTZ,
  org_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Website pages (actual content for a project)
CREATE TABLE website_pages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  blocks JSONB NOT NULL DEFAULT '[]',
  meta_title TEXT,
  meta_description TEXT,
  og_image TEXT,
  "order" INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(project_id, slug)
);

-- Leads
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  company TEXT,
  source TEXT,
  stage TEXT NOT NULL DEFAULT 'new' CHECK (stage IN ('new', 'contacted', 'qualified', 'proposal', 'negotiation', 'won', 'lost')),
  value DECIMAL(10, 2),
  notes TEXT,
  org_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Lead activities
CREATE TABLE lead_activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  content TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'note',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Media assets
CREATE TABLE media (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  filename TEXT NOT NULL,
  url TEXT NOT NULL,
  size INTEGER NOT NULL DEFAULT 0,
  mime_type TEXT NOT NULL,
  project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
  org_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Notifications
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  org_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  type TEXT NOT NULL CHECK (type IN ('lead_update', 'project_status', 'client_activity', 'system')),
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  link TEXT,
  read BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Subscription plans
CREATE TABLE subscription_plans (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL DEFAULT 0,
  site_limit INTEGER NOT NULL DEFAULT 1,
  stripe_price_id TEXT,
  features TEXT[] DEFAULT '{}'
);

-- Seed default plans
INSERT INTO subscription_plans (id, name, price, site_limit, features) VALUES
  ('starter', 'Starter', 29, 1, ARRAY['1 live site', 'Free subdomain', 'SSL included', 'Basic SEO']),
  ('growth', 'Growth', 79, 5, ARRAY['5 live sites', 'Custom domains', 'Priority support', 'Advanced SEO', 'Analytics']),
  ('pro', 'Professional', 199, 15, ARRAY['15 live sites', 'Custom domains', 'Priority support', 'Advanced SEO', 'Analytics', 'White-label']),
  ('agency', 'Agency', 499, 50, ARRAY['50 live sites', 'Custom domains', 'Dedicated support', 'Full SEO suite', 'Analytics', 'White-label', 'API access'])
ON CONFLICT (id) DO NOTHING;

-- Indexes for common queries
CREATE INDEX idx_users_org ON users(org_id);
CREATE INDEX idx_clients_org ON clients(org_id);
CREATE INDEX idx_clients_status ON clients(org_id, status);
CREATE INDEX idx_projects_org ON projects(org_id);
CREATE INDEX idx_projects_client ON projects(client_id);
CREATE INDEX idx_projects_status ON projects(org_id, status);
CREATE INDEX idx_website_pages_project ON website_pages(project_id);
CREATE INDEX idx_leads_org ON leads(org_id);
CREATE INDEX idx_leads_stage ON leads(org_id, stage);
CREATE INDEX idx_media_org ON media(org_id);
CREATE INDEX idx_media_project ON media(project_id);
CREATE INDEX idx_client_notes_client ON client_notes(client_id);
CREATE INDEX idx_notifications_org ON notifications(org_id, read, created_at DESC);
CREATE INDEX idx_notifications_unread ON notifications(org_id) WHERE read = FALSE;
CREATE INDEX idx_projects_subdomain ON projects(subdomain) WHERE subdomain IS NOT NULL;
CREATE INDEX idx_projects_custom_domain ON projects(custom_domain) WHERE custom_domain IS NOT NULL;

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at triggers
CREATE TRIGGER tr_organizations_updated BEFORE UPDATE ON organizations FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_users_updated BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_clients_updated BEFORE UPDATE ON clients FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_templates_updated BEFORE UPDATE ON templates FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_projects_updated BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_website_pages_updated BEFORE UPDATE ON website_pages FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_leads_updated BEFORE UPDATE ON leads FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Row Level Security (RLS)
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE org_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Users can access data within their organization
-- For service role (used by API routes), RLS is bypassed automatically

CREATE POLICY "Users can view own org" ON organizations FOR ALL USING (
  id IN (SELECT org_id FROM org_members WHERE user_id = auth.uid())
);

CREATE POLICY "Users can view own profile" ON users FOR ALL USING (
  org_id IN (SELECT org_id FROM org_members WHERE user_id = auth.uid())
);

CREATE POLICY "Users can manage org clients" ON clients FOR ALL USING (
  org_id IN (SELECT org_id FROM org_members WHERE user_id = auth.uid())
);

CREATE POLICY "Users can manage org projects" ON projects FOR ALL USING (
  org_id IN (SELECT org_id FROM org_members WHERE user_id = auth.uid())
);

CREATE POLICY "All users can view templates" ON templates FOR SELECT USING (true);

CREATE POLICY "Users can manage project pages" ON website_pages FOR ALL USING (
  project_id IN (SELECT id FROM projects WHERE org_id IN (SELECT org_id FROM org_members WHERE user_id = auth.uid()))
);

CREATE POLICY "Users can manage org leads" ON leads FOR ALL USING (
  org_id IN (SELECT org_id FROM org_members WHERE user_id = auth.uid())
);

CREATE POLICY "Users can manage org media" ON media FOR ALL USING (
  org_id IN (SELECT org_id FROM org_members WHERE user_id = auth.uid())
);

CREATE POLICY "Users can manage client notes" ON client_notes FOR ALL USING (
  client_id IN (SELECT id FROM clients WHERE org_id IN (SELECT org_id FROM org_members WHERE user_id = auth.uid()))
);

CREATE POLICY "Users can manage lead activities" ON lead_activities FOR ALL USING (
  lead_id IN (SELECT id FROM leads WHERE org_id IN (SELECT org_id FROM org_members WHERE user_id = auth.uid()))
);

CREATE POLICY "Users can view org members" ON org_members FOR ALL USING (
  org_id IN (SELECT org_id FROM org_members WHERE user_id = auth.uid())
);

CREATE POLICY "Users can manage org notifications" ON notifications FOR ALL USING (
  org_id IN (SELECT org_id FROM org_members WHERE user_id = auth.uid())
);

-- Storage buckets (run in Supabase dashboard > Storage or via SQL)
-- Creates 'sites' bucket for published site HTML files (public access)
INSERT INTO storage.buckets (id, name, public) VALUES ('sites', 'sites', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to published sites
CREATE POLICY "Public read access for sites" ON storage.objects FOR SELECT USING (
  bucket_id = 'sites'
);

-- Allow authenticated users to upload/delete from sites bucket
CREATE POLICY "Authenticated users can manage sites" ON storage.objects FOR ALL USING (
  bucket_id = 'sites' AND auth.role() = 'authenticated'
);
