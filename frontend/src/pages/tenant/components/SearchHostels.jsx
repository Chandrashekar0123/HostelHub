import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, Filter, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Badge from '../../../components/ui/Badge';

const DUMMY_HOSTELS = [
  { id: 1, name: 'Highland Residency', location: 'Downtown Hub', rating: 4.8, price: '$400/mo', type: 'Premium', img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&q=80' },
  { id: 2, name: 'Student Oasis', location: 'University District', rating: 4.5, price: '$250/mo', type: 'Standard', img: 'https://images.unsplash.com/photo-1522771731470-7a43734898fc?w=500&q=80' },
  { id: 3, name: 'The Urban Loft', location: 'Tech Park', rating: 4.9, price: '$550/mo', type: 'Luxury', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80' },
  { id: 4, name: 'Campus View', location: 'University District', rating: 4.2, price: '$200/mo', type: 'Standard', img: 'https://images.unsplash.com/photo-1499955085172-a104c9463ece?w=500&q=80' }
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const SearchHostels = () => {
    const [search, setSearch] = useState('');

    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Discover Properties</h2>
                    <p className="text-slate-500 mt-1">Find the perfect residential space tailored to your needs.</p>
                </div>
                <div className="flex w-full md:w-auto gap-2">
                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input 
                            placeholder="Search by name or district..." 
                            className="pl-9"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" className="px-3"><Filter className="w-4 h-4" /></Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {DUMMY_HOSTELS.filter(h => h.name.toLowerCase().includes(search.toLowerCase()) || h.location.toLowerCase().includes(search.toLowerCase())).map((hostel) => (
                    <motion.div key={hostel.id} variants={item}>
                        <Card className="overflow-hidden hover:shadow-xl transition-all border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-full flex flex-col group">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute top-3 left-3 z-10">
                                    <Badge className="bg-white/90 text-slate-900 backdrop-blur-md hover:bg-white">{hostel.type}</Badge>
                                </div>
                                <img src={hostel.img} alt={hostel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <CardContent className="p-5 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">{hostel.name}</h3>
                                    <div className="flex items-center text-amber-500 bg-amber-50 dark:bg-amber-500/10 px-2 py-1 rounded text-xs font-bold">
                                        <Star className="w-3 h-3 fill-current mr-1" />
                                        {hostel.rating}
                                    </div>
                                </div>
                                <p className="text-slate-500 flex items-center text-sm mb-4"><MapPin className="w-3 h-3 mr-1" /> {hostel.location}</p>
                                <div className="mt-auto flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <div className="font-bold text-xl text-blue-600">{hostel.price}</div>
                                    <Button size="sm" variant="ghost" className="hover:bg-blue-50 text-blue-600">View Details <ArrowRight className="w-4 h-4 ml-1" /></Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default SearchHostels;
