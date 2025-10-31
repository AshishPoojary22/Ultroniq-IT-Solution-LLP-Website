import { motion } from 'motion/react';
import { Shield, Network, Server, Video, Code, Lock, Wifi, Database, Cloud, Users } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';
import { GlowCard } from '../GlowCard';
import { CTABanner } from '../CTABanner';

interface SolutionsProps {
  onNavigate: (page: string) => void;
}

export function Solutions({ onNavigate }: SolutionsProps) {
  const securitySolutions = [
    'Application Security',
    'Network Security',
    'Data Security',
    'Endpoint Security',
    'Identity & Access Management',
    'Operational Security',
    'Cloud Security',
    'Physical Security',
  ];

  const networkingSolutions = {
    active: [
      'Switches & Routers',
      'Wireless Solutions',
      'Network Access Control',
      'VoIP Systems',
      'Load Balancers',
      'Firewall Solutions',
    ],
    passive: [
      'Structured Cabling',
      'Patch Panels',
      'Server Racks',
      'Fiber Optic Systems',
      'Cable Management',
      'Testing & Certification',
    ],
  };

  const serverInfrastructure = [
    'Rack & Blade Servers',
    'Microservers',
    'Server Clustering',
    'DAS/NAS/SAN Storage',
    'Backup Solutions',
    'Server Monitoring & Management',
  ];

  const avSolutions = [
    'Conference Room Solutions',
    'Digital Signage',
    'Hybrid Meeting Rooms',
    'Video Walls',
    'Audio Systems',
    'Control Systems',
  ];

  const softwareSolutions = [
    'IT Service Management (ITSM)',
    'Enterprise Resource Planning (ERP)',
    'Customer Relationship Management (CRM)',
    'Human Resource Management System (HRMS)',
    'Document Management System (DMS)',
    'Custom Application Development',
    'Microsoft 365 Solutions',
    'Collaboration Tools',
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
              Tech Synergy
            </h1>
            <h2 className="text-3xl md:text-4xl mb-6 bg-gradient-to-r from-[#00C4FF] to-white bg-clip-text text-transparent">
              Intelligent IT System Integration
            </h2>
            <p className="text-xl md:text-2xl text-[#AAB4C3] max-w-3xl mx-auto">
              Connecting people, processes, and technology seamlessly
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Solutions */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="sticky top-32">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#00C4FF]/10 flex items-center justify-center">
                    <Shield size={32} className="text-[#00C4FF]" />
                  </div>
                  <h2 className="text-4xl md:text-5xl text-white">Security Solutions</h2>
                </div>
                <div className="w-32 h-1 bg-[#00C4FF] mb-6" style={{ boxShadow: '0 0 20px rgba(0, 196, 255, 0.6)' }} />
                <p className="text-lg text-[#AAB4C3]">
                  Comprehensive security architecture protecting your enterprise from evolving cyber threats with multi-layered defense strategies.
                </p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {securitySolutions.map((solution, index) => (
                <GlowCard key={index} delay={index * 0.05}>
                  <div className="flex items-center space-x-3">
                    <Lock size={20} className="text-[#00C4FF] flex-shrink-0" />
                    <span className="text-white">{solution}</span>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="h-px gradient-line my-20" />
      </div>

      {/* Networking Solutions */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="grid sm:grid-cols-2 gap-4 lg:order-1">
              <div className="space-y-4">
                <h3 className="text-xl text-[#00C4FF] mb-4">Active Networking</h3>
                {networkingSolutions.active.map((solution, index) => (
                  <GlowCard key={index} delay={index * 0.05}>
                    <div className="flex items-center space-x-3">
                      <Wifi size={20} className="text-[#00C4FF] flex-shrink-0" />
                      <span className="text-white">{solution}</span>
                    </div>
                  </GlowCard>
                ))}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl text-[#00C4FF] mb-4">Passive Infrastructure</h3>
                {networkingSolutions.passive.map((solution, index) => (
                  <GlowCard key={index} delay={index * 0.05}>
                    <div className="flex items-center space-x-3">
                      <Network size={20} className="text-[#00C4FF] flex-shrink-0" />
                      <span className="text-white">{solution}</span>
                    </div>
                  </GlowCard>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-2"
            >
              <div className="sticky top-32">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#00C4FF]/10 flex items-center justify-center">
                    <Network size={32} className="text-[#00C4FF]" />
                  </div>
                  <h2 className="text-4xl md:text-5xl text-white">Networking Solutions</h2>
                </div>
                <div className="w-32 h-1 bg-[#00C4FF] mb-6" style={{ boxShadow: '0 0 20px rgba(0, 196, 255, 0.6)' }} />
                <p className="text-lg text-[#AAB4C3]">
                  Building robust, scalable network infrastructure combining active networking devices and passive structured cabling systems for seamless connectivity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="h-px gradient-line my-20" />
      </div>

      {/* Server Infrastructure */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="sticky top-32">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#00C4FF]/10 flex items-center justify-center">
                    <Server size={32} className="text-[#00C4FF]" />
                  </div>
                  <h2 className="text-4xl md:text-5xl text-white">Server Infrastructure</h2>
                </div>
                <div className="w-32 h-1 bg-[#00C4FF] mb-6" style={{ boxShadow: '0 0 20px rgba(0, 196, 255, 0.6)' }} />
                <p className="text-lg text-[#AAB4C3]">
                  High-performance server solutions with clustering, storage, and monitoring capabilities for mission-critical enterprise operations.
                </p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {serverInfrastructure.map((solution, index) => (
                <GlowCard key={index} delay={index * 0.05}>
                  <div className="flex items-center space-x-3">
                    <Database size={20} className="text-[#00C4FF] flex-shrink-0" />
                    <span className="text-white">{solution}</span>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="h-px gradient-line my-20" />
      </div>

      {/* Audio/Visual Solutions */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="grid sm:grid-cols-2 gap-4 lg:order-1">
              {avSolutions.map((solution, index) => (
                <GlowCard key={index} delay={index * 0.05}>
                  <div className="flex items-center space-x-3">
                    <Video size={20} className="text-[#00C4FF] flex-shrink-0" />
                    <span className="text-white">{solution}</span>
                  </div>
                </GlowCard>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-2"
            >
              <div className="sticky top-32">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#00C4FF]/10 flex items-center justify-center">
                    <Video size={32} className="text-[#00C4FF]" />
                  </div>
                  <h2 className="text-4xl md:text-5xl text-white">Audio/Visual Solutions</h2>
                </div>
                <div className="w-32 h-1 bg-[#00C4FF] mb-6" style={{ boxShadow: '0 0 20px rgba(0, 196, 255, 0.6)' }} />
                <p className="text-lg text-[#AAB4C3]">
                  Modern conferencing and presentation technologies enabling seamless collaboration in hybrid work environments.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="h-px gradient-line my-20" />
      </div>

      {/* Software Solutions */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="sticky top-32">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#00C4FF]/10 flex items-center justify-center">
                    <Code size={32} className="text-[#00C4FF]" />
                  </div>
                  <h2 className="text-4xl md:text-5xl text-white">Software Solutions</h2>
                </div>
                <div className="w-32 h-1 bg-[#00C4FF] mb-6" style={{ boxShadow: '0 0 20px rgba(0, 196, 255, 0.6)' }} />
                <p className="text-lg text-[#AAB4C3]">
                  Enterprise software platforms and custom applications streamlining business processes and enhancing productivity.
                </p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {softwareSolutions.map((solution, index) => (
                <GlowCard key={index} delay={index * 0.05}>
                  <div className="flex items-center space-x-3">
                    <Cloud size={20} className="text-[#00C4FF] flex-shrink-0" />
                    <span className="text-white">{solution}</span>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container mx-auto px-4 lg:px-8">
        <CTABanner
          title="Ready to Transform Your IT Infrastructure?"
          subtitle="Let's discuss how our solutions can drive your business forward"
          buttonText="Contact Us"
          onButtonClick={() => onNavigate('contact')}
        />
      </section>
    </div>
  );
}
