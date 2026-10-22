import React from 'react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from './ui/sidebar';
import { Home, Inbox, Calendar, Search, Settings, User2, ChevronUp, Plus, ClipboardPen, CircleQuestionMark, ChevronDown, Clipboard } from 'lucide-react'
import Link from 'next/link';
import Image from 'next/image';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';


const AppSideBar = () => {

  const items = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ];


  return (
    <Sidebar collapsible='icon'>

      <SidebarHeader className='py-4'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton render={<Link href='/' />}>
              <Image src={'/logo.svg'} width={20} height={20} alt='Logo' />
              <span>AR Dev</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>

        {/* APPLICATION - SIDEBARGROUP#01 */}
        <SidebarGroup>
          <SidebarGroupLabel className='text-[13px]'>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => {
                const { title, url } = item
                return (
                  <SidebarMenuItem key={title}>

                    <SidebarMenuButton render={<Link href={url} />}>
                      <item.icon />
                      <span>{title}</span>
                    </SidebarMenuButton>
                    {title.toLowerCase() === 'inbox' && (<SidebarMenuBadge>14</SidebarMenuBadge>)}
                  </SidebarMenuItem>);
              })}

            </SidebarMenu>

          </SidebarGroupContent>
        </SidebarGroup>

        {/* PROJECTS - SIDEBARGROUP#01 */}
        <SidebarGroup>
          <SidebarGroupLabel className='text-[13px]'>Projects</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className='sr-only'>Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton render={<Link href='#' />}>
                  <ClipboardPen /> All Project
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton render={<Link href='#' />}>
                  <Plus /> Add Project
                </SidebarMenuButton>
              </SidebarMenuItem>


            </SidebarMenu>
          </SidebarGroupContent>

        </SidebarGroup>


        {/* HELP - SIDEBARGROUP#03/?? - COLLAPSIBLE */}
        <Collapsible defaultOpen >
          <SidebarGroup>
            <SidebarGroupLabel render={<CollapsibleTrigger />}>
              Help <ChevronDown className='ml-auto' />

            </SidebarGroupLabel>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton render={<Link href='#' />}>
                      <Clipboard />
                      Go to official site
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton render={<Link href='#' />}>
                      <CircleQuestionMark />
                      <span>Need More Help?</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>


                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>

          </SidebarGroup>
        </Collapsible>

        {/* NESTED - NESTED_SIDEBARGROUP#01 */}
        <SidebarGroup>
          <SidebarGroupLabel className='text-[13px]'>Nested Items</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton render={<Link href='#' />}>
                  <ClipboardPen /> All Project
                </SidebarMenuButton>

                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton render={<Link href='#' />}>
                      Project <Plus className='ml-auto' />
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>

                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton render={<Link href='#' />}>
                      Profile <Plus className='ml-auto' />
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>

                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton render={<Link href='#' />}>
                      Product <Plus className='ml-auto' />
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>




            </SidebarMenu>
          </SidebarGroupContent>

        </SidebarGroup>



      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger render={<SidebarMenuButton />}>
                {/* <SidebarMenuButton > */}
                <User2 /> John Doe <ChevronUp className='ml-auto' />
                {/* </SidebarMenuButton> */}
              </DropdownMenuTrigger>

              <DropdownMenuContent align='end'>
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>

            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSideBar;