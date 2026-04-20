import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, DollarSign, ArrowUpRight, ArrowDownRight, FileText } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Badge from '../../../components/ui/Badge';

const INVOICES = [
  { id: 'INV-10042', tenant: 'Alex Johnson', room: '304', amount: 450, status: 'Paid', date: 'Oct 01, 2026' },
  { id: 'INV-10043', tenant: 'Sarah Lee', room: '202', amount: 300, status: 'Overdue', date: 'Oct 01, 2026' },
  { id: 'INV-10044', tenant: 'Michael Chen', room: '101', amount: 450, status: 'Pending', date: 'Oct 15, 2026' },
  { id: 'INV-10045', tenant: 'Emma Watson', room: '201', amount: 500, status: 'Paid', date: 'Oct 01, 2026' }
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } };

const OwnerPaymentsUI = () => {
    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-7xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Revenue Settlement</h2>
                    <p className="text-slate-500 mt-1">Audit inbound payments and trigger outstanding invoice alerts.</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">Collect All Pending</Button>
            </div>

            <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                    { label: 'Total Revenue (MTD)', value: '$12,450.00', icon: DollarSign, trend: '+12.5%', color: 'emerald' },
                    { label: 'Outbound Expenses', value: '$3,210.00', icon: ArrowDownRight, trend: '-2.1%', color: 'red' },
                    { label: 'Pending Receivables', value: '$1,850.00', icon: CreditCard, trend: 'Net 30', color: 'amber' },
                    { label: 'Overdue Total', value: '$600.00', icon: ArrowUpRight, trend: 'Action Required', color: 'slate' }
                ].map((stat, i) => (
                    <Card key={i} className={`bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm border-t-4 border-t-${stat.color}-500`}>
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <span className={`p-2 rounded-lg bg-${stat.color}-50 text-${stat.color}-600 dark:bg-${stat.color}-900/20`}><stat.icon className="w-5 h-5"/></span>
                                <Badge variant="outline" className="bg-slate-50 dark:bg-slate-800 text-xs">{stat.trend}</Badge>
                            </div>
                            <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
                        </CardContent>
                    </Card>
                ))}
            </motion.div>

            <motion.div variants={item}>
                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                                <thead className="text-xs uppercase bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                    <tr>
                                        <th className="px-6 py-4 font-bold">Invoice Ref</th>
                                        <th className="px-6 py-4 font-bold">Resident</th>
                                        <th className="px-6 py-4 font-bold">Unit</th>
                                        <th className="px-6 py-4 font-bold">Due Date</th>
                                        <th className="px-6 py-4 font-bold">Amount</th>
                                        <th className="px-6 py-4 font-bold">Settlement Status</th>
                                        <th className="px-6 py-4 font-bold text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {INVOICES.map((inv) => (
                                        <tr key={inv.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                            <td className="px-6 py-4 font-bold text-slate-900 dark:text-white flex items-center gap-2"><FileText className="w-4 h-4 text-blue-500"/>{inv.id}</td>
                                            <td className="px-6 py-4">{inv.tenant}</td>
                                            <td className="px-6 py-4 font-medium">Room {inv.room}</td>
                                            <td className="px-6 py-4">{inv.date}</td>
                                            <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">${inv.amount.toFixed(2)}</td>
                                            <td className="px-6 py-4">
                                                <Badge className={`border-0 ${
                                                    inv.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' :
                                                    inv.status === 'Overdue' ? 'bg-red-100 text-red-700 font-bold animate-pulse' :
                                                    'bg-amber-100 text-amber-700'
                                                }`}>{inv.status}</Badge>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                {inv.status !== 'Paid' ? <Button size="sm" variant="outline">Remind</Button> : <span className="text-slate-400">Cleared</span>}
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

export default OwnerPaymentsUI;
