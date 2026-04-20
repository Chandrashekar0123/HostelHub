import React, { useState } from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Phone } from 'lucide-react';
import { cn } from '../../lib/utils';

const SignupPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState('tenant');

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/otp'); // Forward to verification
    }, 1000);
  };

  return (
    <AuthLayout 
      title="Create Organization Account" 
      subtitle="Register to access the central management platform"
    >
      <div className="space-y-6">
        
        {/* Role Selector */}
        <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Intended Role</label>
            <div className="grid grid-cols-2 gap-2">
                {[
                    { id: 'tenant', label: 'Resident' },
                    { id: 'owner', label: 'Property Owner' }
                ].map((role) => (
                    <button
                        key={role.id}
                        type="button"
                        onClick={() => setSelectedRole(role.id)}
                        className={cn(
                            "p-2.5 rounded-md border text-center transition-all",
                            selectedRole === role.id 
                                ? "border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-500 font-bold" 
                                : "border-slate-200 bg-white hover:bg-slate-50 text-slate-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 font-medium"
                        )}
                    >
                        {role.label}
                    </button>
                ))}
            </div>
        </div>

        <form onSubmit={handleSignup} className="space-y-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">First Name</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-4 w-4 text-slate-400" />
                        </div>
                        <Input type="text" className="pl-9" placeholder="First" required />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Last Name</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-4 w-4 text-slate-400" />
                        </div>
                        <Input type="text" className="pl-9" placeholder="Last" required />
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Official Email</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 text-slate-400" />
                    </div>
                    <Input type="email" className="pl-9" placeholder="user@organization.com" required />
                </div>
            </div>

            <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-4 w-4 text-slate-400" />
                    </div>
                    <Input type="tel" className="pl-9" placeholder="+1 (555) 000-0000" required />
                </div>
            </div>
            
            <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Secure Password</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-4 w-4 text-slate-400" />
                    </div>
                    <Input type="password" className="pl-9" placeholder="••••••••" required />
                </div>
                <p className="text-[10px] text-slate-500 mt-1">Must be at least 8 characters with numbers and symbols.</p>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 mt-2 py-2.5 font-bold" isLoading={loading}>
                Complete Registration
            </Button>
        </form>

        <p className="text-center text-sm text-slate-500">
            Already registered?{' '}
            <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-500">
                Sign in to your account
            </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignupPage;
