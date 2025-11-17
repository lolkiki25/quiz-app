import { AppSidebar } from "@/components/main/AppSidebar"
import { Header } from "@/components/main/Header"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <SidebarProvider>
                {/* <AppSidebar items={articles} /> */}
                <main className="pt-[60px] bg-gray-100">
                    <SidebarTrigger/>
                    {children}
                </main>
            </SidebarProvider>
        </div>
    )
}