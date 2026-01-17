import { Route, Routes } from 'react-router'
import Dashboard from './features/dashboard'
import Layout from './layout'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
