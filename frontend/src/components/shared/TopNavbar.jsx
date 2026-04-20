import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

const TopNavbar = () => {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur-md">
      <div className="flex w-full max-w-md items-center relative">
        <Search className="absolute left-3 w-4 h-4 text-muted-foreground" />
        <input 
          type="text" 
          placeholder="Search for something..." 
          className="w-full h-10 pl-10 pr-4 rounded-full border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="p-2 relative rounded-lg hover:bg-accent text-muted-foreground transition-all"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-destructive rounded-full border-2 border-background"></span>
        </motion.button>

        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold">User Account</p>
            <p className="text-xs text-muted-foreground uppercase">Tenant</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary overflow-hidden"
          >
            <User className="w-6 h-6" />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
