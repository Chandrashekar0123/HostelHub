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
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
        <motion.div variants={item} className="p-10 rounded-3xl bg-vibrant-owner relative overflow-hidden shadow-vibrant">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-[100px] rounded-full -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-400/20 blur-[80px] rounded-full -ml-20 -mb-20" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-white">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                            <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-bold tracking-[0.2em] uppercase opacity-80">Management Portal</span>
                    </div>
                    <h2 className="text-5xl font-black tracking-tight mb-3">Owner Command</h2>
                    <p className="text-emerald-100 text-xl font-medium max-w-md">Optimize your portfolio performance with real-time financial telemetry.</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md px-8 py-6 text-lg rounded-2xl">
                        Download Audit
                    </Button>
                    <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg rounded-2xl shadow-xl font-bold">
                        <Plus className="w-5 h-5 mr-2" /> Property Setup
                    </Button>
                </div>
            </div>
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
                { title: 'MTD Revenue', value: 45231, sub: '+ ₹2.4k today', color: 'emerald', prefix: '₹' },
                { title: 'Global Residents', value: 1203, sub: 'Across 4 properties', color: 'blue' },
                { title: 'Occupancy Rate', value: 94.2, sub: 'Peak demand', color: 'purple', suffix: '%' },
                { title: 'Critical Tickets', value: 12, sub: 'Awaiting dispatch', color: 'rose' },
            ].map((stat, i) => (
                <Card key={i} topAccent={stat.color} className="p-6 shadow-vibrant-hover bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.title}</p>
                        <TrendingUp className="w-4 h-4 text-emerald-500" />
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
