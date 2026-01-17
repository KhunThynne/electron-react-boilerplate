'use client'
import { Bell, Menu } from 'lucide-react'
import { Button } from '@components/ui/button'
import { useSidebarContext } from '../contexts/ProviderSidebar'
import clsx from 'clsx'

export function AppHeader() {
  const { open, setOpen } = useSidebarContext()
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6">
      <div className="w-full flex-1">
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>
      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
        <Bell className="size-5" />
        <span className="sr-only">Toggle notifications</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={clsx('size-8 rounded-full lg:hidden cursor-pointer', open && 'bg-muted')}
        onClick={() => setOpen(!open)}
      >
        <Menu className="size-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>
    </header>
  )
}
