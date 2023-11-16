"use client";

import { useSidebarStore } from '@/store/sidebar-store';
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { LayoutDashboard, MessageSquare, Image, Video, FileAudio, Code } from 'lucide-react'

const routes = [
  {
    title: "Dashboard",
    url: '/dashboard',
    icon: LayoutDashboard,
    slug: 'dashboard',
    color: "text-sky-500"
  },
  {
    title: 'Conversation',
    url: '/conversation',
    icon: MessageSquare,
    color: "text-violet-500"
  },
  {
    title: 'Photo generator',
    url: '/photo',
    icon: Image,
    color: "text-pink-700"
  },
  {
    title: 'Video generator',
    url: '/video',
    icon: Video,
    color: "text-orange-700"
  },
  {
    title: 'Audio generator',
    url: '/audio',
    icon: FileAudio,
    color: "text-emerald-700"
  },
  {
    title: 'Code generator',
    url: '/code',
    icon: Code,
    color: "text-green-700"
  }
]

const Navbar = () => {

  const { isMinimal, handleClose } = useSidebarStore()
  const pathname = usePathname()

  return (
    <div className='pr-5'>
      {
        routes.map(( route ) =>
          <div key={route.url} className="mb-2">
            <Link href={route.url} key={route.url} onClick={handleClose}>
              <div className={cn(
                "flex items-center py-1 rounded-lg px-7 opacity-7",
                "hover:opacity-100",
                isMinimal && "px-1",
                pathname.includes(route.url) && "transition-colors bg-gradient-to-l from-slate-800 to-slate-900 shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.05),0_0.25rem_0.5rem_0_rgba(0,0,0,0.1)] opacity-100"
              )}>
                <div className="flex items-center p-2">
                  <route.icon className={cn(
                    "w-5 h-5 mr-3",
                    route.color
                  )} />
                  {
                    !isMinimal &&
                    <span className='ml-4 text-sm'>{route.title}</span>
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