import React, { useState } from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Key, Users, ShieldCheck, Mail, Lock } from 'lucide-react';
import { cn } from '../../lib/utils';

const portals = [
  { id: 'tenant', label: 'Resident', icon: Home },
  { id: 'owner', label: 'Management', icon: Key },
  { id: 'staff', label: 'Operations', icon: Users },
  { id: 'admin', label: 'Administration', icon: ShieldCheck }
];

const LoginPage = () => {
  const navigate = useNavigate();
  const [selectedPortal, setSelectedPortal] = useState('tenant');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(`/${selectedPortal}`);
    }, 1000);
  };

  return (
    <AuthLayout 
      title="Secure System Access" 
      subtitle="Select your organizational role to authenticate"
    >
      <div className="space-y-6">
        
        {/* Enterprise Portal Selector */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Access Level</label>
          <div className="grid grid-cols-2 gap-2">
            {portals.map((portal) => (
              <button
                key={portal.id}
                type="button"
                onClick={() => setSelectedPortal(portal.id)}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-md border text-left transition-all",
                  selectedPortal === portal.id 
                    ? "border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-500 shadow-sm" 
                    : "border-slate-200 bg-white hover:bg-slate-50 text-slate-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400"
                )}
              >
                <portal.icon className={cn("w-5 h-5", selectedPortal === portal.id ? "text-blue-600 dark:text-blue-400" : "text-slate-400")} />
                <span className="font-semibold text-sm">{portal.label}</span>
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-lg">
          <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Official Email</label>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input 
                      type="email" 
                      className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-slate-800 dark:border-slate-700 dark:text-white" 
                      placeholder="user@organization.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                  />
              </div>
          </div>
          
          <div>
              <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
                  <Link to="/forgot-password" className="text-xs text-blue-600 hover:text-blue-500 font-medium">Forgot Context?</Link>
              </div>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input 
                      type="password" 
                      className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-slate-800 dark:border-slate-700 dark:text-white" 
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                  />
              </div>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-md transition-colors" isLoading={loading}>
            Authenticate as {portals.find(p => p.id === selectedPortal)?.label}
          </Button>
        </form>

        <p className="text-center text-sm text-slate-500">
          Require system access?{' '}
          <Link to="/signup" className="font-semibold text-blue-600 hover:text-blue-500">
            Submit Registration
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
