import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/store/sidebar-store'
import { PanelLeftOpen, PanelRightOpen } from 'lucide-react'
import React from 'react'

const SidebarToggle = () => {
    const { isMinimal, handleChangeSidebar, handleOpenOrClose } = useSidebarStore()
    return (
        <div className={cn(
            "cursor-pointer hidden block",
        )}
            onClick={handleChangeSidebar}
            is-navbar-minimal={isMinimal ? "true" : undefined}
        >
            {
              isMinimal ? <PanelLeftOpen  /> : <PanelRightOpen />
            }
        </div>
    )
}

export default SidebarToggle