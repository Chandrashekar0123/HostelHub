import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Building, Globe, Zap, Users, BarChart } from 'lucide-react';
import Button from '../../components/ui/Button';
import { cn } from '../../lib/utils';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      
      {/* Navigation */}
      <nav className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 absolute top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
                <Building className="w-8 h-8 text-blue-600" />
                <span className="text-xl font-bold text-slate-900 dark:text-white">HostelHub Enterprise</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium">Log In</Link>
              <Link to="/login">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm">Portal Access</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-blue-100/50 dark:bg-blue-900/20 blur-[100px] rounded-[100%] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight"
            >
                Centralized Hostel <br className="hidden md:block"/> Management Infrastructure
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
            >
                Streamline operations, automate rent collection, and scale your property portfolio with an enterprise-grade platform built for modern administrators.
            </motion.p>
            <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            >
                <Link to="/login"><Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg w-full sm:w-auto">Start Deployment</Button></Link>
                <Link to="/login"><Button size="lg" variant="outline" className="px-8 py-4 text-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 w-full sm:w-auto">Request Technical Demo</Button></Link>
            </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Core Capabilities</h2>
                  <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Everything required to govern residential systems.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: Globe, title: 'Multi-Tenant Architecture', desc: 'Isolate data streams per organization ensuring maximum operational privacy.' },
                    { icon: Shield, title: 'Compliance & Security', desc: 'Built on rigorous data security standards with encrypted payload delivery.' },
                    { icon: BarChart, title: 'Predictive Analytics', desc: 'Real-time telemetry regarding occupancy, rent yields, and maintenance metrics.' },
                    { icon: Zap, title: 'Automated Billing', desc: 'Zero-touch invoicing and receipt orchestration for large residential properties.' },
                    { icon: Users, title: 'Staff Delegation', desc: 'Role-based access constraints allocating operational tasks directly to field agents.' },
                    { icon: Building, title: 'Portfolio Scalability', desc: 'Support from 50 beds to global deployments exceeding 500,000 units.' },
                ].map((f, i) => (
                    <div key={i} className="p-8 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-950/50 hover:border-blue-500 transition-colors">
                        <f.icon className="w-8 h-8 text-blue-600 mb-6" />
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{f.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400">{f.desc}</p>
                    </div>
                ))}
              </div>
          </div>
      </div>

      {/* Pricing Section */}
      <div className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-16">Enterprise Licensing</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                    { name: 'Standard', price: '$499', period: '/month', features: ['Up to 5 Properties', 'Standard Reporting', 'Email Support'] },
                    { name: 'Professional', price: '$1,299', period: '/month', features: ['Up to 25 Properties', 'Advanced Analytics', 'Priority 24/7 Support', 'Custom Integrations'], highlight: true },
                    { name: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited Properties', 'Dedicated Account Manager', 'On-Premise Deployment options', 'SLA Guarantees'] },
                ].map((tier, i) => (
                    <div key={i} className={cn("p-8 border rounded-2xl bg-white dark:bg-slate-900 relative", tier.highlight ? 'border-blue-600 shadow-xl scale-105 z-10' : 'border-slate-200 dark:border-slate-800')}>
                        {tier.highlight && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full uppercase font-bold tracking-wider">Recommended</div>}
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{tier.name}</h3>
                        <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                            {tier.price}<span className="text-lg text-slate-500 font-normal">{tier.period}</span>
                        </div>
                        <ul className="space-y-4 mb-8 text-left">
                            {tier.features.map((feat, j) => (
                                <li key={j} className="flex items-center text-slate-600 dark:text-slate-400">
                                    <Shield className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                                    {feat}
                                </li>
                            ))}
                        </ul>
                        <Button className={cn("w-full py-6", tier.highlight ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white border-0')}>
                            Procure License
                        </Button>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-blue-900 dark:bg-slate-900 py-20 text-center border-t border-blue-800 dark:border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to digitize your infrastructure?</h2>
        <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">Deploy HostelHub Enterprise today and streamline your entire portfolio from a single command center.</p>
        <Link to="/login"><Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100 px-8 py-4 font-bold">Contact Sales</Button></Link>
      </div>

    </div>
  );
};

export default LandingPage;
