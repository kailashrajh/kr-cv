import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  description: string;
  skills: string[];
  logo?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: "ISTQB Certified Tester Foundation Level",
    issuer: "International Software Testing Qualifications Board",
    issueDate: "2023",
    credentialId: "ISTQB-CTFL",
    description: "Comprehensive understanding of software testing fundamentals, test design techniques, test management, and tool support for testing.",
    skills: ["Software Testing", "Test Design", "Test Management", "Quality Assurance", "Test Planning"],
  },
  {
    id: 2,
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    issueDate: "2023",
    credentialId: "AZ-900",
    verificationUrl: "https://learn.microsoft.com/en-us/credentials/",
    description: "Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
    skills: ["Microsoft Azure", "Cloud Computing", "Azure Services", "Cloud Architecture"],
  },
  {
    id: 3,
    name: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    issueDate: "2023",
    expiryDate: "2025",
    credentialId: "AZ-104",
    verificationUrl: "https://learn.microsoft.com/en-us/credentials/",
    description: "Skills to implement, manage, and monitor an organization's Microsoft Azure environment.",
    skills: ["Azure Administration", "Virtual Machines", "Storage", "Networking", "Identity Management"],
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-kanagawa-bgLight">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle mt-4 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in software testing, quality assurance, and cloud technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-kanagawa-bg rounded-lg p-6 border border-kanagawa-wave hover:border-kanagawa-orange transition-all duration-300 group hover:shadow-lg"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-kanagawa-orange/10 rounded-lg group-hover:bg-kanagawa-orange/20 transition-colors">
                    <Award className="w-6 h-6 text-kanagawa-orange" />
                  </div>
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-kanagawa-fgDark hover:text-kanagawa-orange transition-colors"
                      title="Verify Certification"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <CheckCircle className="w-5 h-5 text-kanagawa-green" />
              </div>

              {/* Certification Details */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-kanagawa-fg mb-2 group-hover:text-kanagawa-orange transition-colors">
                  {cert.name}
                </h3>
                <p className="text-kanagawa-yellow font-medium mb-2">{cert.issuer}</p>
                
                <div className="flex items-center space-x-4 text-sm text-kanagawa-fgDark mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                  {cert.expiryDate && (
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Expires: {cert.expiryDate}</span>
                    </div>
                  )}
                </div>

                {cert.credentialId && (
                  <p className="text-xs text-kanagawa-fgDark mb-3 font-mono bg-kanagawa-bgLight px-2 py-1 rounded">
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-kanagawa-fgDark text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-kanagawa-fg">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-kanagawa-wave text-kanagawa-fg text-xs rounded-full hover:bg-kanagawa-orange hover:text-kanagawa-bg transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-kanagawa-fgDark mb-6">
            Continuously expanding my knowledge and staying current with industry standards.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-kanagawa-orange text-kanagawa-bg px-6 py-3 rounded-lg font-medium hover:bg-kanagawa-yellow transition-colors shadow-lg"
            onClick={() => window.open('https://www.linkedin.com/in/kailashrajh/', '_blank')}
          >
            View More on LinkedIn
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
