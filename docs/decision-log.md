# Decision Log

This document tracks significant design, technical, and infrastructure decisions made throughout the development of the project.

## [YYYY-MM-DD] Initial Architecture Decisions

### Tech Stack Selection

- **Next.js with App Router**: Selected for its server-side rendering capabilities, built-in routing, and React Server Components.
- **TypeScript**: Chosen for type safety and improved developer experience.
- **Tailwind CSS**: Adopted for rapid UI development and consistent styling.
- **Supabase**: Selected as the backend solution for authentication, database, and storage needs.

### Database Schema Design

- Will implement users, profiles, households, and household_members tables in Supabase.
- Foreign key relationships will maintain data integrity between tables.

### Authentication Strategy

- Utilizing Supabase Auth for email/password and social authentication.
- JWT-based authentication for secure API access.

### Deployment Strategy

- Main branch deploys to production (afghans.fr).
- Development branch deploys to preview environment (dev.afghans.fr).
- Feature branches for individual feature development.

## [2024-07-27] Development Workflow Setup

### Git Branch Strategy

- **Main Branch (Production)**

  - Protected branch that requires pull request reviews
  - Deploys automatically to afghans.fr
  - Always stable and production-ready
  - No direct commits allowed

- **Dev Branch (Staging)**

  - Integration branch for testing features before production
  - Deploys automatically to dev.afghans.fr
  - Used for quality assurance and testing

- **Feature Branches**
  - Created from dev branch
  - Used for individual feature development
  - Format: `feature/feature-name`
  - Merged back to dev via pull request

### Workflow Process

1. Create feature branch from dev: `git checkout -b feature/my-feature dev`
2. Develop and test locally
3. Push feature branch to GitHub
4. Create a pull request to merge into dev
5. After review and testing on dev.afghans.fr, create a PR from dev to main
6. Main branch changes are automatically deployed to production

### Branch Protection Rules

- Main branch is protected:
  - Requires pull request before merging
  - Requires at least one approval
  - Prevents force pushes
  - No direct commits allowed

## [Future dates will be added as decisions are made]
