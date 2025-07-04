import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = {
    email: 'kailash.rajh@gmail.com',
    phone: '071-605-3159',
    location: 'South Africa'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (    <section id="contact" className="py-20 bg-kanagawa-bgDark text-kanagawa-fg">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-kanagawa-fg"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              variants={itemVariants}
            >
              <p className="text-xl text-kanagawa-yellow mb-6">
                I'm always interested in discussing new opportunities, innovative projects, 
                and potential collaborations. Let's connect!
              </p>
              <p className="text-kanagawa-fgDark">
                Whether you're looking for a dedicated developer, need assistance with testing automation, 
                or want to explore how I can contribute to your team, I'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div 
                className="text-center p-6 bg-kanagawa-bg rounded-lg hover:bg-kanagawa-bgLight transition-colors border border-kanagawa-wave"
                variants={itemVariants}
              >
                <div className="w-12 h-12 bg-kanagawa-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-kanagawa-fg" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-kanagawa-orange hover:text-kanagawa-yellow transition-colors"
                >
                  {contactInfo.email}
                </a>
              </motion.div>

              <motion.div 
                className="text-center p-6 bg-kanagawa-bg rounded-lg hover:bg-kanagawa-bgLight transition-colors border border-kanagawa-wave"
                variants={itemVariants}
              >
                <div className="w-12 h-12 bg-kanagawa-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-kanagawa-fg" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-kanagawa-orange hover:text-kanagawa-yellow transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </motion.div>

              <motion.div 
                className="text-center p-6 bg-kanagawa-bg rounded-lg hover:bg-kanagawa-bgLight transition-colors border border-kanagawa-wave"
                variants={itemVariants}
              >
                <div className="w-12 h-12 bg-kanagawa-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-kanagawa-fg" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <span className="text-kanagawa-fgDark">{contactInfo.location}</span>
              </motion.div>
            </div>

            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <div className="flex justify-center space-x-6">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="bg-kanagawa-blue hover:bg-kanagawa-purple text-kanagawa-fg px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
                <a
                  href="https://linkedin.com/in/kailashrajh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-kanagawa-bgLight hover:bg-kanagawa-bg text-kanagawa-fg px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2 border border-kanagawa-wave"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-kanagawa-wave text-center">
        <p className="text-kanagawa-fgDark">
          © 2025 Kailash Rajh. Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default Contact;
