import React from 'react';
import { challenges } from '../data/challenges';
import { useStore } from '../store/useStore';
import { CheckCircle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const ChallengesPanel = () => {
    const { completedChallenges } = useStore();

    return (
        <div className="challenges-list">
            {challenges.map((ch, index) => {
                const isCompleted = completedChallenges.includes(ch.id);

                return (
                    <motion.div
                        key={ch.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="challenge-item"
                        style={isCompleted ? { borderColor: '#22c55e44', background: 'rgba(34, 197, 94, 0.05)' } : {}}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{
                                    fontSize: '9px', fontWeight: '900', textTransform: 'uppercase',
                                    padding: '3px 8px', borderRadius: '6px',
                                    background: ch.difficulty === 'beginner' ? 'rgba(56, 189, 248, 0.1)' : 'rgba(192, 132, 252, 0.1)',
                                    color: ch.difficulty === 'beginner' ? '#38bdf8' : '#c084fc',
                                    border: '1px solid transparent'
                                }}>
                                    {ch.difficulty}
                                </span>
                                <h4 style={{ fontSize: '14px', fontWeight: '800', color: 'white', textTransform: 'uppercase' }}>{ch.title}</h4>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#FF9900' }}>
                                <Zap size={14} fill="#FF9900" />
                                <span style={{ fontSize: '14px', fontWeight: '900' }}>+{ch.reward}</span>
                            </div>
                        </div>

                        <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.4', marginBottom: '15px' }}>{ch.description}</p>

                        {isCompleted && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#22c55e', fontSize: '10px', fontWeight: '900' }}>
                                <CheckCircle size={14} /> COMPLETADO
                            </div>
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
};
