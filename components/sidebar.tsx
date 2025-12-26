import Link from "next/link"
import { BarChart3, LayoutDashboard, Map, Settings, Users } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="hidden w-64 flex-col border-r bg-sidebar p-4 md:flex">
      <div className="mb-8 flex items-center gap-2 px-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Map className="h-5 w-5" />
        </div>
        <span className="text-lg font-bold">UrbanFlow AI</span>
      </div>
      <nav className="flex-1 space-y-1">
        <Link
          href="#"
          className="flex items-center gap-3 rounded-md bg-sidebar-accent px-3 py-2 text-sm font-medium text-sidebar-accent-foreground"
        >
          <LayoutDashboard className="h-4 w-4" />
          Dashboard
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
        >
          <BarChart3 className="h-4 w-4" />
          Analytics
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
        >
          <Users className="h-4 w-4" />
          Commuter Profiles
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
      </nav>
      <div className="mt-auto border-t border-sidebar-border pt-4">
        <div className="flex items-center gap-3 px-2">
          <div className="h-8 w-8 rounded-full bg-muted" />
          <div className="text-sm">
            <p className="font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground">Transport Dept.</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
