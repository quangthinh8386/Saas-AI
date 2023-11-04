"use client";

import React from 'react'
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet"
import Sidebar from './index';
import { useSidebarStore } from '@/store/sidebar-store';

interface MobieSidebarProps {
  isProPlan?: boolean;
  userLimitCount?: number;
}


const MobieSidebar: React.FC<MobieSidebarProps> = ({ isProPlan, userLimitCount }) => {
  const {isOpen} = useSidebarStore()

  return (
    <Sheet open={isOpen}>
      <SheetContent
        className='w-screen boder-none bg-black p-0 pt-8'
        side='left'
      >
        <Sidebar isProPlan={isProPlan} userLimitCount={userLimitCount} />
      </SheetContent>
    </Sheet>
  )
}

export default MobieSidebar