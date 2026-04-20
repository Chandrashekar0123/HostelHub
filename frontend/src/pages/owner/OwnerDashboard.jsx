import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';
import { 
  Users, Home, CreditCard, AlertCircle, TrendingUp, TrendingDown,
  ArrowRight, MoreVertical, Plus, Search, Filter, Package, Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Input from '../../components/ui/Input';
import { LiveBadge, LiveDot } from '../../components/ui/LiveBadge';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

import RoomManagement from './components/RoomManagement';
import TenantManagement from './components/TenantManagement';
import InventoryPanel from './components/InventoryPanel';
import OwnerPaymentsUI from './components/OwnerPaymentsUI';
import OwnerComplaintsUI from './components/OwnerComplaintsUI';

const data = [
  { name: 'Jan', revenue: 4000, occupancy: 85 },
  { name: 'Feb', revenue: 3000, occupancy: 82 },
  { name: 'Mar', revenue: 5000, occupancy: 90 },
  { name: 'Apr', revenue: 4500, occupancy: 88 },
  { name: 'May', revenue: 6000, occupancy: 95 },
  { name: 'Jun', revenue: 5500, occupancy: 92 },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } } };

const AnalyticsOverview = () => (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
        <motion.div variants={item} className="flex flex-col md:flex-row items-center justify-between gap-4 p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl relative overflow-hidden">
            <div className="relative z-10 flex items-center gap-4">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Command Interface</h2>
                    <p className="text-slate-500 text-lg">Monitor portfolio metrics and real-time revenue streams.</p>
                </div>
                <LiveBadge status="Live Sync" color="emerald" />
            </div>
            <div className="flex gap-2 relative z-10">
                <Button variant="outline" className="bg-white dark:bg-slate-900">Download Report</Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" /> New Entry
                </Button>
            </div>
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
                { title: 'Total Revenue', value: '$45,231.89', change: '+20.1%', trend: 'up', color: 'emerald' },
                { title: 'Active Tenants', value: '1,203', change: '+180.1%', trend: 'up', color: 'blue' },
                { title: 'Current Occupancy', value: '94%', change: '+5.2%', trend: 'up', color: 'purple' },
                { title: 'Pending Issues', value: '12', change: '-2.1%', trend: 'down', color: 'amber' },
            ].map((stat, i) => (
                <motion.div key={i} whileHover={{ y: -2 }} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-sm font-semibold text-slate-500">{stat.title}</p>
                        {stat.trend === 'up' ? 
                            <div className="p-1.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-lg"><TrendingUp className="h-4 w-4" /></div> : 
                            <div className="p-1.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg"><TrendingDown className="h-4 w-4" /></div>
                        }
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white tabular-nums">
                        {stat.value}
                    </h3>
                    <p className={cn("text-xs font-medium mt-2", stat.trend === 'up' ? "text-emerald-600" : "text-red-600")}>
                        {stat.change} <span className="text-slate-500 font-normal">from last month</span>
                    </p>
                </motion.div>
            ))}
        </motion.div>

        <motion.div variants={item} className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                <CardHeader className="border-b border-slate-100 dark:border-slate-800">
                    <CardTitle className="flex items-center gap-2 text-lg"><Zap className="w-5 h-5 text-blue-600"/> Revenue Velocity</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px] p-6">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2}/>
                                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis dataKey="name" fontSize={12} stroke="#64748b" axisLine={false} tickLine={false} />
                            <YAxis fontSize={12} stroke="#64748b" axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#ffffff', borderColor: '#f1f5f9', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                itemStyle={{ color: '#2563eb', fontWeight: 'bold' }}
                            />
                            <Area type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={3} fill="url(#colorRev)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            <Card className="col-span-3 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                <CardHeader className="border-b border-slate-100 dark:border-slate-800">
                    <CardTitle className="text-lg">Occupancy Matrix</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px] p-6">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis dataKey="name" fontSize={12} stroke="#64748b" axisLine={false} tickLine={false} />
                            <YAxis fontSize={12} stroke="#64748b" axisLine={false} tickLine={false} unit="%" />
                            <Tooltip 
                                cursor={{ fill: '#f1f5f9' }}
                                contentStyle={{ backgroundColor: '#ffffff', borderColor: '#f1f5f9', borderRadius: '8px' }}
                            />
                            <Bar dataKey="occupancy" fill="#2563eb" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </motion.div>
    </motion.div>
);

const OwnerDashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<AnalyticsOverview />} />
      <Route path="/rooms" element={<RoomManagement />} />
      <Route path="/tenants" element={<TenantManagement />} />
      <Route path="/inventory" element={<InventoryPanel />} />
      <Route path="/payments" element={<OwnerPaymentsUI />} />
      <Route path="/complaints" element={<OwnerComplaintsUI />} />
    </Routes>
  );
};

export default OwnerDashboard;
