/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text) - full name of the submitter
      - `email` (text) - email address
      - `company` (text) - optional company name
      - `subject` (text) - message subject
      - `message` (text) - message body
      - `created_at` (timestamptz) - submission timestamp

  2. Security
    - Enable RLS
    - Allow anyone (anon) to INSERT (public contact form)
    - No SELECT policy for public users (submissions are private to admins)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
