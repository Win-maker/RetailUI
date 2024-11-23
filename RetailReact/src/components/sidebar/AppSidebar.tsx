import React from 'react'
// import {Home, Inbox} from "lucide-react"
import { NavLink } from "react-router-dom";

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
 

const items = [
  {
    title: "Home",
    url: "/home",
   
  },
  {
    title: "ViewItems",
    url: "/viewitems",
  
  },
  {
    title: "About",
    url: "/about",
 
  },
  {
    title: "Contact",
    url: "/contact",
   
  },

  
]
const AppSidebar = () => {
  return (
    <Sidebar className="mt-[70px]">
      <SidebarContent className=" bg-sky-100/80 backdrop-blur-lg shadow-lg">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                  <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-lg transition-all ${
                          isActive
                            ? 'bg-sky-500 text-black shadow-lg'
                            : 'text-sky-700 hover:bg-sky-200'
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar