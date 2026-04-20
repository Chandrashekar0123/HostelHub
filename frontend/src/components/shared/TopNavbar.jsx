import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

const TopNavbar = ({ role }) => {
  const getRoleLabel = () => {
    switch(role) {
      case 'admin': return { title: 'System Root', label: 'Administrator' };
      case 'owner': return { title: 'Property Command', label: 'Owner' };
      case 'staff': return { title: 'Ops Center', label: 'Operations Staff' };
      case 'tenant': return { title: 'Primary Resident', label: 'Alex (Room #304)' };
      default: return { title: 'User Account', label: 'Guest' };
    }
  };

  const { title, label } = getRoleLabel();

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 px-6 backdrop-blur-md transition-colors">
      <div className="flex w-full max-w-md items-center relative">
        <Search className="absolute left-3 w-4 h-4 text-slate-400" />
        <input 
          type="text" 
          placeholder="Search inventory, invoices, or residents..." 
          className="w-full h-10 pl-10 pr-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
        />
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="p-2 relative rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-950"></span>
        </motion.button>

        <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{title}</p>
            <p className={`text-[10px] font-black uppercase tracking-widest text-vibrant-${role || 'tenant'}`}>{label}</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={`w-10 h-10 rounded-xl bg-vibrant-${role || 'tenant'} flex items-center justify-center text-white shadow-lg shadow-${role}-500/20 overflow-hidden`}
          >
            <User className="w-6 h-6 text-white" />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
