import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import { MainLayout } from '../layouts/MainLayout'
import AboutPage from '../pages/About'
import ContactPage from '../pages/Contact'
import HomePage from '../pages/Home'
import ProjectsPage from '../pages/Projects'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
