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
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
        <motion.div variants={item} className="flex flex-col md:flex-row items-center justify-between gap-4 p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl relative overflow-hidden">
            <div className="relative z-10 flex items-center gap-4">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Staff Control Center</h2>
                    <p className="text-slate-500 text-lg">Manage your tasks and shift attendance efficiently.</p>
                </div>
                <LiveBadge status="Shift Tracker: Live" color="emerald" />
            </div>
            <div className="flex gap-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl relative z-10">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Shift Status</span>
                    <span className="text-sm font-bold flex items-center gap-2 text-slate-900 dark:text-white mt-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        On Duty (08:00 - 16:00)
                    </span>
                </div>
            </div>
        </motion.div>

        <motion.div variants={item} className="grid gap-6 md:grid-cols-3">
            {[
                { title: 'Open Tasks', value: '8', icon: Target, color: 'blue' },
                { title: 'In Progress', value: '3', icon: Clock, color: 'amber' },
                { title: 'Attendance Target', value: '98%', icon: UserCheck, color: 'emerald' },
            ].map((stat, i) => (
                <Card key={i} className={`bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm border-t-4 border-t-${stat.color}-500 group overflow-hidden`}>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between relative z-10">
                            <div>
                                <p className="text-sm font-medium text-slate-500 mb-1">{stat.title}</p>
                                <h3 className="text-4xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
                            </div>
                            <div className={`p-4 rounded-xl bg-${stat.color}-50 text-${stat.color}-600 dark:bg-${stat.color}-900/20 dark:text-${stat.color}-400 group-hover:scale-110 transition-transform`}>
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
