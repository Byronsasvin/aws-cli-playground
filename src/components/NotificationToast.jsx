import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Info, AlertTriangle, Zap } from 'lucide-react';

export const NotificationToast = ({ notifications, removeNotification }) => {
    return (
        <div className="fixed bottom-10 right-10 z-[150] flex flex-col gap-3 pointer-events-none">
            <AnimatePresence>
                {notifications.map((n) => (
                    <motion.div
                        key={n.id}
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                        className={`pointer-events-auto flex items-center gap-4 px-6 py-4 rounded-2xl glass-morphism border border-white/10 shadow-2xl min-w-[300px]`}
                    >
                        <div className={`p-2 rounded-xl ${n.type === 'success' ? 'bg-green-500/20 text-green-500' :
                                n.type === 'info' ? 'bg-blue-500/20 text-blue-500' :
                                    'bg-orange-500/20 text-orange-500'
                            }`}>
                            {n.type === 'success' ? <CheckCircle className="w-5 h-5" /> :
                                n.type === 'info' ? <Info className="w-5 h-5" /> :
                                    <Zap className="w-5 h-5" />}
                        </div>

                        <div className="flex-1">
                            <h4 className="font-bold text-sm tracking-tight">{n.title}</h4>
                            <p className="text-xs text-slate-400">{n.message}</p>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
