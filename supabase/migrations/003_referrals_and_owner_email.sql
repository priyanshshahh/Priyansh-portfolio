-- Referrals table (private inbox - anyone can submit)

create table if not exists referrals (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) <= 120),
  email text not null check (char_length(email) <= 200),
  company text check (char_length(company) <= 200),
  role text check (char_length(role) <= 200),
  body text not null check (char_length(body) between 1 and 2000),
  created_at timestamptz default now()
);

alter table referrals enable row level security;

drop policy if exists "Anyone can submit a referral" on referrals;
create policy "Anyone can submit a referral"
  on referrals for insert
  with check (true);

drop policy if exists "Only owner can read referrals" on referrals;
create policy "Only owner can read referrals"
  on referrals for select
  using (
    exists (
      select 1 from auth.users u
      where u.id = auth.uid()
        and lower(u.email) = lower('priyanshshah.2727@gmail.com')
    )
  );
