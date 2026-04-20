import React, { useState } from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <AuthLayout 
        title="Check your email" 
        subtitle="We've sent a password reset link to your inbox."
      >
        <div className="space-y-6 text-center">
            <div className="flex justify-center mb-6">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
            </div>
            <p className="text-slate-600 dark:text-slate-400">
                If an account exists for <span className="font-semibold text-slate-900 dark:text-white">{email}</span>, you will receive password reset instructions shortly.
            </p>
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <Link to="/login">
                <Button variant="outline" className="w-full">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Return to Login
                </Button>
                </Link>
            </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout 
      title="Reset Password Context" 
      subtitle="Enter your official organizational email to recover access"
    >
      <div className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-lg">
          <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Official Email</label>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-slate-400" />
                  </div>
                  <Input 
                      type="email" 
                      className="pl-9" 
                      placeholder="user@organization.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                  />
              </div>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 font-bold" isLoading={loading}>
            Dispatch Reset Link
          </Button>
        </form>

        <div className="text-center">
          <Link to="/login" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Authentication
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
