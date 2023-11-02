"use client";

import { useSidebarStore } from '@/store/sidebar-store';
import React from 'react'
import { usePathname } from 'next/navigation';
import { NAVIGATIONS } from '@/constants';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Navbar = () => {

  const { isMinimal, handleClose } = useSidebarStore()
  const pathname = usePathname()

  return (
    <div>
      {
        NAVIGATIONS.map(({ title, url, icon }) =>
          <div key={url} className="mb-2">
            <Link href={url} onClick={handleClose}>
              <div className={cn(
                "flex items-center z-1000 py-1 rounded-lg px-7 opacity-7",
                "hover:opacity-100",
                isMinimal && "px-1",
                pathname.includes(url) && "transition-colors bg-gradient-to-l from-slate-800 to-slate-900 shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.05),0_0.25rem_0.5rem_0_rgba(0,0,0,0.1)] opacity-100"
              )}>
                <div className="flex items-center p-2">
                  {
                    isMinimal &&
                    <span className='ml-4 text-sm'>{title}</span>
                  }
                </div>
              </div>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Navbar