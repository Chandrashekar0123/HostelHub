import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Mail, Phone, MoreHorizontal, UserCheck, ShieldAlert } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Badge from '../../../components/ui/Badge';

const TENANTS = [
  { id: 'RES-001', name: 'Alex Johnson', room: '304', phone: '+1 555-0102', email: 'alex.j@example.com', status: 'Active', rent: 'Current' },
  { id: 'RES-002', name: 'Sarah Lee', room: '202', phone: '+1 555-0199', email: 'sarah.l@example.com', status: 'Active', rent: 'Past Due' },
  { id: 'RES-003', name: 'Michael Chen', room: '101', phone: '+1 555-0123', email: 'm.chen@example.com', status: 'Notice Given', rent: 'Current' },
  { id: 'RES-004', name: 'Emma Watson', room: '201', phone: '+1 555-0144', email: 'emma.w@example.com', status: 'Active', rent: 'Current' }
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } };

const TenantManagement = () => {
    const [search, setSearch] = useState('');

    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-7xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Resident Directory</h2>
                    <p className="text-slate-500 mt-1">Manage tenant lifecycle, communications, and lease statuses.</p>
                </div>
            </div>

            <motion.div variants={item} className="flex gap-4 mb-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input 
                        placeholder="Search by name, room, or email..." 
                        className="pl-9 w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <Button variant="outline" className="bg-white dark:bg-slate-900">Broadcast Message</Button>
            </motion.div>

            <motion.div variants={item}>
                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                                <thead className="text-xs uppercase bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                    <tr>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Identity</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Assignment</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Contact</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Lease Status</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Ledger</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TENANTS.filter(t => t.name.toLowerCase().includes(search.toLowerCase()) || t.room.includes(search)).map((tenant) => (
                                        <tr key={tenant.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300">
                                                        {tenant.name.split(' ').map(n=>n[0]).join('')}
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-slate-900 dark:text-white">{tenant.name}</div>
                                                        <div className="text-xs text-slate-500">{tenant.id}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font-bold">Room {tenant.room}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col gap-1">
                                                    <span className="flex items-center gap-1 text-xs"><Phone className="w-3 h-3"/> {tenant.phone}</span>
                                                    <span className="flex items-center gap-1 text-xs"><Mail className="w-3 h-3"/> {tenant.email}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <Badge className={`border-0 ${
                                                    tenant.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                                                }`}>
                                                    {tenant.status === 'Active' ? <UserCheck className="w-3 h-3 mr-1"/> : <ShieldAlert className="w-3 h-3 mr-1"/>}
                                                    {tenant.status}
                                                </Badge>
                                            </td>
                                            <td className="px-6 py-4">
                                                <Badge className={`border-0 ${
                                                    tenant.rent === 'Current' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                                                }`}>{tenant.rent}</Badge>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-500"><MoreHorizontal className="w-4 h-4" /></Button>
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

export default TenantManagement;
