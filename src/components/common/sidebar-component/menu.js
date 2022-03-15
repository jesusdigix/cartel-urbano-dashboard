import {
    Home,
    Calendar,
    Gift
} from 'react-feather';

export const MENUITEMS = [
    {
        title: 'Home', 
        icon: Home, 
        type: 'link', 
        badgeType: 'primary', 
        active: true, 
        path: '/dashboard'
    },
    {
        title: 'Eventos', 
        icon: Calendar, 
        type: 'link', 
        badgeType: 'primary', 
        active: true, 
        path: '/dashboard/events'
    },
    {
        title: 'Productos', 
        icon: Gift, 
        type: 'link', 
        badgeType: 'primary', 
        active: true, 
        path: '/dashboard/events'
    },
]
