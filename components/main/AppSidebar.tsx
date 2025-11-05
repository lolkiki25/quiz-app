import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Gengis Hkan",
    url: "#",
    icon: Home,
  },
  {
    title: "Figma ашиглах заавар",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Figma-д загвар зохион бүтээх аргачлалууд",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Санхүүгийн технологи 2023",
    url: "#",
    icon: Search,
  },
  {
    title: "Хэрэглэгчийн интерфейс дизайны шилдэг туршлага",
    url: "#",
    icon: Settings,
  },
  {
    title: "Эрүүл амьдралын хэв маяг",
    url: "#",
    icon: Settings,
  },
    {
    title: "Технологийн салбарт хийгдэж буй инноваци",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="pt-[50px] bg-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[17px] font-bold text-black">History</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}