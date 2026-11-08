-- Aplicar no SQL Editor do seu projeto Supabase. Nenhuma credencial neste arquivo.
begin;
create table if not exists public.study_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  payload jsonb not null,
  updated_at timestamptz not null default now(),
  constraint valid_payload check (
    jsonb_typeof(payload) = 'object'
    and payload @> '{"version":1}'::jsonb
    and jsonb_typeof(payload->'answers') = 'object'
    and jsonb_typeof(payload->'bookmarks') = 'array'
    and jsonb_typeof(payload->'history') = 'array'
    and payload ?& array['version','answers','bookmarks','history','cursor','simulation','updatedAt']
  )
);
alter table public.study_progress enable row level security;
revoke all on public.study_progress from anon;
revoke all on public.study_progress from authenticated;
grant select, insert, update, delete on public.study_progress to authenticated;
drop policy if exists "Ler somente o próprio progresso" on public.study_progress;
create policy "Ler somente o próprio progresso" on public.study_progress for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists "Criar somente o próprio progresso" on public.study_progress;
create policy "Criar somente o próprio progresso" on public.study_progress for insert to authenticated with check ((select auth.uid()) = user_id);
drop policy if exists "Atualizar somente o próprio progresso" on public.study_progress;
create policy "Atualizar somente o próprio progresso" on public.study_progress for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
drop policy if exists "Excluir somente o próprio progresso" on public.study_progress;
create policy "Excluir somente o próprio progresso" on public.study_progress for delete to authenticated using ((select auth.uid()) = user_id);
commit;
