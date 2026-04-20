import React from 'react';
import { motion } from 'framer-motion';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, PieChart, Pie, Cell
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../components/ui/Card';
import { Globe, TrendingUp, Users, Building2, Wallet } from 'lucide-react';
import Badge from '../../../components/ui/Badge';

const REVENUE_DATA = [
  { month: 'Jan', revenue: 450000, hostels: 240 },
  { month: 'Feb', revenue: 520000, hostels: 280 },
  { month: 'Mar', revenue: 480000, hostels: 310 },
  { month: 'Apr', revenue: 610000, hostels: 350 },
  { month: 'May', revenue: 750000, hostels: 420 },
  { month: 'Jun', revenue: 842000, hostels: 512 },
];

const GEOGRAPHIC_DATA = [
  { name: 'North Region', value: 45, color: '#3b82f6' },
  { name: 'South Region', value: 30, color: '#10b981' },
  { name: 'East Region', value: 15, color: '#f59e0b' },
  { name: 'West Region', value: 10, color: '#ef4444' },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const GlobalAnalytics = () => {
    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-7xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Platform Health & Telemetry</h2>
                    <p className="text-slate-500 mt-1">Global performance metrics across all integrated hostel networks.</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-lg">
                    <Globe className="w-4 h-4 animate-spin-slow" />
                    <span className="text-sm font-bold uppercase tracking-wider">Live Global Feed</span>
                </div>
            </div>

            <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { label: 'Total MRR', value: '$842K', icon: Wallet, trend: '+14%', color: 'blue' },
                    { label: 'Network Expand', value: '512 Properties', icon: Building2, trend: '+8%', color: 'emerald' },
                    { label: 'Global Residents', value: '12.2K', icon: Users, trend: '+22%', color: 'indigo' },
                    { label: 'System Uptime', value: '99.98%', icon: TrendingUp, trend: 'Optimal', color: 'purple' },
                ].map((stat, i) => (
                    <Card key={i} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-2 rounded-lg bg-${stat.color}-50 text-${stat.color}-600 dark:bg-${stat.color}-900/20`}><stat.icon className="w-5 h-5"/></div>
                                <Badge variant="outline" className="text-[10px] font-bold">{stat.trend}</Badge>
                            </div>
                            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stat.value}</h3>
                        </CardContent>
                    </Card>
                ))}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <motion.div variants={item} className="lg:col-span-2">
                    <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 h-full">
                        <CardHeader>
                            <CardTitle>Platform Revenue Velocity</CardTitle>
                            <CardDescription>Aggregate monthly recurring revenue across the SAS infrastructure.</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[350px] p-6 pt-0">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={REVENUE_DATA}>
                                    <defs>
                                        <linearGradient id="colorGlobalRec" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                    <XAxis dataKey="month" fontSize={12} stroke="#64748b" axisLine={false} tickLine={false} />
                                    <YAxis fontSize={12} stroke="#64748b" axisLine={false} tickLine={false} tickFormatter={(v) => `$${v/1000}k`} />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', borderRadius: '12px' }}
                                    />
                                    <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} fill="url(#colorGlobalRec)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div variants={item}>
                    <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 h-full">
                        <CardHeader>
                            <CardTitle>Network Distribution</CardTitle>
                            <CardDescription>Property concentration by operational region.</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[350px] flex flex-col items-center justify-center p-6 pt-0">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={GEOGRAPHIC_DATA}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {GEOGRAPHIC_DATA.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="grid grid-cols-2 gap-4 w-full mt-4">
                                {GEOGRAPHIC_DATA.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}} />
                                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
            
            <motion.div variants={item}>
                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                    <CardHeader>
                        <CardTitle>Tenant Scaling Metrics</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[300px] p-6 pt-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={REVENUE_DATA}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="month" fontSize={12} stroke="#64748b" axisLine={false} tickLine={false} />
                                <YAxis fontSize={12} stroke="#64748b" axisLine={false} tickLine={false} />
                                <Tooltip cursor={{fill: '#f1f5f9'}} />
                                <Bar dataKey="hostels" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </motion.div>

        </motion.div>
    );
};

export default GlobalAnalytics;
