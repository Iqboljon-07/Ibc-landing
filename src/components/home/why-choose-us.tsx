"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export function WhyChooseUs() {
  const t = useTranslations('WhyChooseUsSection');

  const features = [
    {
      titleKey: 'businessHome.title',
      descKey: 'businessHome.desc',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      altKey: 'businessHome.alt',
      delay: 0.1
    },
    {
      titleKey: 'security.title',
      descKey: 'security.desc',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
      altKey: 'security.alt',
      delay: 0.2
    },
    {
      titleKey: 'conference.title',
      descKey: 'conference.desc',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
      altKey: 'conference.alt',
      delay: 0.3
    },
    {
      titleKey: 'parking.title',
      descKey: 'parking.desc',
      image: '/images/parking.jpg',
      altKey: 'parking.alt',
      delay: 0.4
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#002C5A] mb-4">
            {t('title')}
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: feature.delay }} 
              className="group relative rounded-2xl overflow-hidden shadow-lg h-[350px]"
            >
              {/* Image with zoom effect */}
              <div className="absolute inset-0 w-full h-[125%] -top-[12%] overflow-hidden bg-gray-200 flex items-center justify-center">
                <img 
                  src={feature.image} 
                  alt={t(feature.altKey)} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C5A]/90 via-[#002C5A]/40 to-transparent"></div>
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-200">
                  {t(feature.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}