import React from 'react';
import { Shield, Building } from 'lucide-react';
import ThemeToggle from '../components/shared/ThemeToggle';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      {/* Enterprise Side Panel */}
      <div className="relative hidden w-0 flex-1 lg:flex flex-col bg-slate-900 border-r border-slate-800">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="relative z-10 flex flex-col justify-between h-full p-12">
            <div>
                <div className="flex items-center gap-3 text-white mb-12">
                    <Building className="w-10 h-10 text-blue-500" />
                    <span className="text-2xl font-bold tracking-tight">Hostel Management System</span>
                </div>
                
                <div className="space-y-6 max-w-lg">
                    <h2 className="text-4xl font-semibold leading-tight text-white">
                        Centralized Platform for Infrastructure Control
                    </h2>
                    <p className="text-lg text-slate-400">
                        Securely manage properties, tenants, and support tickets through a single pane of glass. Access requires authorized credentials.
                    </p>
                    
                    <div className="mt-8 flex items-center gap-4 bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                        <Shield className="w-8 h-8 text-blue-500 flex-shrink-0" />
                        <div>
                            <p className="text-sm font-semibold text-white">Enterprise Security</p>
                            <p className="text-xs text-slate-400">End-to-end encrypted sessions and role-based access control.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="text-sm text-slate-500">
                &copy; {new Date().getFullYear()} Enterprise Hostel Solutions. All rights reserved.
            </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-white dark:bg-slate-950">
        <div className="absolute top-4 right-4">
            <ThemeToggle />
        </div>
        
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="text-center lg:text-left mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-blue-600 lg:hidden mb-4 flex items-center justify-center gap-2">
                <Building className="w-6 h-6" /> HMS
            </h1>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {title}
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {subtitle}
            </p>
          </div>

          <div className="mt-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
