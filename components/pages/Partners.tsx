import { motion } from 'motion/react';
import { Handshake, Building2, Users, Award } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';
import { GlowCard } from '../GlowCard';
import { CTABanner } from '../CTABanner';

interface PartnersProps {
  onNavigate: (page: string) => void;
}

export function Partners({ onNavigate }: PartnersProps) {
  const partnerCategories = [
    {
      icon: Building2,
      category: 'IT Domain Partners (OEMs)',
      description: 'Strategic partnerships with leading technology providers',
      partners: [
        'Cisco Systems',
        'Dell Technologies',
        'HPE (Hewlett Packard Enterprise)',
        'Lenovo',
        'Microsoft',
        'VMware',
        'Fortinet',
        'Palo Alto Networks',
        'Aruba Networks',
        'NetApp',
        'Veeam',
        'Commvault',
      ],
    },
    {
      icon: Users,
      category: 'Training Partner',
      description: 'Empowering workforce development',
      partners: ['Qtrainers'],
      highlighted: true,
    },
    {
      icon: Award,
      category: 'Energy Partner',
      description: 'Sustainable energy solutions',
      partners: ['Esmart Energy Solutions Pvt. Ltd.'],
      highlighted: true,
    },
  ];

  const clients = [
    { name: 'AT&T', industry: 'Telecommunications' },
    { name: 'Accenture', industry: 'Consulting' },
    { name: 'Microsoft', industry: 'Technology' },
    { name: 'Allianz', industry: 'Insurance' },
    { name: 'Johnson & Johnson', industry: 'Healthcare' },
    { name: 'Hindustan Unilever', industry: 'Consumer Goods' },
    { name: 'Nokia', industry: 'Telecommunications' },
    { name: 'IBM', industry: 'Technology' },
    { name: 'Oracle', industry: 'Technology' },
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
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Handshake size={60} className="text-[#00C4FF]" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-white">
              Our Partners
            </h1>
            <h2 className="text-3xl md:text-4xl mb-6 bg-gradient-to-r from-[#00C4FF] to-white bg-clip-text text-transparent">
              Collaborating for Smarter Enterprises
            </h2>
            <p className="text-xl md:text-2xl text-[#AAB4C3] max-w-3xl mx-auto">
              Building success through strategic alliances with industry leaders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Strategic Partnerships"
            subtitle="Collaborating with the best to deliver exceptional value"
            centered
          />

          <div className="space-y-16">
            {partnerCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-[#00C4FF]/10 flex items-center justify-center">
                    <category.icon size={28} className="text-[#00C4FF]" />
                  </div>
                  <div>
                    <h3 className="text-3xl text-white">{category.category}</h3>
                    <p className="text-[#AAB4C3]">{category.description}</p>
                  </div>
                </div>

                <div className={`grid gap-4 ${
                  category.highlighted
                    ? 'md:grid-cols-1 max-w-2xl'
                    : 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                }`}>
                  {category.partners.map((partner, index) => (
                    <GlowCard key={index} delay={index * 0.05}>
                      <div className={`${category.highlighted ? 'p-4 text-center' : ''}`}>
                        <h4 className={`text-white ${category.highlighted ? 'text-2xl' : 'text-lg'}`}>
                          {partner}
                        </h4>
                      </div>
                    </GlowCard>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#001a2e]">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Trusted by Fortune 500 Companies"
            subtitle="Delivering excellence to global industry leaders"
            centered
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00C4FF]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <div className="relative bg-gradient-to-br from-[#1a1a1a] to-black border border-[#00C4FF]/20 rounded-lg p-8 hover:border-[#00C4FF]/50 transition-all duration-300 text-center">
                  <h4 className="text-2xl text-white mb-2">{client.name}</h4>
                  <p className="text-[#AAB4C3] text-sm">{client.industry}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Why Partner With Us?"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: 'Expertise',
                description: 'Decades of combined industry experience and technical knowledge',
              },
              {
                title: 'Innovation',
                description: 'Cutting-edge solutions leveraging the latest technologies',
              },
              {
                title: 'Reliability',
                description: 'Proven track record of successful project delivery',
              },
              {
                title: 'Support',
                description: 'Dedicated partnership management and 24/7 technical support',
              },
            ].map((benefit, index) => (
              <GlowCard key={index} delay={index * 0.1}>
                <div className="text-center">
                  <h3 className="text-xl text-white mb-3">{benefit.title}</h3>
                  <p className="text-[#AAB4C3] text-sm">{benefit.description}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-gradient-to-b from-black to-[#001a2e]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 text-white">
                Interested in Partnering?
              </h2>
              <p className="text-xl text-[#AAB4C3] mb-8">
                We're always looking for like-minded organizations to create synergies and deliver exceptional value to our clients.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-12">
                {['Technology Partners', 'Resellers & Distributors', 'Service Providers'].map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-[#00C4FF]/10 border border-[#00C4FF]/20"
                  >
                    <span className="text-white">{type}</span>
                  </motion.div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-[#00C4FF] text-black rounded-lg transition-all hover:shadow-[0_0_30px_rgba(0,196,255,0.8)]"
              >
                Become a Partner
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container mx-auto px-4 lg:px-8">
        <CTABanner
          title="Let's Create Success Together"
          subtitle="Join our network of partners and clients building the future of enterprise technology"
          buttonText="Contact Us"
          onButtonClick={() => onNavigate('contact')}
        />
      </section>
    </div>
  );
}
