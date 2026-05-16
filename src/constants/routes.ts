export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  CONTACT: '/contact',
} as const

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]
