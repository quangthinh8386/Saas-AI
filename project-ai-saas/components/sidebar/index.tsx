"use client"

import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/store/sidebar-store';
import React from 'react'
import Logo from '../logo';
import SidebarToggle from './sidebarToggle';
import { UserButton, useUser } from '@clerk/nextjs';
import { MAX_FREE_COUNTS } from '@/constants';
import { Progress } from '@/components/ui/progress';
import ThemeToggle from './themeToggle';
import Navbar from './navbar';
import SubcriptionButton from '@/components/subcriptionButton';

interface SidebarProps {
    className?: string;
    isProPlan?: boolean;
    userLimitCount?: number;
}

const Sidebar: React.FC<SidebarProps> = ({
    className,
    isProPlan,
    userLimitCount = 0
}) => {
    const { isMinimal } = useSidebarStore()
    const { user } = useUser()
    return (
        <div className={cn(
            "text-white",
            className
        )}>
            <div className="lg:h-20 lg:pl-7 lg:pr-6">
                <div className="flex items-center justify-between w-full">
                    {
                        !isMinimal && <Logo />
                    }
                    <SidebarToggle />
                </div>
            </div>
            <div className="lg:grow lg:overflow-y-auto lg:scroll-smooth lg:scrollbar-none">
                <Navbar />
            </div>
            <div className={cn(
                "fixed bottom-8 left-4 right-4 lg:left-7 lg:right-auto",
                isMinimal && "lg:left-3"
            )}>
                <div className='mb-4 p-4 rounded-lg bg-gray-900'>
                    <div className='mb-4 flex items-center'>
                        <UserButton afterSignOutUrl='/' />
                        {
                            !isMinimal &&
                            <span className='text-sm ml-4'>
                                {user?.emailAddresses?.[0]?.emailAddress}
                            </span>
                        }
                    </div>
                    {
                        !isMinimal &&
                        <div>
                            {
                                !isProPlan &&
                                <div className='mb-4'>
                                    <div className='text-center md-2 text-muted-foreground font-semibold'>
                                        {userLimitCount}/{MAX_FREE_COUNTS} Free generations
                                    </div>
                                    <Progress 
                                    value={(userLimitCount / MAX_FREE_COUNTS) * 100} 
                                    className='bg-gray-950 h3'
                                    indicatorClassName='gradient-btn'
                                    />
                                </div>
                            }
                            <SubcriptionButton isProPlan={isProPlan} />
                        </div>
                    }
                </div>
                <ThemeToggle />
            </div>
        </div>
    )
}

export default Sidebar