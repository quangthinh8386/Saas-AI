import React from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/store/sidebar-store'
import { THEME_MODES } from '@/constants'

const ThemeToggle = () => {

  const { theme, setTheme } = useTheme()
  const { isMinimal } = useSidebarStore()

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "p-2 rounded-lg flex items-center justify-center bg-gray-900 w-full cursor-pointer",
        isMinimal && "w-14 h-14 justify-center"
      )}
    >
        {isMinimal ?
          <span>
            {theme === "dark" ? (<Moon />) : (<Sun />)}
          </span>
          :
          THEME_MODES.map(({ label, value }) =>
            <span key={value} className={cn(
              "flex items-center justify-center p-2 rounded-lg px-7 w-full cursor-pointer text-muted-foreground font-medium",
              theme === value && "bg-gray-950 shadow text-white"
            )}>
              {value === "dark" ? (<Moon />) : (<Sun />)}
              <span>{label}</span>
            </span>
          )
        }
    </div>
  )
}

export default ThemeToggle