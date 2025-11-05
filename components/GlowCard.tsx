import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function GlowCard({ children, delay = 0, className = '' }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
      className={`group relative p-6 rounded-2xl border border-[#00C4FF]/20 bg-gradient-to-b from-black/50 to-[#001a2e]/50 backdrop-blur-sm hover:border-[#00C4FF]/40 transition-all ${className}`}
      style={{
        boxShadow: '0 0 20px rgba(0, 196, 255, 0.1)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C4FF]/0 to-[#00C4FF]/0 group-hover:from-[#00C4FF]/5 group-hover:to-[#00C4FF]/0 rounded-2xl transition-all" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}







