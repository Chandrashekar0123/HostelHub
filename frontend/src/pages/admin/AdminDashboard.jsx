import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { 
  Users, Settings, CreditCard, ShieldCheck, Activity, Globe,
  Plus, Search, MoreHorizontal, Download, Server, DollarSign, AlertOctagon
} from 'lucide-react';
import { 
    LineChart, Line, AreaChart, Area, BarChart, Bar,
    XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Input from '../../components/ui/Input';
import { LiveBadge } from '../../components/ui/LiveBadge';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

import UserManagement from './components/UserManagement';
import SubscriptionPlans from './components/SubscriptionPlans';
import GlobalAnalytics from './components/GlobalAnalytics';

const data = [
  { name: 'Jan', users: 2400, revenue: 24000 },
  { name: 'Feb', users: 3000, revenue: 32000 },
  { name: 'Mar', users: 4500, revenue: 48000 },
  { name: 'Apr', users: 3900, revenue: 41000 },
  { name: 'May', users: 5200, revenue: 62000 },
  { name: 'Jun', users: 6000, revenue: 75000 },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } } };

const AdminOverview = () => (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
        <motion.div variants={item} className="p-10 rounded-3xl bg-vibrant-admin relative overflow-hidden shadow-vibrant">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-[100px] rounded-full -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-400/20 blur-[80px] rounded-full -ml-20 -mb-20" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-white">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                            <ShieldCheck className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-bold tracking-[0.2em] uppercase opacity-80">Root Infrastructure</span>
                    </div>
                    <h2 className="text-5xl font-black tracking-tight mb-3">Global Command</h2>
                    <p className="text-indigo-100 text-xl font-medium max-w-md">Orchestrate platform-wide operations and identity management at scale.</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md px-8 py-6 text-lg rounded-2xl">
                        System Config
                    </Button>
                    <Button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-6 text-lg rounded-2xl shadow-xl font-bold">
                        <Settings className="w-5 h-5 mr-2" /> Global Audit
                    </Button>
                </div>
            </div>
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
                { title: 'Total ARR', value: 542310, sub: '+ ₹12.4k today', color: 'indigo', prefix: '₹' },
                { title: 'System Load', value: 42, sub: 'Optimized', color: 'blue', suffix: '%' },
                { title: 'Active Nodes', value: 8, sub: 'All Healthy', color: 'purple', suffix: ' Nodes' },
                { title: 'Security Alerts', value: 0, sub: 'Clean Audit', color: 'emerald' },
            ].map((stat, i) => (
                <Card key={i} topAccent={stat.color} className="p-6 shadow-vibrant-hover bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.title}</p>
                        <ShieldCheck className="w-4 h-4 text-indigo-500" />
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className={`text-3xl font-black text-slate-900 dark:text-white mb-1 tabular-nums`}>
                            {stat.prefix}
                            <motion.span 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.5 }}
                            >
                                {stat.value}
                            </motion.span>
                            {stat.suffix}
                        </span>
                    </div>
                    <p className="text-sm font-medium text-slate-400">{stat.sub}</p>
                </Card>
            ))}
        </motion.div>

        <motion.div variants={item} className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                <CardHeader className="border-b border-slate-100 dark:border-slate-800">
                    <CardTitle className="text-lg flex items-center gap-2"><Server className="w-5 h-5 text-blue-600" /> Platform Growth</CardTitle>
                </CardHeader>
                <CardContent className="h-[350px] p-6">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis dataKey="name" fontSize={12} stroke="#64748b" axisLine={false} tickLine={false} />
                            <YAxis fontSize={12} stroke="#64748b" axisLine={false} tickLine={false} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#ffffff', borderColor: '#f1f5f9', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                itemStyle={{ color: '#2563eb', fontWeight: 'bold' }}
                            />
                            <Line type="monotone" dataKey="users" stroke="#2563eb" strokeWidth={3} dot={{ fill: '#2563eb', strokeWidth: 2 }} activeDot={{ r: 6 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            <Card className="col-span-3 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[40px] rounded-full pointer-events-none" />
                <CardHeader className="border-b border-slate-100 dark:border-slate-800">
                    <CardTitle className="text-lg flex items-center gap-2 text-red-600 dark:text-red-400"><AlertOctagon className="w-5 h-5" /> Error Rates</CardTitle>
                </CardHeader>
                <CardContent className="h-[350px] p-6">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis dataKey="name" fontSize={12} stroke="#64748b" axisLine={false} tickLine={false} />
                            <Tooltip 
                                cursor={{ fill: '#fef2f2' }}
                                contentStyle={{ backgroundColor: '#ffffff', borderColor: '#fee2e2', borderRadius: '8px' }}
                            />
                            <Bar dataKey="users" fill="#ef4444" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </motion.div>
    </motion.div>
);

const AdminDashboard = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminOverview />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/subscriptions" element={<SubscriptionPlans />} />
            <Route path="/analytics" element={<GlobalAnalytics />} />
        </Routes>
    );
};

export default AdminDashboard;
