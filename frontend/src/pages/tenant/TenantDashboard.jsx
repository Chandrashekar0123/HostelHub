import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { 
  Home, Search, Calendar, MessageCircle, Utensils, Trophy,
  ArrowRight, MapPin, Star, AlertCircle, CheckCircle, Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import { LiveBadge } from '../../components/ui/LiveBadge';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

// Import newly created UI components
import SearchHostels from './components/SearchHostels';
import BookingUI from './components/BookingUI';
import PaymentsUI from './components/PaymentsUI';
import ComplaintsUI from './components/ComplaintsUI';
import MessMenuUI from './components/MessMenuUI';
import RewardsUI from './components/RewardsUI';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } } };

const Overview = () => {
    const stats = [
        { label: 'Current Assigned Room', value: '304-B', icon: Home, bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-600 dark:text-blue-400' },
        { label: 'Rent Status', value: 'Settled', icon: CheckCircle, bg: 'bg-emerald-50 dark:bg-emerald-900/20', text: 'text-emerald-600 dark:text-emerald-400' },
        { label: 'Active Complaints', value: '0', icon: MessageCircle, bg: 'bg-amber-50 dark:bg-amber-900/20', text: 'text-amber-600 dark:text-amber-400' },
        { label: 'Rewards Balance', value: '1,250', icon: Trophy, bg: 'bg-purple-50 dark:bg-purple-900/20', text: 'text-purple-600 dark:text-purple-400' },
    ];

    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
            
            <motion.div variants={item} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Resident Portal</h2>
                        <LiveBadge status="Active Sync" color="emerald" />
                    </div>
                    <p className="text-slate-500 text-lg">Central hub for your tenancy at Highland Residency.</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                    <Zap className="w-4 h-4 mr-2" /> View Inbox
                </Button>
            </motion.div>

            <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                    <motion.div key={i} whileHover={{ y: -2 }} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className={cn("p-2.5 rounded-lg", stat.bg)}>
                                <stat.icon className={cn("w-5 h-5", stat.text)} />
                            </div>
                        </div>
                        <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div variants={item} className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardHeader className="border-b border-slate-100 dark:border-slate-800">
                        <CardTitle className="text-lg">Recent Infrastructure Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-slate-100 dark:divide-slate-800">
                            {[
                                { title: 'Rent Payment Successful (INV-982)', time: 'Just now', icon: CheckCircle, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
                                { title: 'Maintenance Ticket Resolved: Wi-Fi Router', time: '2h ago', icon: AlertCircle, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-500/10' },
                                { title: 'Mess Menu Updated for Next Week', time: '5h ago', icon: Utensils, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-500/10' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                                    <div className={cn("p-2.5 rounded-full flex-shrink-0", item.bg, item.color)}>
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p>
                                        <p className="text-xs text-slate-500 mt-0.5">{item.time}</p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-slate-300" />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                
                <Card className="col-span-3 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardHeader className="border-b border-slate-100 dark:border-slate-800">
                        <CardTitle className="text-lg">Today's Provisions</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                        <div className="space-y-4">
                            {[
                                { meal: 'Breakfast', menu: 'Pancakes, Fruit, Coffee', time: '08:00 AM' },
                                { meal: 'Lunch', menu: 'Grilled Chicken, Salad', time: '01:30 PM' },
                                { meal: 'Dinner', menu: 'Pasta Primavera', time: '08:30 PM' },
                            ].map((m, i) => (
                                <div key={i} className="flex justify-between items-center p-3 border border-slate-100 dark:border-slate-800 rounded-lg">
                                    <div>
                                        <p className="font-bold text-sm text-slate-900 dark:text-white">{m.meal}</p>
                                        <p className="text-xs text-slate-500 mt-0.5">{m.menu}</p>
                                    </div>
                                    <Badge variant="outline" className="bg-slate-50 dark:bg-slate-800">{m.time}</Badge>
                                </div>
                            ))}
                            <Button variant="outline" className="w-full mt-2">View Full Schedule</Button>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </motion.div>
    );
};

const TenantDashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/search" element={<SearchHostels />} />
      <Route path="/bookings" element={<BookingUI />} />
      <Route path="/complaints" element={<ComplaintsUI />} />
      <Route path="/mess" element={<MessMenuUI />} />
      <Route path="/rewards" element={<RewardsUI />} />
      <Route path="/payments" element={<PaymentsUI />} />
    </Routes>
  );
};

export default TenantDashboard;

