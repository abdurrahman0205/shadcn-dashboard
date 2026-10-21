'use client'
import React from 'react';
import { SidebarTrigger, useSidebar } from '../ui/sidebar';
import { Button } from '../ui/button';
import { Sidebar } from 'lucide-react';

const AppSideBarCollapse = () => {
  const {toggleSidebar} = useSidebar()

  return (
    <>
      {/* this one is ready-mate to use */}
      <SidebarTrigger className='cursor-pointer' /> 

      {/* Custome Sidebar open/close */}
      {/* <Button
        onClick={toggleSidebar}
        variant='outline'><Sidebar/></Button> */}





    </>


  );
};

export default AppSideBarCollapse;