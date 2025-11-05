import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Clock, Send, Phone, Linkedin, Instagram } from 'lucide-react';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export function Contact({ onNavigate: _onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.enquiryType || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Simulate form submission
    toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      enquiryType: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'support@ultroniqitsol.com',
      link: 'mailto:support@ultroniqitsol.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 9082537935 / +91 9930340319',
      link: 'tel:+919082537935',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'India',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: '24/7 - We\'re always here for you',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
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
              Get In Touch
            </h1>
            <h2 className="text-3xl md:text-4xl mb-6 bg-gradient-to-r from-[#00C4FF] to-white bg-clip-text text-transparent">
              Let's Build Something Extraordinary Together
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#00C4FF]/20 rounded-2xl p-8">
                <h3 className="text-3xl text-white mb-2">Send Us a Message</h3>
                <p className="text-[#AAB4C3] mb-8">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Name <span className="text-[#00C4FF]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-[#00C4FF]/20 rounded-lg text-white placeholder-[#AAB4C3] focus:outline-none focus:border-[#00C4FF] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-[#00C4FF]/20 rounded-lg text-white placeholder-[#AAB4C3] focus:outline-none focus:border-[#00C4FF] transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email <span className="text-[#00C4FF]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-[#00C4FF]/20 rounded-lg text-white placeholder-[#AAB4C3] focus:outline-none focus:border-[#00C4FF] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-[#00C4FF]/20 rounded-lg text-white placeholder-[#AAB4C3] focus:outline-none focus:border-[#00C4FF] transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiryType" className="block text-white mb-2">
                      Enquiry Type <span className="text-[#00C4FF]">*</span>
                    </label>
                    <Select
                      value={formData.enquiryType}
                      onValueChange={(value: string) =>
                        setFormData({ ...formData, enquiryType: value })
                      }
                    >
                      <SelectTrigger className="w-full px-4 py-3 bg-black/50 border border-[#00C4FF]/20 rounded-lg text-white focus:outline-none focus:border-[#00C4FF] transition-colors h-auto">
                        <SelectValue placeholder="Select enquiry type" />
                      </SelectTrigger>
                      <SelectContent className="bg-black border border-[#00C4FF]/30">
                        <SelectItem value="new-service" className="text-white hover:bg-[#00C4FF]/10 focus:bg-[#00C4FF]/10">
                          New Service Requirement
                        </SelectItem>
                        <SelectItem value="products" className="text-white hover:bg-[#00C4FF]/10 focus:bg-[#00C4FF]/10">
                          Products Enquiry
                        </SelectItem>
                        <SelectItem value="solutions" className="text-white hover:bg-[#00C4FF]/10 focus:bg-[#00C4FF]/10">
                          Solutions Enquiry
                        </SelectItem>
                        <SelectItem value="partner" className="text-white hover:bg-[#00C4FF]/10 focus:bg-[#00C4FF]/10">
                          Partner With Us
                        </SelectItem>
                        <SelectItem value="service-issues" className="text-white hover:bg-[#00C4FF]/10 focus:bg-[#00C4FF]/10">
                          Service Issues
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white mb-2">
                      Message <span className="text-[#00C4FF]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-black/50 border border-[#00C4FF]/20 rounded-lg text-white placeholder-[#AAB4C3] focus:outline-none focus:border-[#00C4FF] transition-colors resize-none"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-[#00C4FF] text-black rounded-lg transition-all hover:shadow-[0_0_30px_rgba(0,196,255,0.8)]"
                  >
                    <span>Send Message</span>
                    <Send size={18} />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-br from-[#1a1a1a] to-black border border-[#00C4FF]/20 hover:border-[#00C4FF]/50 transition-all"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#00C4FF]/10 flex items-center justify-center flex-shrink-0">
                        <info.icon size={24} className="text-[#00C4FF]" />
                      </div>
                      <div>
                        <h4 className="text-white mb-1">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-[#AAB4C3] hover:text-[#00C4FF] transition-colors break-all"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-[#AAB4C3]">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-white mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="https://www.linkedin.com/in/ultroniq-it-solution-llp-66868138b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#00C4FF]/10 flex items-center justify-center text-[#00C4FF] hover:bg-[#00C4FF]/20 transition-all border border-[#00C4FF]/20"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="https://www.instagram.com/ultroniq_uis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#00C4FF]/10 flex items-center justify-center text-[#00C4FF] hover:bg-[#00C4FF]/20 transition-all border border-[#00C4FF]/20"
                  >
                    <Instagram size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-[#00C4FF]/20 h-64 bg-gradient-to-br from-[#1a1a1a] to-black flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-[#00C4FF] mx-auto mb-4" />
                  <p className="text-[#AAB4C3]">Headquarters: India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-gradient-to-b from-black to-[#001a2e]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl text-white mb-4">
              Drop us a message — we'll get back within 24 hours
            </h3>
            <p className="text-[#AAB4C3] text-lg">
              Our team is ready to help you transform your business with innovative technology solutions
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
