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

## [Future dates will be added as decisions are made]
