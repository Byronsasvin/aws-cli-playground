import React from 'react';
import { useStore } from '../store/useStore';
import { Shield, Trophy, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProgressTracker = () => {
    const { points, level } = useStore();
    const progress = (points % 1000) / 10;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-morphism"
            style={{ padding: '30px', position: 'relative', overflow: 'hidden' }}
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ padding: '15px', background: 'linear-gradient(135deg, #FF9900, #FF6600)', borderRadius: '20px', boxShadow: '0 10px 30px rgba(255, 153, 0, 0.3)' }}>
                        <Shield color="white" size={32} />
                    </div>
                    <div>
                        <p style={{ fontSize: '10px', color: '#64748b', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '5px' }}>Rango Actual</p>
                        <h3 style={{ fontSize: '36px', fontWeight: '900', color: 'white', letterSpacing: '-1.5px' }}>LVL {level}</h3>
                    </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '10px', color: '#64748b', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '5px' }}>Puntuación</p>
                    <h3 style={{ fontSize: '36px', fontWeight: '900', color: 'white', letterSpacing: '-1.5px' }}>{points}<span style={{ color: '#FF9900', fontSize: '20px', marginLeft: '5px' }}>XP</span></h3>
                </div>
            </div>

            <div style={{ marginTop: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontSize: '11px', fontWeight: '980', color: '#94a3b8', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <TrendingUp size={14} color="#FF9900" /> PROGRESO NIVEL
                    </span>
                    <span style={{ fontSize: '18px', fontWeight: '900', color: 'white' }}>{Math.floor(progress)}%</span>
                </div>
                <div className="progress-bar-container">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="progress-bar-fill"
                    />
                </div>
            </div>
        </motion.div>
    );
};
