import { AppSidebar } from "@/components/main/AppSidebar"
import { Header } from "@/components/main/Header"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <SidebarProvider>
                <AppSidebar />
                <main className="pt-[60px]">
                    <SidebarTrigger />
                    <div className="bg-gray-100">
                    {children}
                    </div>
                </main>
            </SidebarProvider>
        </div>
    )
}