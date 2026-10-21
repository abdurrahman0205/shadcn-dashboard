import { LogOut, Settings, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import LightDarkMode from './navbar-components/LightDarkMode';
import AppSideBarCollapse from './navbar-components/AppSideBarCollapse';

const NavBar = () => {
  return (
    <nav className='p-4 flex justify-between items-center'>
      {/* Left */}
      <AppSideBarCollapse />

      {/* RIGHT */}
      <div className='flex items-center justify-between gap-4'>
        <Link href='/'>Dashboard</Link>

        <LightDarkMode />

        <DropdownMenu>
          <DropdownMenuTrigger>

            <Avatar className='cursor-pointer'>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
            <DropdownMenuItem className='cursor-pointer'>
              <User className='size-[1.2rem] mr-2'/> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className='size-[1.2rem] mr-2'/> Settings
            </DropdownMenuItem>
              <DropdownMenuItem variant='destructive'>
                <LogOut className='size-[1.2rem] mr-2' /> Log out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default NavBar;