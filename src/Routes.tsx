import { Routes, Route } from 'react-router-dom'
import App from '@/App'
import { Anime } from '@/pages/Anime'

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/anime" element={<Anime />} />
    </Routes>
  )
}