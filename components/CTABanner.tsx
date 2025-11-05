import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  onButtonClick: () => void;
}

export function CTABanner({ title, subtitle, buttonText, onButtonClick }: CTABannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative my-20 p-8 md:p-12 rounded-2xl border border-[#00C4FF]/20 bg-gradient-to-br from-black via-[#001a2e] to-black overflow-hidden"
      style={{
        boxShadow: '0 0 40px rgba(0, 196, 255, 0.2)',
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#00C4FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00C4FF]/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-[#AAB4C3] mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onButtonClick}
          className="inline-flex items-center space-x-2 px-8 py-4 bg-[#00C4FF] text-black rounded-lg transition-all hover:shadow-[0_0_30px_rgba(0,196,255,0.8)] font-medium"
        >
          <span>{buttonText}</span>
          <ArrowRight size={20} />
        </motion.button>
      </div>
    </motion.div>
  );
}







