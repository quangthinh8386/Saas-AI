import Topbar from '@/components/topbar'
import { cn } from '@/lib/utils'
import Sidebar from '@/components/sidebar'
import React from 'react'
import MobieSidebar from '@/components/sidebar/mobieSidebar'
import UpgradeProModal from '@/components/dashboard/upgradeProModal'

const DashboardLayout = (props: {
    children: React.ReactNode
}) => {
    const isProPlan = false;
    const userLimitCount = 0;
    return (
        <div>
            <header>
                <Topbar />
            </header>
            <main className={cn(
                "lg:bg-gray-950 lg:overflow-hidden lg:pl-80 lg:pr-7 lg:py-7 [&:has([is-navbar-minimal])]:lg:pl-20"
            )}>
                <Sidebar
                    userLimitCount={userLimitCount}
                    isProPlan={isProPlan}
                    className={cn(
                        "fixed left-10 z-20 w-80 hidden [&:has([is-navbar-minimal])]:w-fit",
                        "lg:block"
                    )}
                />
                <MobieSidebar
                    isProPlan={isProPlan}
                    userLimitCount={userLimitCount}
                />
                <UpgradeProModal
                    isProPlan={isProPlan}
                />
                <div className={cn(
                    "bg-background h-[calc(100vh-56px)]",
                    "lg:rounded-3xl lg:p-7"
                )}>
                    {props.children}
                </div>
            </main>
        </div>
    )
}

export default DashboardLayout