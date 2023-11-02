import { LayoutDashboard } from 'lucide-react'

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
        slug: 'conversation'
    },
    {
        title: 'Photo generator',
        url: '/photo',
        slug: 'photo'
    },
    {
        title: 'Video generator',
        url: '/video',
        slug: 'video'
    },
    {
        title: 'Audio generator',
        url: '/audio',
        slug: 'audio'
    },
    {
        title: 'Code generator',
        url: '/code',
        slug: 'code'
    }
]

export const NAVIGATIONS = [
    {
        title: "Dashboard",
        url: '/dashboard',
        slug: 'dashboard'
    },
    ...TOOL
]