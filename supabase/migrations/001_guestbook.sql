create table if not exists guestbook (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  display_name text not null,
  message text not null check (char_length(message) <= 500),
  created_at timestamptz default now()
);

alter table guestbook enable row level security;

create policy "Guestbook entries are publicly readable"
  on guestbook for select
  using (true);

create policy "Authenticated users can insert their own entry"
  on guestbook for insert
  with check (auth.uid() = user_id);

create policy "Users can delete their own entry"
  on guestbook for delete
  using (auth.uid() = user_id);
