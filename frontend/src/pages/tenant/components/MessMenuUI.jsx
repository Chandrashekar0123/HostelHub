import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Calendar, Coffee, Sun, Moon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';

const WEEKLY_MENU = [
    { day: 'Monday', meals: { breakfast: 'Oatmeal, Toast, Coffee', lunch: 'Grilled Chicken Salad', dinner: 'Pasta Primavera' } },
    { day: 'Tuesday', meals: { breakfast: 'Pancakes, Fruits', lunch: 'Vegetable Biryani', dinner: 'Roast Beef, Potatoes' } },
    { day: 'Wednesday', meals: { breakfast: 'Scrambled Eggs, Toast', lunch: 'Chicken Sandwich', dinner: 'Fish Tacos' } },
    { day: 'Thursday', meals: { breakfast: 'Cereal, Muffin', lunch: 'Tomato Soup, Salad', dinner: 'BBQ Ribs, Corn' } },
    { day: 'Friday', meals: { breakfast: 'Waffles, Sausage', lunch: 'Pizza Special', dinner: 'Sushi Bowls' } },
    { day: 'Saturday', meals: { breakfast: 'Continental Brunch', lunch: 'Burgers & Fries', dinner: 'Steak Frites' } },
    { day: 'Sunday', meals: { breakfast: 'Sunday Brunch Buffet', lunch: 'Light Salad Bar', dinner: 'Roast Turkey' } },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } };

const MessMenuUI = () => {
    const [selectedDay, setSelectedDay] = useState(0);

    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-5xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Culinary Schedule</h2>
                    <p className="text-slate-500 mt-1">Review the weekly organizational dining plan.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-2 mb-8 overflow-x-auto pb-4">
                {WEEKLY_MENU.map((menu, i) => (
                    <motion.button 
                        key={i} 
                        variants={item}
                        onClick={() => setSelectedDay(i)}
                        className={`p-3 rounded-lg border text-center transition-all ${
                            selectedDay === i 
                            ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800'
                        }`}
                    >
                        <div className={`text-[10px] uppercase tracking-wider font-bold mb-1 ${selectedDay === i ? 'text-blue-200' : 'text-slate-400'}`}>Day {i+1}</div>
                        <div className="font-medium text-sm">{menu.day.substring(0, 3)}</div>
                    </motion.button>
                ))}
            </div>

            <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { name: 'Breakfast', icon: Coffee, desc: WEEKLY_MENU[selectedDay].meals.breakfast, time: '07:30 - 09:30', color: 'text-amber-600', bg: 'bg-amber-50' },
                    { name: 'Lunch', icon: Sun, desc: WEEKLY_MENU[selectedDay].meals.lunch, time: '12:30 - 14:30', color: 'text-blue-600', bg: 'bg-blue-50' },
                    { name: 'Dinner', icon: Moon, desc: WEEKLY_MENU[selectedDay].meals.dinner, time: '19:00 - 21:00', color: 'text-indigo-600', bg: 'bg-indigo-50' },
                ].map((meal, i) => (
                    <Card key={i} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 overflow-hidden">
                        <CardHeader className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 pb-4">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center gap-2">
                                    <div className={`p-2 rounded-md ${meal.bg} dark:bg-slate-800`}>
                                        <meal.icon className={`w-4 h-4 ${meal.color} dark:text-white`} />
                                    </div>
                                    <CardTitle className="text-lg">{meal.name}</CardTitle>
                                </div>
                                <Badge variant="outline" className="bg-white dark:bg-slate-900">{meal.time}</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="text-slate-700 dark:text-slate-300 font-medium mb-6 min-h-[50px]">{meal.desc}</p>
                            <Button variant="outline" className="w-full text-sm">Provide Feedback</Button>
                        </CardContent>
                    </Card>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default MessMenuUI;
