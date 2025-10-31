import { motion } from 'motion/react';
import { Cpu, Package, GraduationCap, Lightbulb, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';
import { GlowCard } from '../GlowCard';
import { CTABanner } from '../CTABanner';

interface ProductsProps {
  onNavigate: (page: string) => void;
}

export function Products({ onNavigate }: ProductsProps) {
  const products = [
    {
      icon: Cpu,
      title: 'IoT Automation Suite',
      tagline: 'Smart Solutions for Connected Enterprises',
      description: 'A unified platform integrating sensors, analytics, and automation to transform physical spaces into intelligent environments.',
      features: [
        'Real-time sensor data monitoring',
        'Predictive analytics & insights',
        'Automated workflow triggers',
        'Cross-platform integration',
        'Scalable architecture',
      ],
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Package,
      title: 'IBMP',
      tagline: 'Ditch ERP. Switch to IBMP.',
      description: 'Integrated Business Management Platform - A comprehensive solution that goes beyond traditional ERP, unifying all business operations in one intelligent ecosystem.',
      features: [
        'Unified business operations',
        'Advanced workflow automation',
        'Real-time business intelligence',
        'Customizable modules',
        'Cloud-native architecture',
      ],
      color: 'from-purple-500/20 to-pink-500/20',
      featured: true,
    },
    {
      icon: GraduationCap,
      title: 'Qtrainers',
      tagline: 'One-Stop Training Operations Platform',
      description: 'Streamline your corporate training programs with end-to-end management of logistics, instructors, participants, and performance analytics.',
      features: [
        'Training calendar management',
        'Instructor & venue coordination',
        'Participant enrollment & tracking',
        'Automated notifications',
        'Comprehensive analytics dashboard',
      ],
      color: 'from-green-500/20 to-teal-500/20',
    },
    {
      icon: Lightbulb,
      title: 'Smart Street Lighting',
      tagline: 'Renewable Energy with Zero Procurement Cost',
      description: 'IoT-powered smart street lighting solution leveraging renewable energy, reducing costs while enhancing urban infrastructure.',
      features: [
        'Solar-powered LED systems',
        'IoT-based monitoring & control',
        'Adaptive brightness control',
        'Energy consumption analytics',
        'Zero upfront investment model',
      ],
      color: 'from-yellow-500/20 to-orange-500/20',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001a2e] via-black to-black" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00C4FF]/20 rounded-full blur-3xl"
        />

        <div className="relative container mx-auto px-4 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-white">
              Our Products
            </h1>
            <h2 className="text-3xl md:text-4xl mb-6 bg-gradient-to-r from-[#00C4FF] to-white bg-clip-text text-transparent">
              Innovating Tomorrow's Enterprise Ecosystem
            </h2>
            <p className="text-xl md:text-2xl text-[#AAB4C3] max-w-3xl mx-auto">
              Proprietary solutions designed to transform how businesses operate
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${product.color} flex items-center justify-center backdrop-blur-sm border border-[#00C4FF]/30`}>
                        <product.icon size={32} className="text-[#00C4FF]" />
                      </div>
                      {product.featured && (
                        <div className="px-4 py-1 bg-[#00C4FF] text-black rounded-full text-sm">
                          Featured
                        </div>
                      )}
                    </div>

                    <h2 className="text-4xl md:text-5xl mb-3 text-white">
                      {product.title}
                    </h2>
                    <p className="text-xl text-[#00C4FF] mb-6">{product.tagline}</p>
                    <div className="w-32 h-1 bg-[#00C4FF] mb-6" style={{ boxShadow: '0 0 20px rgba(0, 196, 255, 0.6)' }} />
                    <p className="text-lg text-[#AAB4C3] mb-8">
                      {product.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-[#00C4FF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-[#00C4FF]" />
                          </div>
                          <span className="text-[#AAB4C3]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onNavigate('contact')}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-transparent border-2 border-[#00C4FF] text-[#00C4FF] rounded-lg transition-all hover:bg-[#00C4FF]/10"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={18} />
                    </motion.button>
                  </div>

                  {/* Visual Card */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="relative rounded-2xl overflow-hidden border border-[#00C4FF]/20 bg-gradient-to-br from-[#1a1a1a] to-black p-12"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-50 blur-2xl`} />
                      <div className="relative z-10 flex items-center justify-center h-64">
                        <product.icon size={120} className="text-[#00C4FF]/30" />
                      </div>
                      <div className="absolute top-0 left-0 right-0 h-px gradient-line" />
                      <div className="absolute bottom-0 left-0 right-0 h-px gradient-line" />
                    </motion.div>
                  </div>
                </div>

                {/* Divider (except last item) */}
                {index < products.length - 1 && (
                  <div className="mt-20 h-px gradient-line" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-[#001a2e]">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Why Choose Our Products?"
            centered
          />

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: 'Cloud-Native',
                description: 'Built for scale with modern cloud architecture',
              },
              {
                title: 'Customizable',
                description: 'Flexible solutions tailored to your needs',
              },
              {
                title: 'Secure',
                description: 'Enterprise-grade security built-in',
              },
              {
                title: 'Support',
                description: '24/7 dedicated technical support',
              },
            ].map((item, index) => (
              <GlowCard key={index} delay={index * 0.1}>
                <div className="text-center">
                  <h3 className="text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-[#AAB4C3] text-sm">{item.description}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container mx-auto px-4 lg:px-8">
        <CTABanner
          title="Ready to Transform Your Business?"
          subtitle="Discover how our innovative products can accelerate your digital transformation"
          buttonText="Request a Demo"
          onButtonClick={() => onNavigate('contact')}
        />
      </section>
    </div>
  );
}
