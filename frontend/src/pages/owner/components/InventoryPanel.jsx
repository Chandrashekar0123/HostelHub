import React from 'react';
import { motion } from 'framer-motion';
import { Package, AlertCircle, TrendingDown, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Badge from '../../../components/ui/Badge';

const INVENTORY = [
  { id: 'INV-102', item: 'Bed Linens', category: 'Laundry', stock: 45, threshold: 20, status: 'Healthy' },
  { id: 'INV-105', item: 'Cleaning Fluid (L)', category: 'Janitorial', stock: 5, threshold: 10, status: 'Low Stock' },
  { id: 'INV-109', item: 'LED Bulbs (60W)', category: 'Maintenance', stock: 2, threshold: 15, status: 'Critical' },
  { id: 'INV-111', item: 'Toilet Paper Rolls', category: 'Janitorial', stock: 120, threshold: 50, status: 'Healthy' }
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } };

const InventoryPanel = () => {
    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-7xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Supply Logistics</h2>
                    <p className="text-slate-500 mt-1">Audit consumable stock and operational equipment.</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">Audit Stock Level</Button>
            </div>

            <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-white dark:bg-slate-900 border-red-200 dark:border-red-900/50 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5"><AlertCircle className="w-24 h-24 text-red-500" /></div>
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-sm font-medium text-red-600 dark:text-red-400">Critical Depletion</span>
                            <AlertCircle className="w-5 h-5 text-red-500" />
                        </div>
                        <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">1</h3>
                        <p className="text-sm text-slate-500">Requires immediate procurement.</p>
                    </CardContent>
                </Card>
                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-sm font-medium text-slate-500">Approaching Threshold</span>
                            <TrendingDown className="w-5 h-5 text-amber-500" />
                        </div>
                        <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">3</h3>
                        <p className="text-sm text-slate-500">Items below recommended reserves.</p>
                    </CardContent>
                </Card>
                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-sm font-medium text-slate-500">Total Unique SKUs</span>
                            <Package className="w-5 h-5 text-blue-500" />
                        </div>
                        <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">124</h3>
                        <p className="text-sm text-slate-500">Currently tracked in ledger.</p>
                    </CardContent>
                </Card>
            </motion.div>

            <motion.div variants={item}>
                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardHeader className="border-b border-slate-100 dark:border-slate-800 flex flex-row items-center justify-between">
                        <CardTitle className="text-lg">Inventory Ledger</CardTitle>
                        <Button variant="outline" size="sm">Export CSV</Button>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                                <thead className="text-xs uppercase bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                    <tr>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Item Description</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Category</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Active Stock</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Reorder Level</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Condition</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {INVENTORY.map((inv) => (
                                        <tr key={inv.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="font-bold text-slate-900 dark:text-white">{inv.item}</div>
                                                <div className="text-xs text-slate-500">{inv.id}</div>
                                            </td>
                                            <td className="px-6 py-4">{inv.category}</td>
                                            <td className={`px-6 py-4 font-bold ${inv.stock <= inv.threshold ? 'text-red-600' : 'text-slate-900 dark:text-white'}`}>{inv.stock} Unit(s)</td>
                                            <td className="px-6 py-4">{inv.threshold} Unit(s)</td>
                                            <td className="px-6 py-4">
                                                <Badge className={`border-0 ${
                                                    inv.status === 'Healthy' ? 'bg-emerald-100 text-emerald-700' :
                                                    inv.status === 'Critical' ? 'bg-red-100 text-red-700 animate-pulse' :
                                                    'bg-amber-100 text-amber-700'
                                                }`}>{inv.status}</Badge>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <Button size="sm" variant="ghost" className="text-blue-600 hover:bg-blue-50">Procure <ArrowRight className="w-4 h-4 ml-1" /></Button>
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

export default InventoryPanel;
