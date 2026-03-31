"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export function StatsRibbon() {
  const t = useTranslations('StatsSection');

  const stats = [
    { numberKey: 'experience.number', labelKey: 'experience.label' },
    { numberKey: 'tenants.number', labelKey: 'tenants.label' },
    { numberKey: 'space.number', labelKey: 'space.label' },
    { numberKey: 'support.number', labelKey: 'support.label' },
  ];

  return (
    <section className="py-16 bg-[#002C5A] text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center"
            >
              <span className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">
                {t(stat.numberKey)}
              </span>
              <span className="text-sm md:text-base font-light text-gray-300 uppercase tracking-wider">
                {t(stat.labelKey)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}