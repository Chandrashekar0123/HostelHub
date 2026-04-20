import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } };

const BookingUI = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);

    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-5xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Room Allocation</h2>
                    <p className="text-slate-500 mt-1">Select an available unit from the interactive floor plan.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                        <CardContent className="p-6">
                            <h3 className="font-bold text-lg mb-4">Floor 3 - Premium Wing</h3>
                            <div className="grid grid-cols-4 gap-4">
                                {[
                                    { id: '301', type: 'Single', status: 'Occupied' },
                                    { id: '302', type: 'Double', status: 'Available' },
                                    { id: '303', type: 'Single', status: 'Available' },
                                    { id: '304', type: 'Double', status: 'Occupied' },
                                    { id: '305', type: 'Suite', status: 'Maintenance' },
                                    { id: '306', type: 'Double', status: 'Available' },
                                    { id: '307', type: 'Single', status: 'Occupied' },
                                    { id: '308', type: 'Double', status: 'Available' },
                                ].map((room) => (
                                    <button
                                        key={room.id}
                                        onClick={() => room.status === 'Available' && setSelectedRoom(room.id)}
                                        disabled={room.status !== 'Available'}
                                        className={`p-4 rounded-xl border text-center transition-all ${
                                            room.status === 'Occupied' ? 'bg-slate-100 border-slate-200 text-slate-400 dark:bg-slate-800 dark:border-slate-700 cursor-not-allowed opacity-60' :
                                            room.status === 'Maintenance' ? 'bg-amber-50 border-amber-200 text-amber-600 dark:bg-amber-900/20 dark:border-amber-800 cursor-not-allowed' :
                                            selectedRoom === room.id ? 'bg-blue-600 border-blue-600 text-white shadow-lg scale-105' :
                                            'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300'
                                        }`}
                                    >
                                        <div className="font-bold text-xl">{room.id}</div>
                                        <div className={`text-xs mt-1 ${selectedRoom === room.id ? 'text-blue-100' : 'text-slate-500'}`}>{room.type}</div>
                                    </button>
                                ))}
                            </div>
                            
                            <div className="flex gap-4 mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 text-sm">
                                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-white border border-slate-300"></span> Available</span>
                                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-slate-200"></span> Occupied</span>
                                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amber-100"></span> Maintenance</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:col-span-1">
                    <Card className="bg-slate-50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 sticky top-4">
                        <CardContent className="p-6">
                            <h3 className="font-bold text-lg mb-6">Reservation Details</h3>
                            {selectedRoom ? (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg flex items-start gap-4">
                                        <div className="p-3 bg-blue-100 text-blue-600 rounded-md">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">Room {selectedRoom}</p>
                                            <p className="text-sm text-slate-500">Premium Wing</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-500">Base Rent</span>
                                            <span className="font-medium">$450.00 / mo</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-500">Deposit (1mo)</span>
                                            <span className="font-medium">$450.00</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-500">Platform Fee</span>
                                            <span className="font-medium">$25.00</span>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                                        <div className="flex justify-between items-center mb-6">
                                            <span className="font-bold text-slate-900 dark:text-white">Due Today</span>
                                            <span className="text-2xl font-bold text-blue-600">$925.00</span>
                                        </div>
                                        <Button className="w-full py-6 text-lg font-bold">Secure Reservation</Button>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="text-center py-12 px-4 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg">
                                    <CheckCircle2 className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                                    <p className="text-slate-500 font-medium">Select an available room from the floor plan to view reservation details.</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </motion.div>
    );
};

export default BookingUI;
