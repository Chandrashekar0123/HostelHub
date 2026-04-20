import React, { useState } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
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
  const navigate = useNavigate();

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

  const getRoleColor = () => {
    switch(role) {
      case 'admin': return 'border-indigo-500 text-indigo-500 bg-indigo-500/10';
      case 'owner': return 'border-emerald-500 text-emerald-500 bg-emerald-500/10';
      case 'staff': return 'border-teal-500 text-teal-500 bg-teal-500/10';
      default: return 'border-primary text-primary bg-primary/10';
    }
  };

  const roleStyles = getRoleColor();

  const handleLogout = () => {
    // In a real app, clear tokens here
    navigate('/login');
  };

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? '80px' : '260px' }}
      className="sticky top-0 h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-all duration-300 z-50"
    >
      <div className="p-6 flex items-center justify-between">
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <Link to={`/${role || 'tenant'}`} className="block">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={`text-xl font-bold text-vibrant-${role || 'tenant'}`}
              >
                HostelHub
              </motion.h1>
            </Link>
          )}
        </AnimatePresence>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
        >
          <ChevronLeft className={cn("w-5 h-5 transition-transform", isCollapsed && "rotate-180")} />
        </button>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/admin' || link.path === '/owner' || link.path === '/tenant' || link.path === '/staff'}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group relative border border-transparent",
              isActive 
                ? `${roleStyles} shadow-sm font-bold` 
                : "text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white"
            )}
          >
            <link.icon className={cn("w-5 h-5 flex-shrink-0 transition-colors", "group-hover:text-vibrant-" + (role || 'tenant'))} />
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="whitespace-nowrap"
                >
                  {link.label}
                </motion.span>
              )}
            </AnimatePresence>
            {isCollapsed && (
               <div className="absolute left-full ml-6 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-xl z-50">
                  {link.label}
               </div>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-3 border-t border-slate-200 dark:border-slate-800 space-y-1">
        <NavLink
            to="/settings"
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800",
              isActive && "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
            )}
          >
            <Settings className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span className="font-medium">Settings</span>}
        </NavLink>
        <button 
          onClick={handleLogout}
          className="flex w-full items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
