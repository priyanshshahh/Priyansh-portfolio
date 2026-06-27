-- Moderation for guestbook + private contact messages.
-- Owner inbox: priyanshshah.2727@gmail.com (must match lib/data/site.ts)

alter table guestbook
  add column if not exists approved boolean not null default false;

drop policy if exists "Guestbook entries are publicly readable" on guestbook;
create policy "Approved entries are public, owner sees all"
  on guestbook for select
  using (
    approved = true
    or exists (
      select 1 from auth.users u
      where u.id = auth.uid()
        and lower(u.email) = lower('priyanshshah.2727@gmail.com')
    )
  );

drop policy if exists "Authenticated users can insert their own entry" on guestbook;
create policy "Authenticated users insert pending entries"
  on guestbook for insert
  with check (auth.uid() = user_id and approved = false);

drop policy if exists "Owner can moderate entries" on guestbook;
create policy "Owner can moderate entries"
  on guestbook for update
  using (
    exists (
      select 1 from auth.users u
      where u.id = auth.uid()
        and lower(u.email) = lower('priyanshshah.2727@gmail.com')
    )
  )
  with check (
    exists (
      select 1 from auth.users u
      where u.id = auth.uid()
        and lower(u.email) = lower('priyanshshah.2727@gmail.com')
    )
  );

create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) <= 120),
  email text not null check (char_length(email) <= 200),
  body text not null check (char_length(body) between 1 and 2000),
  created_at timestamptz default now()
);

alter table messages enable row level security;

drop policy if exists "Anyone can send a message" on messages;
create policy "Anyone can send a message"
  on messages for insert
  with check (true);

drop policy if exists "Only owner can read messages" on messages;
create policy "Only owner can read messages"
  on messages for select
  using (
    exists (
      select 1 from auth.users u
      where u.id = auth.uid()
        and lower(u.email) = lower('priyanshshah.2727@gmail.com')
    )
  );
