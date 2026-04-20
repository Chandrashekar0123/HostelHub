import React, { useState, useRef } from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import Button from '../../components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldAlert, RefreshCw } from 'lucide-react';

const OTPPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/login'); 
    }, 1500);
  };

  return (
    <AuthLayout 
      title="Identity Verification" 
      subtitle="Enter the 6-digit security code sent to your official email"
    >
      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md p-4 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-800 dark:text-blue-300">
                A one-time passcode has been dispatched. Please verify your identity to proceed with account creation.
            </p>
        </div>

        <form onSubmit={handleVerify} className="space-y-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-lg">
          
          <div className="flex justify-between gap-2 sm:gap-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"
                required
              />
            ))}
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 font-bold" isLoading={loading}>
            Verify Authentication Code
          </Button>
        </form>

        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500 gap-4">
          <button type="button" className="flex items-center text-blue-600 hover:text-blue-500 font-medium">
            <RefreshCw className="w-4 h-4 mr-2" />
            Resend Verification Code
          </button>
          
          <Link to="/signup" className="hover:text-slate-700 dark:hover:text-slate-300 underline">
            Return to Registration
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default OTPPage;
