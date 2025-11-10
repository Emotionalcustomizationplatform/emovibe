-- profiles (for supabase auth users)
create table profiles (
  id uuid references auth.users on delete cascade,
  email text,
  full_name text,
  country text,
  is_helper boolean default false,
  created_at timestamptz default now(),
  primary key (id)
);

create table subscriptions (
  id serial primary key,
  user_id uuid references profiles(id),
  stripe_subscription_id text,
  status text,
  current_period_end timestamptz
);

create table conversations (
  id serial primary key,
  type text,
  owner uuid references profiles(id),
  participants jsonb,
  metadata jsonb,
  created_at timestamptz default now()
);

create table messages (
  id serial primary key,
  conversation_id int references conversations(id) on delete cascade,
  sender_id uuid,
  role text,
  body text,
  created_at timestamptz default now()
);

-- RLS example
alter table conversations enable row level security;
create policy "select own conv" on conversations for select using (owner = auth.uid());
create policy "insert conv" on conversations for insert with check (owner = auth.uid());

alter table messages enable row level security;
create policy "select msg if conv owner" on messages for select using (
  exists (select 1 from conversations c where c.id = messages.conversation_id and c.owner = auth.uid())
);
create policy "insert own msg" on messages for insert with check (sender_id = auth.uid() or sender_id is null);
