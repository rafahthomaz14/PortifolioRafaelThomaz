"use client"

import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      items: [
        { title: "Apresentação", url: "/" },
        { title: "Formação Acadêmica", url: "/Formacao" },
        { title: "Contato", url: "/Contato" },
      ],
    },
    {
      title: "Meus Projetos",
      url: "/Projetos",
      items: [
        { title: "Todos os Projetos", url: "/Projetos" },
        { title: "Deploy Landing Page MRE", url: "https://mresolucoes.vercel.app/" },
        { title: "Deploy Page Hortifruti", url: "https://hortifruti2024.netlify.app/" },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeSubUrl, setActiveSubUrl] = React.useState<string>("")
  const [activeMainUrl, setActiveMainUrl] = React.useState<string>("")

  React.useEffect(() => {
    const path = window.location.pathname
    const hash = window.location.hash

    let foundSub = ""
    let foundMain = ""

    data.navMain.forEach(mainItem => {
      if (mainItem.url === path || (mainItem.url === "#" && hash)) {
        foundMain = mainItem.url
      }
      mainItem.items?.forEach(subItem => {
        if (subItem.url === path || subItem.url === hash) {
          foundSub = subItem.url
          foundMain = mainItem.url
        }
      })
    })

    setActiveMainUrl(foundMain || data.navMain[0].url)
    setActiveSubUrl(foundSub || (data.navMain[0].items?.[0]?.url ?? ""))
  }, [])

  function handleSubMenuClick(url: string) {
    setActiveSubUrl(url)
  }

  function handleMainMenuClick(url: string) {
    setActiveMainUrl(url)
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Portifólio Rafael</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map(mainItem => (
              <SidebarMenuItem key={mainItem.title}>
                <SidebarMenuButton asChild>
                  <a
                    href={mainItem.url}
                    className={`font-medium ${activeMainUrl === mainItem.url ? "text-blue-600" : ""}`}
                    onClick={() => handleMainMenuClick(mainItem.url)}
                  >
                    {mainItem.title}
                  </a>
                </SidebarMenuButton>

                {mainItem.items?.length ? (
                  <SidebarMenuSub>
                    {mainItem.items.map(subItem => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild isActive={activeSubUrl === subItem.url}>
                          <a
                            href={subItem.url}
                            className={activeSubUrl === subItem.url ? "text-blue-600 font-semibold" : ""}
                            onClick={() => handleSubMenuClick(subItem.url)}
                          >
                            {subItem.title}
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
