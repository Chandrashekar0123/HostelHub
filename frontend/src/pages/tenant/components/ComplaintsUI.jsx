import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, MessageSquare, Clock, ArrowRight, Plus } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Badge from '../../../components/ui/Badge';

const COMPLAINTS = [
  { id: 'TCK-001', category: 'Maintenance', title: 'Leaky faucet in bathroom', date: 'Oct 10, 2026', status: 'In Progress', priority: 'Medium' },
  { id: 'TCK-002', category: 'IT Support', title: 'WiFi disconnected routing error', date: 'Oct 08, 2026', status: 'Resolved', priority: 'High' },
  { id: 'TCK-003', category: 'Housekeeping', title: 'Missed scheduled room cleaning', date: 'Sep 25, 2026', status: 'Resolved', priority: 'Low' },
  { id: 'TCK-004', category: 'Appliance', title: 'AC not cooling properly', date: 'Sep 12, 2026', status: 'Resolved', priority: 'High' }
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } };

const ComplaintsUI = () => {
    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-5xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Service Requests</h2>
                    <p className="text-slate-500 mt-1">Submit and track maintenance or service escalations.</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 font-bold"><Plus className="w-4 h-4 mr-2" /> New Request</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {['All Requests', 'In Progress', 'Resolved', 'Drafts'].map((stat, i) => (
                    <motion.div key={i} variants={item} className={`p-4 rounded-lg border flex flex-col justify-center ${i === 0 ? 'bg-blue-600 text-white border-blue-600' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white'}`}>
                        <span className={`text-sm ${i === 0 ? 'text-blue-100' : 'text-slate-500'}`}>{stat}</span>
                        <span className="text-2xl font-bold mt-1">{[4, 1, 3, 0][i]}</span>
                    </motion.div>
                ))}
            </div>

            <motion.div variants={item}>
                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardContent className="p-0">
                        <div className="divide-y divide-slate-100 dark:divide-slate-800">
                            {COMPLAINTS.map((complaint) => (
                                <div key={complaint.id} className="p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-full ${
                                            complaint.priority === 'High' ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400' :
                                            complaint.priority === 'Medium' ? 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400' :
                                            'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                                        }`}>
                                            {complaint.priority === 'High' ? <AlertCircle className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="font-semibold text-slate-900 dark:text-white">{complaint.title}</span>
                                                <Badge variant="outline">{complaint.id}</Badge>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-slate-500">
                                                <span className="font-medium text-slate-700 dark:text-slate-300">{complaint.category}</span>
                                                <span>•</span>
                                                <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {complaint.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 w-full sm:w-auto mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-0 border-slate-100 dark:border-slate-800">
                                        <Badge className={`px-2.5 py-1 ${
                                            complaint.status === 'Resolved' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                                        }`}>{complaint.status}</Badge>
                                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-blue-600 ml-auto sm:ml-0"><ArrowRight className="w-5 h-5" /></Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </motion.div>
    );
};

export default ComplaintsUI;
