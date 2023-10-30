import Topbar from '@/components/topbar'
import { cn } from '@/lib/utils'
import Sidebar from '@/components/sidebar'
import React from 'react'

const DashboardLayout = (props: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <header>
                <Topbar />
            </header>
            <main className={cn(
                "bg-gray-950 overflow-hidden pl-80 pr-7 py-7 [&:has([is-navbar-minimal])]:pl-20"
            )}>
                <Sidebar userLimitCount={0}/>
            </main>
            {props.children}
        </div>
    )
}

export default DashboardLayout