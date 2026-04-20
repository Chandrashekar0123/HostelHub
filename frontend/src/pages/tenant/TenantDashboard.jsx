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
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
            <motion.div variants={item} className="p-10 rounded-3xl bg-vibrant-tenant relative overflow-hidden shadow-vibrant">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-[100px] rounded-full -mr-20 -mt-20" />
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-400/20 blur-[80px] rounded-full -ml-20 -mb-20" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-white">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                                <Home className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm font-bold tracking-[0.2em] uppercase opacity-80">Resident Portal</span>
                        </div>
                        <h2 className="text-5xl font-black tracking-tight mb-3">Welcome, Alex</h2>
                        <p className="text-blue-100 text-xl font-medium max-w-md">Your comfort is our priority. Experience the future of hostel living.</p>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md px-8 py-6 text-lg rounded-2xl">
                            View Profile
                        </Button>
                        <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-2xl shadow-xl font-bold">
                            Quick Booking
                        </Button>
                    </div>
                </div>
            </motion.div>

            <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
                { title: 'In-Room Credits', value: 1250, sub: 'Gold Rewards', color: 'blue', prefix: '₹' },
                { title: 'Days to Due', value: 5, sub: 'May 25 Rent', color: 'indigo', suffix: ' Days' },
                { title: 'Meal Credits', value: 42, sub: 'Standard Plan', color: 'purple', suffix: '/45' },
                { title: 'Support Open', value: 2, sub: '1 In-Progress', color: 'rose' },
            ].map((stat, i) => (
                <Card key={i} topAccent={stat.color} className="p-6 shadow-vibrant-hover bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.title}</p>
                    <div className="flex items-baseline gap-1">
                        <span className={`text-2xl font-black text-${stat.color}-600 dark:text-${stat.color}-400 mb-1`}>
                           {stat.prefix}
                           <motion.span 
                             initial={{ opacity: 0 }} 
                             animate={{ opacity: 1 }}
                             transition={{ duration: 1 }}
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

