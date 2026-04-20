import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Download, FileText, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Badge from '../../../components/ui/Badge';

const TRANSACTIONS = [
  { id: 'TRX-9982', date: 'Oct 01, 2026', desc: 'October Rent Processing', amount: 400, type: 'debit', status: 'Completed' },
  { id: 'TRX-9981', date: 'Sep 28, 2026', desc: 'Maintenance Fee (AC Service)', amount: 25, type: 'debit', status: 'Completed' },
  { id: 'TRX-9950', date: 'Sep 01, 2026', desc: 'September Rent Processing', amount: 400, type: 'debit', status: 'Completed' },
  { id: 'TRX-9912', date: 'Aug 15, 2026', desc: 'Security Deposit Refund', amount: 150, type: 'credit', status: 'Completed' },
  { id: 'TRX-9905', date: 'Aug 01, 2026', desc: 'August Rent Processing', amount: 400, type: 'debit', status: 'Completed' }
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } };

const PaymentsUI = () => {
    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-6xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Financial Ledger</h2>
                    <p className="text-slate-500 mt-1">Manage invoices, historical payments, and active balances.</p>
                </div>
            </div>

            <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-blue-600 text-white border-none shadow-lg">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-blue-100 font-medium mb-1">Outstanding Balance</p>
                                <h3 className="text-4xl font-bold mb-4">$0.00</h3>
                                <p className="text-xs text-blue-200">Next billing cycle: Nov 01, 2026</p>
                            </div>
                            <div className="p-3 bg-white/20 rounded-full"><CreditCard className="w-6 h-6" /></div>
                        </div>
                        <Button className="w-full mt-6 bg-white text-blue-600 hover:bg-slate-100" disabled>Settle Balance</Button>
                    </CardContent>
                </Card>
                
                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <p className="text-slate-500 font-medium mb-1">Total Paid (YTD)</p>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">$3,625.00</h3>
                            </div>
                            <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-full"><ArrowUpRight className="w-6 h-6 text-emerald-600" /></div>
                        </div>
                        <Button variant="outline" className="w-full">Download Annual Statement</Button>
                    </CardContent>
                </Card>

                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <p className="text-slate-500 font-medium mb-1">Pending Invoices</p>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">0</h3>
                            </div>
                            <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full"><Clock className="w-6 h-6 text-slate-500" /></div>
                        </div>
                        <Button variant="outline" className="w-full">View Billing Schedule</Button>
                    </CardContent>
                </Card>
            </motion.div>

            <motion.div variants={item}>
                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardHeader className="border-b border-slate-100 dark:border-slate-800">
                        <CardTitle className="text-lg">Transaction History</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                                <thead className="text-xs uppercase bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                                    <tr>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Reference</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Date</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Description</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Amount</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Status</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300 text-right">Receipt</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TRANSACTIONS.map((trx) => (
                                        <tr key={trx.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{trx.id}</td>
                                            <td className="px-6 py-4">{trx.date}</td>
                                            <td className="px-6 py-4">{trx.desc}</td>
                                            <td className={`px-6 py-4 font-bold ${trx.type === 'credit' ? 'text-emerald-600' : 'text-slate-900 dark:text-white'}`}>
                                                {trx.type === 'credit' ? '+' : '-'}${trx.amount.toFixed(2)}
                                            </td>
                                            <td className="px-6 py-4">
                                                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-0">{trx.status}</Badge>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <Button size="icon" variant="ghost" className="h-8 w-8"><Download className="w-4 h-4 text-slate-500" /></Button>
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

export default PaymentsUI;
