import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, Edit2, Trash2, Home, Users } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Badge from '../../../components/ui/Badge';

const ROOMS = [
  { id: '101', type: 'Single', floor: 1, capacity: 1, occupied: 1, price: 400, status: 'Occupied' },
  { id: '102', type: 'Double', floor: 1, capacity: 2, occupied: 1, price: 250, status: 'Partially Available' },
  { id: '201', type: 'Suite', floor: 2, capacity: 2, occupied: 0, price: 600, status: 'Available' },
  { id: '202', type: 'Double', floor: 2, capacity: 2, occupied: 2, price: 250, status: 'Occupied' },
  { id: '301', type: 'Single', floor: 3, capacity: 1, occupied: 0, price: 450, status: 'Maintenance' },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } };

const RoomManagement = () => {
    const [search, setSearch] = useState('');

    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-7xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Facility Management</h2>
                    <p className="text-slate-500 mt-1">Configure room allocations, capacities, and base pricing.</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="w-4 h-4 mr-2" /> Add New Unit</Button>
            </div>

            <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {['Total Units', 'Occupied beds', 'Available Beds', 'Under Maintenance'].map((stat, i) => (
                    <Card key={i} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                        <CardContent className="p-4 flex flex-col justify-center h-full">
                            <span className="text-sm font-medium text-slate-500">{stat}</span>
                            <span className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{[45, 82, 12, 3][i]}</span>
                        </CardContent>
                    </Card>
                ))}
            </motion.div>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm">
                <div className="relative w-full sm:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input 
                        placeholder="Search by Room ID or Type..." 
                        className="pl-9"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <Button variant="outline" className="w-full sm:w-auto"><Filter className="w-4 h-4 mr-2" /> Advanced Filters</Button>
            </motion.div>

            <motion.div variants={item}>
                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                                <thead className="text-xs uppercase bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                    <tr>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Unit ID</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Layout Type</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Occupancy</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Base Rent</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">Condition</th>
                                        <th className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ROOMS.filter(r => r.id.includes(search) || r.type.toLowerCase().includes(search.toLowerCase())).map((room) => (
                                        <tr key={room.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-md"><Home className="w-4 h-4" /></div>
                                                    <span className="font-bold text-slate-900 dark:text-white">Room {room.id}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font-medium">{room.type} (Floor {room.floor})</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <Users className="w-4 h-4 text-slate-400" />
                                                    <span className="font-medium text-slate-900 dark:text-white">{room.occupied} / {room.capacity}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">${room.price}</td>
                                            <td className="px-6 py-4">
                                                <Badge className={`border-0 ${
                                                    room.status === 'Available' ? 'bg-emerald-100 text-emerald-700' :
                                                    room.status === 'Maintenance' ? 'bg-red-100 text-red-700' :
                                                    room.status === 'Occupied' ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400' :
                                                    'bg-blue-100 text-blue-700'
                                                }`}>{room.status}</Badge>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button size="icon" variant="ghost" className="h-8 w-8 text-blue-600"><Edit2 className="w-4 h-4" /></Button>
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

export default RoomManagement;
