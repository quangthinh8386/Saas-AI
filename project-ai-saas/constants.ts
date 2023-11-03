import { LayoutDashboard, MessageSquare, Image, Video, FileAudio, Code } from 'lucide-react'

export const MAX_FREE_COUNTS = 5

export const THEME_MODES = [
    {
        value: 'light',
        label: 'Light'
    },
    {
        value: 'dark',
        label: 'Dark'
    }
]

export const TOOL = [
    {
        title: 'Conversation',
        url: '/conversation',
        icon: MessageSquare,
        slug: 'conversation'
    },
    {
        title: 'Photo generator',
        url: '/photo',
        icon: Image,
        slug: 'photo'
    },
    {
        title: 'Video generator',
        url: '/video',
        icon: Video,
        slug: 'video'
    },
    {
        title: 'Audio generator',
        url: '/audio',
        icon: FileAudio,
        slug: 'audio'
    },
    {
        title: 'Code generator',
        url: '/code',
        icon: Code,
        slug: 'code'
    }
]

export const NAVIGATIONS = [
    {
        title: "Dashboard",
        url: '/dashboard',
        icon: LayoutDashboard,
        slug: 'dashboard'
    },
    ...TOOL
]