import { cn } from '@/lib/utils';
import React from 'react'

interface SidebarProps {
    className?: string;
    isProPlan?: boolean;
    userLimitCount?: number;
}

const Sidebar: React.FC<SidebarProps> = ({
    className,
    isProPlan,
    userLimitCount
}) => {
    return (
        <div className={cn(
            "text-white",
            className
        )}>
            <div className="h-20 pl-7 pr-6">
                <div className="flex items-center justify-between w-full">
                    {}
                </div>
            </div>
        </div>
    )
}

export default Sidebar