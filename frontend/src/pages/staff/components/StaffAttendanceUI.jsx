import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, CheckCircle2, XCircle, ChevronLeft, ChevronRight, Fingerprint } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Badge from '../../../components/ui/Badge';

const ATTENDANCE = [
  { date: 'Oct 20, 2026', checkIn: '07:55 AM', checkOut: '16:05 PM', status: 'Present', duration: '8h 10m' },
  { date: 'Oct 19, 2026', checkIn: '08:02 AM', checkOut: '16:00 PM', status: 'Present', duration: '7h 58m' },
  { date: 'Oct 18, 2026', checkIn: '07:58 AM', checkOut: '16:15 PM', status: 'Present', duration: '8h 17m' },
  { date: 'Oct 17, 2026', checkIn: '-', checkOut: '-', status: 'Absent', duration: '-' },
  { date: 'Oct 16, 2026', checkIn: '08:00 AM', checkOut: '16:00 PM', status: 'Present', duration: '8h 00m' }
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } };

const StaffAttendanceUI = () => {
    const [isCheckedIn, setIsCheckedIn] = useState(true);

    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-5xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Time & Attendance</h2>
                    <p className="text-slate-500 mt-1">Punch in for your daily blocks and track worked hours.</p>
                </div>
            </div>

            <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="col-span-1 md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Fingerprint className="w-48 h-48" />
                    </div>
                    <CardContent className="p-8 relative z-10 flex flex-col justify-between h-full">
                        <div>
                            <p className="text-blue-100 font-medium uppercase tracking-widest text-sm mb-1">Current Status</p>
                            <h3 className="text-4xl font-extrabold mb-4">{isCheckedIn ? 'ON DUTY' : 'OFF DUTY'}</h3>
                            {isCheckedIn && <p className="text-blue-100"><Clock className="w-4 h-4 inline mr-1 pb-0.5" /> Shift started at 07:55 AM</p>}
                        </div>
                        <Button 
                            className={`mt-8 py-6 text-lg font-bold shadow-xl border-none ${isCheckedIn ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-emerald-500 hover:bg-emerald-600 text-white'}`}
                            onClick={() => setIsCheckedIn(!isCheckedIn)}
                        >
                            <Fingerprint className="w-5 h-5 mr-2" />
                            {isCheckedIn ? 'Punch Out' : 'Punch In'}
                        </Button>
                    </CardContent>
                </Card>

                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                    <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-6">Current Period</h3>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between mb-2"><span className="text-slate-500">Scheduled Hours</span><span className="font-bold">160h</span></div>
                                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div></div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2"><span className="text-slate-500">Completed</span><span className="font-bold text-emerald-600">120h 15m</span></div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2"><span className="text-slate-500">Overtime</span><span className="font-bold text-amber-500">2h 30m</span></div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            <motion.div variants={item}>
                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardHeader className="border-b border-slate-100 dark:border-slate-800 flex flex-row items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-slate-400" />
                            <h3 className="font-bold text-lg">October Timesheet</h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button size="icon" variant="outline"><ChevronLeft className="w-4 h-4" /></Button>
                            <Button size="icon" variant="outline"><ChevronRight className="w-4 h-4" /></Button>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                                <thead className="text-xs uppercase bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                    <tr>
                                        <th className="px-6 py-4 font-bold">Date</th>
                                        <th className="px-6 py-4 font-bold">Check In</th>
                                        <th className="px-6 py-4 font-bold">Check Out</th>
                                        <th className="px-6 py-4 font-bold">Duration</th>
                                        <th className="px-6 py-4 font-bold text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ATTENDANCE.map((rec, i) => (
                                        <tr key={i} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{rec.date}</td>
                                            <td className="px-6 py-4">{rec.checkIn}</td>
                                            <td className="px-6 py-4">{rec.checkOut}</td>
                                            <td className="px-6 py-4 font-medium">{rec.duration}</td>
                                            <td className="px-6 py-4 text-right">
                                                {rec.status === 'Present' ? (
                                                    <Badge className="bg-emerald-100 text-emerald-700 border-0"><CheckCircle2 className="w-3 h-3 mr-1"/> Present</Badge>
                                                ) : (
                                                    <Badge className="bg-red-100 text-red-700 border-0"><XCircle className="w-3 h-3 mr-1"/> Absent</Badge>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </motion.div>
    );
};

export default StaffAttendanceUI;
