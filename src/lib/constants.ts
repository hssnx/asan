// API endpoints
export const API_ENDPOINTS = {
  STRIPE_CHECKOUT: '/api/stripe/checkout',
  STRIPE_WEBHOOK: '/api/stripe/webhook',
  INVITE_ACCEPT: '/api/invite/accept',
  NOTIFY: '/api/notify',
};

// Routes
export const ROUTES = {
  HOME: '/',
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  PROFILE_EDIT: '/profile/edit',
  HOUSEHOLD: '/household',
  JOBS: '/jobs',
  NEW_JOB: '/jobs/new',
  JOB_DETAIL: (id: string) => `/jobs/${id}`,
  HELP: '/help',
  NEW_HELP: '/help/new',
  HELP_DETAIL: (id: string) => `/help/${id}`,
  EVENTS: '/events',
  NEW_EVENT: '/events/new',
  EVENT_DETAIL: (id: string) => `/events/${id}`,
  LEDGER: '/ledger',
  LEADERBOARD: '/leaderboard',
};

// Constants for feature flags
export const FEATURES = {
  ENABLE_NOTIFICATIONS: true,
  ENABLE_PAYMENTS: false,
  ENABLE_ANALYTICS: false,
};

// App-wide constants
export const APP_CONSTANTS = {
  APP_NAME: 'afghans.fr',
  SUPPORT_EMAIL: 'support@afghans.fr',
  DEFAULT_CURRENCY: 'EUR',
}; 