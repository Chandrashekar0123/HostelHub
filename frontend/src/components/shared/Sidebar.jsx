import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Search, 
  CreditCard, 
  MessageSquare, 
  Menu, 
  Award, 
  Settings, 
  LogOut,
  ChevronLeft,
  Users,
  Home,
  CheckCircle,
  Package,
  ShieldCheck,
  TrendingUp,
  CreditCard as CardIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

const Sidebar = ({ role }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const getLinks = () => {
    switch(role) {
      case 'tenant':
        return [
          { icon: LayoutDashboard, label: 'Dashboard', path: '/tenant' },
          { icon: Search, label: 'Search Hostels', path: '/tenant/search' },
          { icon: CheckCircle, label: 'My Bookings', path: '/tenant/bookings' },
          { icon: CreditCard, label: 'Payments', path: '/tenant/payments' },
          { icon: MessageSquare, label: 'Complaints', path: '/tenant/complaints' },
          { icon: Menu, label: 'Mess Menu', path: '/tenant/mess' },
          { icon: Award, label: 'Rewards', path: '/tenant/rewards' },
        ];
      case 'owner':
        return [
          { icon: LayoutDashboard, label: 'Analytics', path: '/owner' },
          { icon: Home, label: 'Manage Rooms', path: '/owner/rooms' },
          { icon: Users, label: 'Tenants', path: '/owner/tenants' },
          { icon: CreditCard, label: 'Payments', path: '/owner/payments' },
          { icon: Package, label: 'Inventory', path: '/owner/inventory' },
          { icon: MessageSquare, label: 'Complaints', path: '/owner/complaints' },
        ];
      case 'staff':
        return [
          { icon: LayoutDashboard, label: 'Task List', path: '/staff' },
          { icon: MessageSquare, label: 'Complaints', path: '/staff/complaints' },
          { icon: CheckCircle, label: 'Attendance', path: '/staff/attendance' },
        ];
      case 'admin':
        return [
          { icon: ShieldCheck, label: 'Admin Panel', path: '/admin' },
          { icon: Users, label: 'Manage Users', path: '/admin/users' },
          { icon: TrendingUp, label: 'Analytics', path: '/admin/analytics' },
          { icon: CardIcon, label: 'Subscription', path: '/admin/subscriptions' },
        ];
      default:
        return [];
    }
  };

  const links = getLinks();

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? '80px' : '260px' }}
      className="sticky top-0 h-screen bg-card border-r border-border flex flex-col transition-all duration-300 z-50"
    >
      <div className="p-6 flex items-center justify-between">
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-xl font-bold text-primary"
            >
              HostelHub
            </motion.h1>
          )}
        </AnimatePresence>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg hover:bg-accent text-muted-foreground"
        >
          <ChevronLeft className={cn("w-5 h-5 transition-transform", isCollapsed && "rotate-180")} />
        </button>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group relative",
              isActive 
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            )}
          >
            <link.icon className="w-5 h-5 flex-shrink-0" />
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="font-medium whitespace-nowrap"
                >
                  {link.label}
                </motion.span>
              )}
            </AnimatePresence>
            {isCollapsed && (
               <div className="absolute left-full ml-6 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-xl border border-border z-50">
                  {link.label}
               </div>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-3 border-t border-border space-y-1">
        <NavLink
            to="/settings"
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-muted-foreground hover:bg-accent hover:text-foreground",
              isActive && "bg-accent text-foreground"
            )}
          >
            <Settings className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span className="font-medium">Settings</span>}
        </NavLink>
        <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-destructive hover:bg-destructive/10">
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
