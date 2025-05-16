# Afghans.fr Project

A Next.js application for the Afghans.fr platform.

## Project Setup

### Prerequisites

- Node.js (version specified in `.nvmrc`)
- npm or pnpm
- Git

### Local Development

1. Clone the repository:

```bash
git clone git@github.com:youruser/afghans-fr.git
cd afghans-fr
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Copy the example environment file:

```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local` with your Supabase credentials.

5. Start the development server:

```bash
npm run dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
/
├── src/
│    ├── app/         # Next.js App Router pages
│    ├── components/  # Reusable UI components
│    ├── lib/         # Utility functions and libraries
│    └── styles/      # Global styles
├── public/           # Static assets
├── docs/             # Project documentation
│    └── decision-log.md
├── FEATURES.md       # Feature roadmap
└── README.md         # This file
```

## Deployment

- **Production** (afghans.fr): Automatically deployed from the `main` branch
- **Preview** (dev.afghans.fr): Automatically deployed from the `dev` branch

## Development Workflow

1. Create feature branches from `dev`
2. Make changes and test locally
3. Create a pull request to the `dev` branch
4. Once reviewed and merged, test on dev.afghans.fr
5. When stable, merge `dev` into `main` for production deployment

## Documentation

- See [FEATURES.md](./FEATURES.md) for the feature roadmap
- See [docs/decision-log.md](./docs/decision-log.md) for architectural decisions
