import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import HomePage from './pages/HomePage.tsx'
import StoreHatchPage from './pages/StoreHatchPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import { useReveal } from './useReveal.ts'

function PageEffects() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  useReveal(pathname)
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <PageEffects />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/storehatch" element={<StoreHatchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
