import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { 
  CheckCircle2, Clock, AlertCircle, Calendar, UserCheck,
  ClipboardList, MessageSquare, ArrowRight, Zap, Target
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import { LiveBadge } from '../../components/ui/LiveBadge';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

import StaffAttendanceUI from './components/StaffAttendanceUI';
import StaffComplaintsUI from './components/StaffComplaintsUI';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } } };

const StaffOverview = () => (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
        <motion.div variants={item} className="p-10 rounded-3xl bg-vibrant-staff relative overflow-hidden shadow-vibrant">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-[100px] rounded-full -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-teal-400/20 blur-[80px] rounded-full -ml-20 -mb-20" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-white">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                            <Zap className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-bold tracking-[0.2em] uppercase opacity-80">Operations Hub</span>
                    </div>
                    <h2 className="text-5xl font-black tracking-tight mb-3">Staff Console</h2>
                    <p className="text-teal-100 text-xl font-medium max-w-md">Streamlined task management and real-time operational response center.</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md px-8 py-6 text-lg rounded-2xl">
                        Log Shift
                    </Button>
                    <Button className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg rounded-2xl shadow-xl font-bold">
                        <Calendar className="w-5 h-5 mr-2" /> Task Schedule
                    </Button>
                </div>
            </div>
        </motion.div>

        <motion.div variants={item} className="grid gap-6 md:grid-cols-3">
            {[
                { title: 'Open Tasks', value: 8, icon: Target, color: 'blue' },
                { title: 'In Progress', value: 3, icon: Clock, color: 'teal' },
                { title: 'Attendance', value: 98, icon: UserCheck, color: 'emerald', suffix: '%' },
            ].map((stat, i) => (
                <Card key={i} topAccent={stat.color} className="shadow-vibrant shadow-slate-200/50">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between relative z-10">
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.title}</p>
                                <h3 className="text-4xl font-black text-slate-900 dark:text-white">
                                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>{stat.value}</motion.span>
                                    {stat.suffix}
                                </h3>
                            </div>
                            <div className={`p-4 rounded-xl bg-${stat.color}-50 text-${stat.color}-600 dark:bg-${stat.color}-900/20 dark:text-${stat.color}-400`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </motion.div>

        <motion.div variants={item} className="grid gap-6 md:grid-cols-2">
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle className="text-lg flex items-center gap-2"><ClipboardList className="w-5 h-5 text-blue-600"/> Priority Queue</CardTitle>
                        <Button variant="ghost" size="sm" className="text-blue-600">View All</Button>
                    </div>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-0">
                    <div className="space-y-3 mt-4">
                        {[
                            { task: 'Clean Room 304 (Post-checkout)', priority: 'High', status: 'Pending' },
                            { task: 'Fix AC leakage in Mess Hall', priority: 'Urgent', status: 'In Progress' },
                            { task: 'Stock inventory for cleaning supplies', priority: 'Low', status: 'Pending' },
                        ].map((t, i) => (
                            <div key={i} className="flex items-center justify-between p-4 border border-slate-100 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer relative overflow-hidden group">
                                {t.priority === 'Urgent' && <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 animate-pulse" />}
                                <div className="flex items-start gap-4 z-10 relative">
                                    <div className={cn("mt-1 p-2 rounded-lg font-bold", t.priority === 'Urgent' ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400')}>
                                        {t.priority === 'Urgent' ? <AlertCircle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{t.task}</p>
                                        <p className={cn("text-[10px] uppercase tracking-wider font-bold mt-1", t.priority === 'Urgent' ? 'text-red-500' : 'text-slate-500')}>{t.priority} Priority</p>
                                    </div>
                                </div>
                                <Badge variant={t.status === 'In Progress' ? 'warning' : 'outline'} className="bg-white dark:bg-slate-900 shrink-0 ml-4 relative z-10">{t.status}</Badge>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2"><MessageSquare className="w-5 h-5 text-blue-600" /> Active Escalations</CardTitle>
                    <CardDescription>Maintenance & service requests.</CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-0">
                    <div className="space-y-4">
                        {[
                            { room: '201', issue: 'Internet outage in block B', time: '10 mins ago' },
                            { room: '105', issue: 'Broken shower head', time: '1 hour ago' },
                        ].map((c, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                                <div className="p-3 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <MessageSquare className="w-5 h-5 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Room {c.room}: {c.issue}</p>
                                    <p className="text-xs text-slate-500 mt-0.5">{c.time}</p>
                                </div>
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 shrink-0 ml-4">Attend</Button>
                            </div>
                        ))}
                        <Button className="w-full mt-4" variant="outline">Browse All Issues</Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    </motion.div>
);

const StaffPanel = () => {
    return (
        <Routes>
            <Route path="/" element={<StaffOverview />} />
            <Route path="/attendance" element={<StaffAttendanceUI />} />
            <Route path="/complaints" element={<StaffComplaintsUI />} />
        </Routes>
    );
};

export default StaffPanel;
