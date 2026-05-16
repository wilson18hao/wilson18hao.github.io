import { Outlet } from 'react-router-dom'
import { BackgroundBlobs } from '../components/layout/BackgroundBlobs'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import './MainLayout.css'

export function MainLayout() {
  return (
    <div className="layout">
      <BackgroundBlobs />
      <Header />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
