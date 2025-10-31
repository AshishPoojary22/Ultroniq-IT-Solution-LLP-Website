import { motion } from 'motion/react';
import { ArrowRight, Shield, Server, Cpu, Zap } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';
import { GlowCard } from '../GlowCard';
import { CTABanner } from '../CTABanner';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const expertiseAreas = [
    {
      icon: Server,
      title: 'IT System Integration',
      description: 'Seamlessly connecting people, processes, and technology for enterprise excellence.',
      delay: 0,
    },
    {
      icon: Shield,
      title: 'Managed IT Services',
      description: 'Comprehensive management of infrastructure, networks, and applications 24/7.',
      delay: 0.1,
    },
    {
      icon: Cpu,
      title: 'Automation & Software Development',
      description: 'Custom solutions and intelligent automation to drive digital transformation.',
      delay: 0.2,
    },
    {
      icon: Zap,
      title: 'Renewable Energy Solutions',
      description: 'Smart lighting and sustainable energy solutions for modern enterprises.',
      delay: 0.3,
    },
  ];

  const clients = [
    'AT&T', 'Accenture', 'Microsoft', 'Allianz', 'Johnson & Johnson',
    'Hindustan Unilever', 'Nokia', 'IBM', 'Oracle'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#001a2e] to-black opacity-90" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C4FF]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00C4FF]/20 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 text-white leading-tight">
              Empowering the Future of{' '}
              <span className="bg-gradient-to-r from-[#00C4FF] to-white bg-clip-text text-transparent">
                Technology and Business
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-[#AAB4C3] mb-12 max-w-4xl mx-auto"
          >
            Ultroniq IT Solution LLP transforms enterprises through IT System Integration, Managed IT Services, Automation, Software Development, and Renewable Energy Solutions — trusted by Fortune 500 companies since 2019.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('solutions')}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-[#00C4FF] text-black rounded-lg transition-all hover:shadow-[0_0_30px_rgba(0,196,255,0.8)]"
            >
              <span>Explore Solutions</span>
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-[#00C4FF] text-[#00C4FF] rounded-lg transition-all hover:bg-[#00C4FF]/10"
            >
              <span>Contact Us</span>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-[#00C4FF] rounded-full flex items-start justify-center p-2"
            >
              <motion.div className="w-1 h-2 bg-[#00C4FF] rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 text-white">
                Building Intelligent Enterprises Since 2019
              </h2>
              <div className="w-24 h-1 bg-[#00C4FF] mb-6" style={{ boxShadow: '0 0 20px rgba(0, 196, 255, 0.6)' }} />
              <p className="text-lg text-[#AAB4C3] mb-6">
                Founded in 2019 and headquartered in India, Ultroniq IT Solution LLP is a multi-domain technology company offering comprehensive IT solutions across system integration, managed services, automation, software development, and renewable energy.
              </p>
              <p className="text-lg text-[#AAB4C3] mb-6">
                Led by Managing Partners Animesh Ashish (Sales) and Ashish Poojary (Technical & Operations), we've built a reputation for excellence serving global enterprises across diverse industries.
              </p>
              <div className="flex items-center space-x-8 mt-8">
                <div>
                  <div className="text-4xl text-[#00C4FF]">500+</div>
                  <div className="text-[#AAB4C3]">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl text-[#00C4FF]">100+</div>
                  <div className="text-[#AAB4C3]">Global Clients</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-[#00C4FF]/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjE4NTM5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Ultroniq Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-[#00C4FF]/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Highlights */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Our Expertise"
            subtitle="Comprehensive technology solutions designed to transform your business"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <GlowCard key={index} delay={area.delay}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#00C4FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00C4FF]/20 transition-colors">
                    <area.icon size={32} className="text-[#00C4FF]" />
                  </div>
                  <h3 className="text-xl text-white mb-3">{area.title}</h3>
                  <p className="text-[#AAB4C3]">{area.description}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#001a2e]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-white">Trusted by Industry Leaders</h2>
            <p className="text-[#AAB4C3]">Serving Fortune 500 companies worldwide</p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-[#AAB4C3] hover:text-[#00C4FF] transition-colors text-lg md:text-xl"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container mx-auto px-4 lg:px-8">
        <CTABanner
          title="Let's build your intelligent enterprise"
          subtitle="Transform your business with cutting-edge technology solutions"
          buttonText="Contact Us"
          onButtonClick={() => onNavigate('contact')}
        />
      </section>
    </div>
  );
}
