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
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
        <motion.div variants={item} className="flex flex-col md:flex-row items-center justify-between gap-4 p-8 bg-slate-950 border border-slate-800 rounded-xl relative overflow-hidden text-white shadow-xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 flex items-center gap-4">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-white mb-1">Global Command Center</h2>
                    <p className="text-slate-400 text-lg">Platform-wide scalability and operational metrics.</p>
                </div>
                <LiveBadge status="All Systems Operational" color="blue" />
            </div>
            <div className="flex gap-2 relative z-10">
                <Button variant="outline" className="border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Export Setup
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Global Settings
                </Button>
            </div>
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
             {[
                { title: 'Total Hostels', value: '3,452', icon: ShieldCheck, change: '+12%', color: 'blue' },
                { title: 'Active Users', value: '12,231', icon: Users, change: '+24%', color: 'emerald' },
                { title: 'Monthly Revenue', value: '$842,000', icon: CreditCard, change: '+18%', color: 'indigo' },
                { title: 'System Health', value: '99.9%', icon: Activity, change: 'Stable', color: 'purple' },
            ].map((stat, i) => (
                <motion.div key={i} whileHover={{ y: -2 }} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                     <div className="flex justify-between items-start mb-4">
                        <div className={`p-2 rounded-lg bg-${stat.color}-50 text-${stat.color}-600 dark:bg-${stat.color}-900/20 dark:text-${stat.color}-400`}>
                            <stat.icon className="w-5 h-5" />
                        </div>
                        <Badge variant="outline" className="bg-slate-50 dark:bg-slate-800">{stat.change}</Badge>
                     </div>
                     <p className="text-sm font-medium text-slate-500 mb-1">{stat.title}</p>
                     <h3 className="text-3xl font-bold text-slate-900 dark:text-white tabular-nums">{stat.value}</h3>
                </motion.div>
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
