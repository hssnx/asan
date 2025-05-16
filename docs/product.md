# 🇦🇫 afghans.fr — Community-as-a-Service Platform for the Afghan Diaspora

## 🧠 Project Vision

**afghans.fr** is a next-generation platform for organizing, empowering, and connecting the Afghan diaspora in France. It launches in Nancy and is designed to scale city-by-city (e.g., `nancy.afghans.fr`, `paris.afghans.fr`). The aim: make it radically easier for Afghans to find work, get help, contribute, and build real social capital — all within a transparent, member-driven, self-sustaining ecosystem.

---

## 🚀 Core Features (MVP)

- **User authentication:** Social login (Facebook or Google), with optional email/password fallback
- **Household/family membership:** One payer, up to five profiles per household; invite/join via link or email (not public search)
- **Job board:** Find/provide work (tutoring, translation, errands, etc.)
- **Help requests & volunteering:** Ask for or offer help (paperwork, transport, etc.)
- **Event announcements:** Publish and RSVP to local cultural or educational events
- **Recurring membership:** €19/month per family (household)
- **Transparent ledger:** Public view of all community funds and spending
- **Leaderboard:** Track and reward the most helpful users and families
- **Mobile-first design:** Works seamlessly on all devices
- **City-based scaling:** Multi-city/subdomain logic from day one

---

## 🏗️ Tech Stack

| Layer          | Tech/Service             | Why?                                                           |
| -------------- | ------------------------ | -------------------------------------------------------------- |
| Frontend       | **Next.js (App Router)** | Fast, scalable, SEO-ready, modern                              |
| Styling        | **Tailwind CSS**         | Rapid, utility-first, responsive                               |
| UI Components  | **shadcn/ui**            | Accessible, prebuilt, easy to customize                        |
| Layout/UI Kits | **21st.dev**             | Open-source, modern, ready-made Tailwind sections              |
| Animation      | **Framer Motion**        | (Optional) Polished transitions/motion                         |
| Auth           | **Supabase Auth**        | Social login (**Facebook or Google**); fallback email/password |
| Database       | **Supabase Postgres**    | Scalable, relational, real-time                                |
| Backend Logic  | **Next.js API Routes**   | Custom endpoints, Stripe integration, webhooks                 |
| Payments       | **Stripe**               | Subscriptions, recurring billing                               |
| Hosting        | **Vercel**               | Best-in-class for Next.js                                      |
| DNS            | **Cloudflare**           | Subdomains, SSL, security                                      |
| Email          | **Resend** (planned)     | Transactional, onboarding emails                               |
| Analytics      | **Vercel built-in**      | Basic pageview/events                                          |

---

## 📂 Folder Structure

/asan
├── src/
│ ├── app/ # Pages/routes (Next.js App Router)
│ │ ├── page.tsx # Home page
│ │ ├── jobs/ # /jobs, etc.
│ │ ├── help/ # /help, etc.
│ │ ├── events/ # /events, etc.
│ │ ├── api/ # API routes (e.g. /api/invite, /api/stripe)
│ ├── components/ # UI components (shadcn, custom)
│ ├── lib/ # Supabase client, helpers
│ ├── styles/ # Tailwind or custom CSS (optional)
├── public/ # Static assets (images, favicon)
├── .env.local # API keys/secrets (gitignored)
├── package.json # NPM/Yarn dependencies
├── tsconfig.json # TypeScript config
├── tailwind.config.ts # Tailwind config
├── vercel.json # (optional) Vercel config
├── .gitignore # Node, env, vercel, etc.
├── README.md # Full project doc

**No `/client` or `/server` folders required unless you add a backend in the future.**

---

## 🧠 AI Agent & Contributor Guidelines

- **Modular, documented code:** Use atomic components, no monoliths.
- **Scaffold:**
  - Pages in `src/app/`
  - Components in `src/components/`
  - API endpoints in `src/app/api/`
  - DB logic in Supabase and helper functions in `src/lib/`
- **Social logins:** Use Supabase Auth with Facebook and Google enabled; email/password as fallback only.
- **Household system:**
  - One payer per household (admin role, up to 5 total members)
  - Invites via code or email only, not public search
- **Track all decisions:** Log major tech and product choices in `/docs/decisions.md` (if used)

---

## 🗃️ Database Entities (MVP Example)

- `users`: Auth info, unique ID, email, provider
- `profiles`: user_id, name, avatar, city, points, etc.
- `households`: id, name, payer_user_id, created_at, status
- `household_members`: household_id, user_id, role, joined_at
- `jobs`: id, household_id, description, city, status, poster_id, etc.
- `help_requests`: id, household_id, type, city, requester_id, status
- `events`: id, title, city, date, description, RSVP list
- `ledger_entries`: id, type, amount, timestamp, reason, user/household_id
- `invitations`: id, household_id, email, status, expires_at

---

## 🛠️ Development/Deployment

1. Initialize in `/asan` (Next.js root).
2. Install deps:  
   npm install

3. Run locally:
   npm run dev

4. Deploy to Vercel:
   vercel --prod

5. Domains managed on Cloudflare; Supabase via dashboard.

---

## 🗺️ Roadmap

1. Scaffold repo & Next.js app
2. Create landing page, login/signup, onboarding flow
3. Integrate Supabase Auth & DB
4. Build core features: jobs, help, events, ledger, leaderboard
5. Add payments, admin tools, launch city subdomains
6. Launch, iterate, expand

---

## 🏁 Core Principles

- Community as a service: structured, member-driven, transparent
- Mobile-first, accessible, scalable, AI/automation ready
- Every feature = real-world value, not just tech for tech’s sake

---

**Built and maintained by Hassan Shahir.
Every line of code = real-world impact.**

> _Afghans don’t need saviors. They need structure. This is the blueprint._
