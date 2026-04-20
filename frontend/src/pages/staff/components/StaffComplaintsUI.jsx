import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, MessageSquare, AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Badge from '../../../components/ui/Badge';

const ASSIGNED_TASKS = [
  { id: 'TCK-001', room: '304', title: 'Leaky faucet in bathroom', category: 'Plumbing', priority: 'High', status: 'New', time: '2 hrs ago' },
  { id: 'TCK-042', room: '105', title: 'Deep clean required post checkout', category: 'Housekeeping', priority: 'Medium', status: 'In Progress', time: '4 hrs ago' },
  { id: 'TCK-088', room: '202', title: 'Fix broken charging socket', category: 'Electrical', priority: 'Low', status: 'In Progress', time: '1 day ago' },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } };

const StaffComplaintsUI = () => {
    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-5xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Active Queue</h2>
                    <p className="text-slate-500 mt-1">Service requests and operational tasks assigned to you.</p>
                </div>
            </div>

            <motion.div variants={item} className="grid grid-cols-1 gap-4">
                {ASSIGNED_TASKS.map((task) => (
                    <Card key={task.id} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden relative group">
                        {task.priority === 'High' && <div className="absolute top-0 bottom-0 left-0 w-1 bg-red-500" />}
                        <CardContent className="p-0">
                            <div className="flex flex-col sm:flex-row gap-6 p-6 items-start sm:items-center">
                                
                                <div className="flex items-center gap-4 flex-1">
                                    <div className={`p-4 rounded-xl ${
                                        task.status === 'New' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20' :
                                        'bg-amber-50 text-amber-600 dark:bg-amber-900/20'
                                    }`}>
                                        <ClipboardList className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">{task.title}</h3>
                                            <Badge variant="outline" className="bg-slate-50 dark:bg-slate-800 text-xs py-0 h-5">{task.id}</Badge>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                                            <span className="font-bold text-slate-700 dark:text-slate-300">Room {task.room}</span>
                                            <span>•</span>
                                            <span>{task.category}</span>
                                            <span>•</span>
                                            <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {task.time}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:items-end gap-3 w-full sm:w-auto pt-4 sm:pt-0 border-t border-slate-100 dark:border-slate-800 sm:border-0 mt-2 sm:mt-0">
                                    <div className="flex items-center gap-2">
                                        {task.priority === 'High' && <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-0 uppercase text-[10px] tracking-wider font-bold">Urgent</Badge>}
                                        <Badge className={`border-0 uppercase text-[10px] tracking-wider font-bold ${
                                            task.status === 'New' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                                        }`}>
                                            {task.status}
                                        </Badge>
                                    </div>
                                    {task.status === 'New' ? (
                                        <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">Acknowledge</Button>
                                    ) : (
                                        <Button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700"><CheckCircle2 className="w-4 h-4 mr-2" /> Mark Complete</Button>
                                    )}
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default StaffComplaintsUI;
