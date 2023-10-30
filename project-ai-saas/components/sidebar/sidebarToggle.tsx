import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/store/sidebar-store'
import { PanelLeftOpen, PanelRightOpen } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const SidebarToggle = () => {
    const { isMinimal, handleChangeSidebar, handleOpenOrClose } = useSidebarStore()
    return (
        <div className={cn(
            "cursor-pointer hidden lg:block",
        )}
            onClick={handleChangeSidebar}
            is-navbar-minimal={isMinimal ? "true" : undefined}
        >
            {
              isMinimal ? <PanelLeftOpen  /> : <PanelRightOpen />
            }
            <Button 
            variant="ghost"
            className="lg:hidden"
            size="icon"
            onClick={handleOpenOrClose}
            >

            </Button>
        </div>
    )
}

export default SidebarToggle