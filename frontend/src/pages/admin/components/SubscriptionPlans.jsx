import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Zap, Edit3, Settings2 } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Badge from '../../../components/ui/Badge';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } };

const SubscriptionPlans = () => {
    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-6xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Tenant Licensing Tiers</h2>
                    <p className="text-slate-500 mt-1">Configure global SaaS pricing, capacities, and feature flags.</p>
                </div>
                <Button className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white"><Settings2 className="w-4 h-4 mr-2" /> Billing Settings</Button>
            </div>

            <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {[
                    { name: 'Standard', price: '$499', period: '/month', clients: 450, features: ['Up to 5 Properties', 'Standard Reporting', 'Email Support'] },
                    { name: 'Professional', price: '$1,299', period: '/month', clients: 120, features: ['Up to 25 Properties', 'Advanced Analytics', 'Priority Support'], highlight: true },
                    { name: 'Enterprise', price: 'Custom', period: '', clients: 12, features: ['Unlimited Properties', 'Dedicated Manager', 'On-Premise Deployment'] },
                ].map((tier, i) => (
                    <Card key={i} className={`relative overflow-hidden ${tier.highlight ? 'bg-blue-600 text-white border-blue-600' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'}`}>
                        {tier.highlight && <div className="absolute top-4 right-4"><Badge className="bg-white text-blue-600 border-0 shadow-sm"><Star className="w-3 h-3 mr-1 fill-blue-600" /> Best Performer</Badge></div>}
                        <CardContent className="p-8">
                            <h3 className={`text-xl font-bold mb-4 ${tier.highlight ? 'text-blue-100' : 'text-slate-900 dark:text-white'}`}>{tier.name}</h3>
                            <div className="flex items-baseline mb-6">
                                <span className={`text-4xl font-extrabold ${tier.highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{tier.price}</span>
                                <span className={`text-sm ${tier.highlight ? 'text-blue-200' : 'text-slate-500'}`}>{tier.period}</span>
                            </div>
                            
                            <div className={`mb-8 p-3 rounded-lg flex justify-between items-center ${tier.highlight ? 'bg-blue-700' : 'bg-slate-50 dark:bg-slate-800'}`}>
                                <span className={`text-sm font-medium ${tier.highlight ? 'text-blue-100' : 'text-slate-500'}`}>Active Licenses</span>
                                <span className={`font-bold ${tier.highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{tier.clients}</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feat, j) => (
                                    <li key={j} className="flex items-center text-sm font-medium">
                                        <CheckCircle2 className={`w-4 h-4 mr-3 flex-shrink-0 ${tier.highlight ? 'text-blue-300' : 'text-blue-600'}`} />
                                        <span className={`${tier.highlight ? 'text-blue-50' : 'text-slate-700 dark:text-slate-300'}`}>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button className={`w-full ${tier.highlight ? 'bg-white text-blue-600 hover:bg-slate-100' : 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 border-0'}`}>
                                <Edit3 className="w-4 h-4 mr-2" /> Modify Tier Limits
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default SubscriptionPlans;
