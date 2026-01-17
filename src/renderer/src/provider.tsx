'use client'
import { ThemeProvider } from 'next-themes'
import { Toaster } from '@components/ui/sonner'
import { SidebarProvider } from './shared/contexts/ProviderSidebar'

export default function Provider({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SidebarProvider>
        <Toaster />
        {children}
      </SidebarProvider>
    </ThemeProvider>
  )
}
