import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Badge from '../../../components/ui/Badge';

const COMPLAINTS = [
  { id: 'TCK-001', tenant: 'Alex Johnson', room: '304', category: 'Maintenance', priority: 'High', status: 'Unassigned', age: '2 hrs' },
  { id: 'TCK-002', tenant: 'Sarah Lee', room: '202', category: 'Housekeeping', priority: 'Low', status: 'Assigned', age: '1 day' },
  { id: 'TCK-003', tenant: 'Michael Chen', room: '101', category: 'Appliance', priority: 'High', status: 'In Progress', age: '3 hrs' }
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } };

const OwnerComplaintsUI = () => {
    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-7xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Escalation Matrix</h2>
                    <p className="text-slate-500 mt-1">Review tenant service request queue and assign technicians.</p>
                </div>
            </div>

            <motion.div variants={item}>
                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                                <thead className="text-xs uppercase bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                    <tr>
                                        <th className="px-6 py-4 font-bold">Ticket ID</th>
                                        <th className="px-6 py-4 font-bold">Reporter</th>
                                        <th className="px-6 py-4 font-bold">Category</th>
                                        <th className="px-6 py-4 font-bold">Priority</th>
                                        <th className="px-6 py-4 font-bold">Age</th>
                                        <th className="px-6 py-4 font-bold">Status</th>
                                        <th className="px-6 py-4 font-bold text-right">Assign</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {COMPLAINTS.map((c) => (
                                        <tr key={c.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                            <td className="px-6 py-4 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                                {c.priority === 'High' ? <AlertTriangle className="w-4 h-4 text-red-500"/> : <MessageSquare className="w-4 h-4 text-blue-500"/>}
                                                {c.id}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-slate-900 dark:text-white">{c.tenant}</div>
                                                <div className="text-xs text-slate-500">Room {c.room}</div>
                                            </td>
                                            <td className="px-6 py-4 font-medium">{c.category}</td>
                                            <td className="px-6 py-4">
                                                <Badge className={`border-0 ${c.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'}`}>{c.priority}</Badge>
                                            </td>
                                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{c.age}</td>
                                            <td className="px-6 py-4">
                                                <Badge variant="outline" className="bg-white dark:bg-slate-900">{c.status}</Badge>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <Button size="sm" className="bg-blue-600">Assign Staff</Button>
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

export default OwnerComplaintsUI;
