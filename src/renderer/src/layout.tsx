import { Outlet } from 'react-router'
import { AppSidebar } from '@renderer/shared/components/AppSidebar'
import { AppHeader } from '@renderer/shared/components/AppHeader'

export default function Layout() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <AppSidebar />

      <div className="flex flex-col">
        <AppHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
