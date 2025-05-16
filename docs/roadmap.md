# 🗺️ afghans.fr — Feature Roadmap

---

## Phase 1: Core Infrastructure

- [ ] **Repository & Tooling**

  - [ ] Initialize Git repo, branch protection (`main`, `dev`)
  - [ ] Setup Prettier, ESLint, .editorconfig, .nvmrc
  - [ ] Integrate Vercel & Supabase

- [ ] **Authentication & Profiles**

  - [ ] Supabase Auth: Facebook & Google OAuth, email fallback
  - [ ] Create `users`, `profiles` tables in Supabase
  - [ ] Build `/profile/[id]` page (view)
  - [ ] Profile edit UI (bio, photo, socials)

- [ ] **UI Foundation**
  - [ ] Layout scaffold (Tailwind + shadcn/ui)
  - [ ] Global navigation (Home, Jobs, Help, Events, Leaderboard)
  - [ ] Under construction landing (for prod)
  - [ ] Mobile responsiveness (first pass)

---

## Phase 2: Membership & Payments

- [ ] **Household System**

  - [ ] `households`, `household_members`, `invitations` tables
  - [ ] Create household flow (join or create)
  - [ ] Invite flow (by email, code, or link)
  - [ ] Household dashboard (member list, roles)
  - [ ] Restrict access to paid households only

- [ ] **Payments Integration**
  - [ ] Stripe integration (subscriptions)
  - [ ] Payment UI: subscribe, manage, status
  - [ ] Stripe webhook endpoint to mark household as paid/unpaid

---

## Phase 3: Community Value Loop

- [ ] **Help Requests**

  - [ ] `help_requests` table, status field, category enum
  - [ ] `/help` list (filter by city/category)
  - [ ] `/help/new` (post a request)
  - [ ] `/help/[id]` (view/respond/close)
  - [ ] Notify volunteers/members on new relevant requests

- [ ] **Job Board**

  - [ ] `jobs` table
  - [ ] `/jobs` list (city, skill, status filters)
  - [ ] `/jobs/new` (post a job)
  - [ ] `/jobs/[id]` (view/contact)
  - [ ] Show poster’s profile/contact options

- [ ] **Event Engine**
  - [ ] `events` table
  - [ ] `/events` calendar/list
  - [ ] `/events/new` (create event)
  - [ ] `/events/[id]` (view, RSVP)
  - [ ] RSVP logic, reminder notifications

---

## Phase 4: Trust, Engagement, & Growth

- [ ] **Transparency Ledger**

  - [ ] `ledger_entries` table
  - [ ] `/ledger` public page (summary, CSV export)
  - [ ] Admin: add expense entry, upload receipts (Supabase Storage)

- [ ] **Points & Leaderboard**

  - [ ] `points_log` table
  - [ ] Award points for help, jobs, events
  - [ ] `/leaderboard` page (by city, month)
  - [ ] Show points on user profiles

- [ ] **Notification Layer**
  - [ ] Email/SMS integration (Resend, Twilio, etc.)
  - [ ] Notify for invites, events, payment, help/job responses
  - [ ] Generic notification helper (`notify(userId, type, payload)`)

---

## Phase 5: Finalization, Ops & Launch

- [ ] **Admin & Ops**

  - [ ] Admin dashboard (manage households, events, content)
  - [ ] Moderate help/jobs/events

- [ ] **QA & Hardening**

  - [ ] Lighthouse audit (≥90 mobile)
  - [ ] Automated tests (unit/smoke)
  - [ ] Error boundary pages, analytics

- [ ] **Docs & Launch**
  - [ ] User guides/docs
  - [ ] Impact metrics / reporting (CSV, PDF)
  - [ ] Announce to community

---

**Legend:**

- Move feature cards across Notion/GitHub Projects as you finish.
- You always have a deployable, testable product after each phase.
