import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import MarkunreadMailboxOutlinedIcon from '@mui/icons-material/MarkunreadMailboxOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import LogoDevOutlinedIcon from '@mui/icons-material/LogoDevOutlined';
import RoomPreferencesOutlinedIcon from '@mui/icons-material/RoomPreferencesOutlined';
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

export const NAVBAR_ITEMS = [
    {
        title: 'English',
        icon: LanguageOutlinedIcon,
    },
    {
        icon: DarkModeOutlinedIcon,
    },
    {
        icon: FullscreenOutlinedIcon,
    },
    {
        notificationCount: 2,
        icon: NotificationsNoneOutlinedIcon,
    },
    {
        messageCount: 17,
        icon: ChatBubbleOutlineOutlinedIcon,
    },
    {
        icon: ListOutlinedIcon,
    },
];

export const SIDEBAR_ITEMS = [
    {
        title: 'MAIN',
        text: 'Dashboard',
        icon: DashboardIcon,
    },
    {
        title: 'LISTS',
        text: 'Users',
        icon: PersonOutlineOutlinedIcon,
    },
    {
        text: 'Products',
        icon: InventoryIcon,
    },
    {
        text: 'Orders',
        icon: BookmarkBorderOutlinedIcon,
    },
    {
        text: 'Delivery',
        icon: MarkunreadMailboxOutlinedIcon,
    },
    {
        title: 'USEFUL',
        text: 'Stats',
        icon: QueryStatsOutlinedIcon,
    },
    {
        text: 'Notifications',
        icon: NotificationAddOutlinedIcon,
    },
    {
        title: 'SERVICE',
        text: 'System Health',
        icon: MonitorHeartOutlinedIcon,
    },
    {
        text: 'Logs',
        icon: LogoDevOutlinedIcon,
    },
    {
        text: 'Settings',
        icon: RoomPreferencesOutlinedIcon,
    },
    {
        title: 'USER',
        text: 'Profile',
        icon: ContactEmergencyOutlinedIcon,
    },
    {
        text: 'Logout',
        icon: LogoutOutlinedIcon,
    },
];
