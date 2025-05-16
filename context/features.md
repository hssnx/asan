# 🛠️ afghans.fr — Features & Build Order

## Phase 1: Core Infrastructure

### 1. Profiles

**What:**  
Every user has a profile with name, photo, city, bio, points, and social/contact links (WhatsApp, Facebook, Telegram).  
**Why:**  
All features (jobs, help, events) link back to user profiles. Needed for community trust, points, and messaging.  
**Build:**

- Supabase: `users`, `profiles` tables
- Next.js: `/profile/[id]` page, profile edit form

---

### 2. Household Membership & Payments

**What:**  
Family membership model—one paying member (admin), up to 5 members per household. Handles recurring Stripe payments, access control, invites, and role management.  
**Why:**  
Enables revenue and ties user access to payment. All job/help/event features check household status.  
**Build:**

- Supabase: `households`, `household_members`, `invitations`
- Stripe integration: `/api/stripe/` endpoints
- Next.js: household creation, invite/join flows, payment status checks

---

## Phase 2: Community Value Loop

### 3. Help Requests (multi-category)

**What:**  
Users post requests for help (paperwork, translation, rides, babysitting, general questions, etc.), visible by city/category. Volunteers or members can respond and complete requests.  
**Why:**  
Solves 80% of real-life problems (bureaucracy, daily life) and is a reason to return regularly.  
**Build:**

- Supabase: `help_requests` table, status field, category enum
- Next.js: `/help` (list, filter), `/help/new`, `/help/[id]`
- Notifications to matching volunteers

---

### 4. Job Board

**What:**  
Post or find jobs (tutoring, cleaning, translation, errands). Jobs can be city-filtered and tracked by open/filled status.  
**Why:**  
Addresses underemployment, enables skill matching, and grows trust.  
**Build:**

- Supabase: `jobs` table
- Next.js: `/jobs` (list, filter), `/jobs/new`, `/jobs/[id]`
- Direct contact links on job poster’s profile

---

### 5. Event Engine

**What:**  
Create, publish, and RSVP for events (cultural, sports, workshops). Events have category, time, location, and (optionally) budget.  
**Why:**  
Drives in-person engagement, combats isolation, helps community discovery.  
**Build:**

- Supabase: `events` table
- Next.js: `/events` (calendar/list), `/events/new`, `/events/[id]`
- RSVP button; reminders sent to attendees

---

## Phase 3: Trust, Engagement, & Growth

### 6. Transparency Ledger

**What:**  
Public ledger shows every membership euro in/out (memberships, expenses, events). Shows current balance and links receipts.  
**Why:**  
Builds trust and destroys “where’s the money?” rumors.  
**Build:**

- Supabase: `ledger_entries` table
- Next.js: `/ledger` page (summary + detailed CSV/download)
- Admin UI for adding expenses with receipt upload (Supabase Storage)

---

### 7. Points & Leaderboard

**What:**  
Users earn points for helping others, posting jobs, attending events. Leaderboard tracks top contributors per city/month.  
**Why:**  
Gamifies good behavior and gives public recognition.  
**Build:**

- Supabase: `points_log`, compute leaderboard as view or nightly cron
- Next.js: `/leaderboard` page, profile badge

---

### 8. Notification Layer (service)

**What:**  
Unified notification system: emails, SMS (for critical reminders), and push (future). Used for invites, event reminders, help/job responses, payment issues.  
**Why:**  
Ensures people see requests, deadlines, and events—drives retention.  
**Build:**

- Node/Next.js API route + Supabase function or external service (Resend, Twilio)
- Helper: `notify(userId, type, payload)`

---

## **Build Order Summary (by Dependency)**

1. Profiles
2. Household Membership & Payments
3. Help Requests
4. Job Board
5. Event Engine
6. Transparency Ledger
7. Points & Leaderboard
8. Notification Layer (service used across all)

---

**This order ensures you always build on a working, integrated base:  
— no feature before its dependency exists, fast feedback, and value to users as soon as possible.**
