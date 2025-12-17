import { ModeToggle } from "@/components/provider/ModeToggle";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ux/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        {/* Navigation Bar */}
        <nav className="flex items-center h-16 border-b px-4 w-full">
          <SidebarTrigger />

          <div className="flex-1 flex justify-center">
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>

          <ModeToggle />
          <div className="w-10"></div>
        </nav>

        {/* Content Area */}
        <div className="p-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
