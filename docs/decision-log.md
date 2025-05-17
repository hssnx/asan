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

## 2023-11-14: Project Structure Scaffold

### Decisions:

1. **Folder Structure**:

   - Implemented the exact folder structure as specified in the requirements
   - Created route groups for public and dashboard areas using the Next.js convention with parentheses: `(public)` and `(dashboard)`
   - Set up API routes for future implementation

2. **Supabase Integration**:

   - Created a simplified Supabase client that can be imported throughout the app
   - Simplified server-side handling to avoid TypeScript errors and improve maintainability
   - Added a note about server component usage of Supabase

3. **Component Design**:

   - Created basic Avatar and HouseholdAvatar components
   - Used functional components with TypeScript interfaces

4. **Type System**:

   - Defined comprehensive TypeScript interfaces for all major entities
   - Used consistent naming and property conventions
   - Included domain-specific types like job statuses and help request urgency levels

5. **CSS/Styling**:

   - Updated Tailwind CSS configuration to work with Tailwind v4
   - Used `@import "tailwindcss/preflight"` instead of `@tailwind base` as required by v4
   - Kept the shadcn/ui styling variables for later component addition

6. **Environment Variables**:
   - Added fallbacks for Supabase environment variables to prevent runtime errors
   - Used console warnings instead of thrown errors for development experience

### Rationale:

- **Simplicity First**: Implemented minimal placeholder content to ensure the structure works
- **TypeScript Strictness**: Ensured proper typing throughout the codebase
- **Framework Alignment**: Followed Next.js App Router conventions for folder structure
