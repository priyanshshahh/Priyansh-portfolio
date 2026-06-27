-- ============================================================================
-- Moderation for the guestbook + a private contact-messages table.
-- The owner is identified by email. CHANGE this to your real owner email if it
-- differs from siteConfig.email.
-- ============================================================================

-- The email that counts as "the owner" (you). Used in RLS below.
-- NOTE: SQL has no variables across statements in plain migrations, so the
-- email is inlined in each policy. Update all occurrences if you change it.

-- ----------------------------------------------------------------------------
-- 1. Guestbook moderation
-- ----------------------------------------------------------------------------
alter table guestbook
  add column if not exists approved boolean not null default false;

-- Public can only read APPROVED comments; the owner can read everything.
drop policy if exists "Guestbook entries are publicly readable" on guestbook;
create policy "Approved entries are public, owner sees all"
  on guestbook for select
  using (
    approved = true
    or (auth.jwt() ->> 'email') = 'priyansh.shah@stonybrook.edu'
  );

-- New comments must be inserted as pending (approved = false) by their author.
drop policy if exists "Authenticated users can insert their own entry" on guestbook;
create policy "Authenticated users insert pending entries"
  on guestbook for insert
  with check (auth.uid() = user_id and approved = false);

-- Only the owner can approve (update) comments.
drop policy if exists "Owner can moderate entries" on guestbook;
create policy "Owner can moderate entries"
  on guestbook for update
  using ((auth.jwt() ->> 'email') = 'priyansh.shah@stonybrook.edu')
  with check ((auth.jwt() ->> 'email') = 'priyansh.shah@stonybrook.edu');

-- (existing) Users can delete their own entry - keep as-is from 001.

-- ----------------------------------------------------------------------------
-- 2. Private contact messages (the "send me a message" inbox)
-- ----------------------------------------------------------------------------
create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) <= 120),
  email text not null check (char_length(email) <= 200),
  body text not null check (char_length(body) between 1 and 2000),
  created_at timestamptz default now()
);

alter table messages enable row level security;

-- Anyone (including anonymous visitors) can send you a message.
drop policy if exists "Anyone can send a message" on messages;
create policy "Anyone can send a message"
  on messages for insert
  with check (true);

-- Only the owner can read the inbox.
drop policy if exists "Only owner can read messages" on messages;
create policy "Only owner can read messages"
  on messages for select
  using ((auth.jwt() ->> 'email') = 'priyansh.shah@stonybrook.edu');
