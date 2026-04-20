import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, LayoutDashboard, CreditCard, Home, Zap, Users, Globe, BarChart } from 'lucide-react';
import Button from '../../components/ui/Button';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Elegant Fixed Nav */}
            <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                            <Home className="text-white w-6 h-6" />
                        </div>
                        <span className="text-2xl font-black text-slate-900 tracking-tighter">HostelHub</span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
                        <a href="#features" className="hover:text-blue-600 transition-colors">Platform</a>
                        <a href="#solutions" className="hover:text-blue-600 transition-colors">Solutions</a>
                        <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/login" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors px-4">Log in</Link>
                        <Link to="/signup">
                            <Button className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            <main>
                {/* High-Fidelity Hero Section */}
                <section className="pt-48 pb-32 px-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 blur-[120px] rounded-full -mr-40 -mt-40 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50/50 blur-[100px] rounded-full -ml-20 -mb-20 pointer-events-none" />
                    
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-black uppercase tracking-widest mb-10"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                            Enterprise Grade Infrastructure
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-7xl md:text-8xl font-black text-slate-900 tracking-tight leading-[0.95] mb-10"
                        >
                            Manage Your Hostel <br /> 
                            <span className="text-blue-600">Without the Chaos.</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-14 leading-relaxed font-medium"
                        >
                            The ultimate operating system for modern property managers. Automate rent collection, scale occupancy, and empower residents with a premium portal.
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        >
                            <Link to="/signup" className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white font-black text-lg rounded-2xl hover:bg-blue-700 shadow-2xl shadow-blue-600/40 transition-all hover:-translate-y-1">
                                Deploy Now — It's Free
                            </Link>
                            <Link to="/login" className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-slate-200 text-slate-900 font-black text-lg rounded-2xl hover:bg-slate-50 transition-all">
                                View Live Demo
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Features Matrix */}
                <section id="features" className="py-32 px-6 bg-slate-50/50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">Core Capabilities</h2>
                            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">Everything required to govern residential systems at enterprise scale.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                              { icon: CreditCard, title: "Rent Flow Automator", desc: "Automated ledger reconciliation with zero-touch rent tracking for every resident." },
                              { icon: ShieldCheck, title: "Digital Security", desc: "Encrypted resident data management and priority maintenance escalation matrix." },
                              { icon: LayoutDashboard, title: "Global Command", desc: "Monitor multiple properties from a single pane of glass with deep financial telemetry." },
                              { icon: Zap, title: "Automated Billing", desc: "Instant invoice generation and receipt orchestration for large residential properties." },
                              { icon: Users, title: "Staff Delegation", desc: "Role-based access constraints allocating operational tasks directly to field agents." },
                              { icon: Globe, title: "Portfolio Scalability", desc: "Support across global deployments exceeding 50,000 units with ease." }
                            ].map((feature, i) => (
                              <motion.div 
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-10 bg-white border border-slate-200 rounded-[32px] shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
                              >
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">{feature.title}</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
                              </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Premium Footer */}
            <footer className="py-20 border-t border-slate-100 text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                            <Home className="text-white w-5 h-5" />
                        </div>
                        <span className="text-xl font-bold text-slate-900 tracking-tighter">HostelHub</span>
                    </div>
                    <p className="text-slate-400 text-sm font-medium">© 2026 HostelHub Enterprise Systems. Distributed under High-Tier SaaS Licenses.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
