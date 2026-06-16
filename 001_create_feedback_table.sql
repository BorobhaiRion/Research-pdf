-- Migration: create feedback table with RLS and policies
-- Run this in Supabase SQL editor or using psql against the project database.

-- Enable pgcrypto for gen_random_uuid
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  email text,
  message text NOT NULL,
  rating integer,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Policy: allow public inserts (anonymous users)
CREATE POLICY "allow_public_insert" ON public.feedback
  FOR INSERT
  USING (true)
  WITH CHECK (true);

-- Note: No SELECT policy is created, so public users cannot read feedback rows.

-- Optional: index on created_at for faster queries
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON public.feedback (created_at DESC);
