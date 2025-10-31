import { motion } from 'motion/react';
import { Server, Cloud, Shield, Settings, Wrench, Headphones, Lock, GraduationCap } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';
import { GlowCard } from '../GlowCard';
import { CTABanner } from '../CTABanner';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Server,
      title: 'Infrastructure & Network Management',
      description: 'Proactive monitoring, maintenance, and optimization of your entire IT infrastructure ensuring 99.9% uptime.',
      features: [
        '24/7 Infrastructure Monitoring',
        'Network Performance Optimization',
        'Capacity Planning',
        'Disaster Recovery',
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud Management & DevOps',
      description: 'Streamlined cloud operations with automated deployment pipelines and continuous integration/delivery.',
      features: [
        'Multi-Cloud Management',
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Container Orchestration',
      ],
    },
    {
      icon: Shield,
      title: 'Cybersecurity & SOC',
      description: 'Advanced threat detection and response with 24/7 Security Operations Center monitoring.',
      features: [
        'Security Information & Event Management',
        'Threat Intelligence',
        'Incident Response',
        'Vulnerability Management',
      ],
    },
    {
      icon: Settings,
      title: 'ITSM / ITAM / ITOM',
      description: 'Comprehensive IT service, asset, and operations management following ITIL best practices.',
      features: [
        'Service Desk Management',
        'Asset Lifecycle Management',
        'Change Management',
        'Performance Analytics',
      ],
    },
    {
      icon: Wrench,
      title: 'Field Engineering (L1–L3)',
      description: 'On-site technical support with skilled engineers providing L1, L2, and L3 level services.',
      features: [
        'Hardware Installation & Maintenance',
        'On-Site Troubleshooting',
        'Break-Fix Services',
        'Equipment Upgrades',
      ],
    },
    {
      icon: Headphones,
      title: 'End-User Helpdesk',
      description: 'Responsive IT support for end-users ensuring minimal downtime and maximum productivity.',
      features: [
        '24/7 Multi-Channel Support',
        'Remote Desktop Assistance',
        'Password Reset & Account Management',
        'Software Installation Support',
      ],
    },
    {
      icon: Lock,
      title: 'API & Application Security',
      description: 'Secure your applications and APIs with comprehensive security testing and monitoring.',
      features: [
        'API Security Assessment',
        'Application Penetration Testing',
        'Secure Code Review',
        'Runtime Application Protection',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Training Operations Management',
      description: 'End-to-end management of corporate training programs with our Qtrainers platform.',
      features: [
        'Training Logistics Management',
        'Instructor Coordination',
        'Participant Management',
        'Feedback & Analytics',
      ],
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
              Managed IT Services
            </h1>
            <h2 className="text-3xl md:text-4xl mb-6 bg-gradient-to-r from-[#00C4FF] to-white bg-clip-text text-transparent">
              Managing IT So You Can Manage Growth
            </h2>
            <p className="text-xl md:text-2xl text-[#AAB4C3] max-w-3xl mx-auto">
              Comprehensive management of infrastructure, networks, and applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Our Service Portfolio"
            subtitle="Full-spectrum IT management services designed to keep your business running smoothly"
            centered
          />

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <GlowCard key={index} delay={index * 0.1}>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#00C4FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00C4FF]/20 transition-colors">
                    <service.icon size={28} className="text-[#00C4FF]" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white mb-2">{service.title}</h3>
                  </div>
                </div>
                <p className="text-[#AAB4C3] mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00C4FF]" />
                      <span className="text-sm text-[#AAB4C3]">{feature}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#001a2e]">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Why Choose Our Managed Services?"
            centered
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#00C4FF]/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-[#00C4FF]">24/7</span>
              </div>
              <h3 className="text-2xl text-white mb-4">Round-the-Clock Support</h3>
              <p className="text-[#AAB4C3]">
                Our team monitors and manages your IT infrastructure 24 hours a day, 7 days a week, ensuring continuous operations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#00C4FF]/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-[#00C4FF]">99.9%</span>
              </div>
              <h3 className="text-2xl text-white mb-4">Guaranteed Uptime</h3>
              <p className="text-[#AAB4C3]">
                We maintain industry-leading uptime through proactive monitoring, rapid response, and preventive maintenance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#00C4FF]/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-[#00C4FF]">50+</span>
              </div>
              <h3 className="text-2xl text-white mb-4">Expert Technicians</h3>
              <p className="text-[#AAB4C3]">
                Our certified team brings decades of combined experience managing complex IT environments for global enterprises.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Levels */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Flexible Service Levels"
            subtitle="Choose the support tier that matches your business needs"
            centered
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {['Essential', 'Professional', 'Enterprise'].map((tier, index) => (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 border ${
                  index === 1
                    ? 'border-[#00C4FF] bg-gradient-to-br from-[#001a2e] to-black'
                    : 'border-[#00C4FF]/20 bg-black'
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-[#00C4FF] text-black rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl text-white mb-2">{tier}</h3>
                <p className="text-[#AAB4C3] mb-6">
                  {index === 0 && 'Core support for growing businesses'}
                  {index === 1 && 'Comprehensive coverage for established enterprises'}
                  {index === 2 && 'Premium 24/7 dedicated support'}
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C4FF]" />
                    <span className="text-sm text-[#AAB4C3]">
                      {index === 0 && 'Business Hours Support'}
                      {index === 1 && 'Extended Hours Support'}
                      {index === 2 && '24/7/365 Support'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C4FF]" />
                    <span className="text-sm text-[#AAB4C3]">
                      {index === 0 && '4-hour Response Time'}
                      {index === 1 && '1-hour Response Time'}
                      {index === 2 && '15-minute Response Time'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C4FF]" />
                    <span className="text-sm text-[#AAB4C3]">
                      {index === 0 && 'Remote Support'}
                      {index === 1 && 'Remote + On-site Support'}
                      {index === 2 && 'Dedicated Account Manager'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-3 rounded-lg transition-all ${
                    index === 1
                      ? 'bg-[#00C4FF] text-black hover:shadow-[0_0_20px_rgba(0,196,255,0.6)]'
                      : 'bg-transparent border border-[#00C4FF] text-[#00C4FF] hover:bg-[#00C4FF]/10'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container mx-auto px-4 lg:px-8">
        <CTABanner
          title="Focus on innovation — we'll manage your IT"
          subtitle="Let our experts handle your technology so you can focus on growing your business"
          buttonText="Contact Us"
          onButtonClick={() => onNavigate('contact')}
        />
      </section>
    </div>
  );
}
