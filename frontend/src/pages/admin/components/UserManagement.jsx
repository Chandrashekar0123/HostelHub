import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ShieldAlert, Key, Edit, Trash2, Filter, UserCheck, Shield } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Badge from '../../../components/ui/Badge';

const USERS = [
  { id: 'ADM-001', name: 'System Root', email: 'root@hostelhub.com', role: 'Super Admin', status: 'Active', mfa: true, lastLogin: '10 mins ago' },
  { id: 'MGR-054', name: 'James Peterson', email: 'j.peterson@highland.com', role: 'Owner', status: 'Active', mfa: true, lastLogin: '1 hour ago' },
  { id: 'MGR-082', name: 'Sarah Connor', email: 's.connor@oasis.com', role: 'Owner', status: 'Suspended', mfa: false, lastLogin: '15 days ago' },
  { id: 'TRG-102', name: 'Support Node A', email: 'supportA@hostelhub.com', role: 'Staff', status: 'Active', mfa: true, lastLogin: 'Active Now' },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } };

const UserManagement = () => {
    const [search, setSearch] = useState('');

    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-7xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Identity Access Management</h2>
                    <p className="text-slate-500 mt-1">Global directory of all platform administrators, property owners, and staff members.</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">Provision User</Button>
            </div>

            <motion.div variants={item} className="flex gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input 
                        placeholder="Search identities by email, ID, or name..." 
                        className="pl-9 w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <Button variant="outline" className="bg-white dark:bg-slate-900"><Filter className="w-4 h-4 mr-2" /> Role Filters</Button>
            </motion.div>

            <motion.div variants={item}>
                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                                <thead className="text-xs uppercase bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                    <tr>
                                        <th className="px-6 py-4 font-bold">Principal Identity</th>
                                        <th className="px-6 py-4 font-bold">Assigned Role</th>
                                        <th className="px-6 py-4 font-bold">2FA Status</th>
                                        <th className="px-6 py-4 font-bold">Connection State</th>
                                        <th className="px-6 py-4 font-bold">Last Active</th>
                                        <th className="px-6 py-4 font-bold text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {USERS.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())).map((user) => (
                                        <tr key={user.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300 text-xs">
                                                        {user.name.split(' ').map(n=>n[0]).join('')}
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                                            {user.name} 
                                                            {user.role === 'Super Admin' && <Shield className="w-3 h-3 text-red-500 fill-red-500" />}
                                                        </div>
                                                        <div className="text-xs text-slate-500">{user.email} • {user.id}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <Badge variant="outline" className="bg-slate-50 dark:bg-slate-800">{user.role}</Badge>
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.mfa ? (
                                                    <span className="flex items-center text-xs text-emerald-600 font-bold"><Key className="w-3 h-3 mr-1" /> Enabled</span>
                                                ) : (
                                                    <span className="flex items-center text-xs text-amber-600 font-bold"><ShieldAlert className="w-3 h-3 mr-1" /> Disabled</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <Badge className={`border-0 ${user.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                                                    {user.status}
                                                </Badge>
                                            </td>
                                            <td className="px-6 py-4 font-medium">{user.lastLogin}</td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button size="icon" variant="ghost" className="h-8 w-8 text-blue-600"><Edit className="w-4 h-4" /></Button>
                                                    <Button size="icon" variant="ghost" className="h-8 w-8 text-red-600"><Trash2 className="w-4 h-4" /></Button>
                                                </div>
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

export default UserManagement;
