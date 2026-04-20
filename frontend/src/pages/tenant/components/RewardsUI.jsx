import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Gift, Zap, Star, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } };

const RewardsUI = () => {
    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-5xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Resident Incentives</h2>
                    <p className="text-slate-500 mt-1">Unlock benefits through platform engagement and compliance.</p>
                </div>
            </div>

            <motion.div variants={item} className="p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden shadow-xl mb-8">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Trophy className="w-48 h-48" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0 p-6 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                        <Trophy className="w-12 h-12 text-yellow-300" />
                    </div>
                    <div>
                        <p className="text-blue-100 font-medium uppercase tracking-widest text-sm mb-1">Available Balance</p>
                        <h3 className="text-5xl font-extrabold mb-2">1,250 <span className="text-2xl font-medium text-blue-200">PTS</span></h3>
                        <p className="text-blue-100 text-sm max-w-sm">You are 250 points away from unlocking the <strong>Premium Lifestyle Tier</strong>.</p>
                    </div>
                </div>
            </motion.div>

            <motion.div variants={item}>
                <h3 className="text-xl font-bold mb-4">Available Redemptions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: '$50 Rent Credit', points: 1000, desc: 'Apply directly to next invoice.', icon: Zap },
                        { title: 'Free Room Upgrade', points: 2500, desc: 'Move to a premium suite.', icon: Star },
                        { title: 'Priority Maintenance', points: 500, desc: '1hr response SLA bypass.', icon: ShieldCheck },
                    ].map((reward, i) => (
                        <Card key={i} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 overflow-hidden group">
                            <CardContent className="p-6">
                                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl mb-6 flex justify-center group-hover:scale-105 transition-transform">
                                    <reward.icon className="w-12 h-12 text-blue-600" />
                                </div>
                                <h4 className="font-bold text-lg mb-2">{reward.title}</h4>
                                <p className="text-sm text-slate-500 mb-6 min-h-[40px]">{reward.desc}</p>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-lg text-blue-600">{reward.points} PTS</span>
                                    <Button variant="outline" size="sm" className="font-semibold">Redeem</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default RewardsUI;
