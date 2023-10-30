import { cn } from '@/lib/utils'

import { Slack } from 'lucide-react'
import React from 'react'
import { Audiowide } from 'next/font/google'

const audiowide = Audiowide({ weight: "400", subsets: ['latin'] })

interface LogoProps {
    className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={cn(
            "flex items-center",
            className
        )}>
            <Slack color='#0ea5e9' size={40}/>
            <span className={cn(
                "ml-2 text-3xl font-bold",
                audiowide.className
            )}>
                OpenAI
            </span>
        </div>
    )
}

export default Logo