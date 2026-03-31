"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export function VideoBio() {
  const t = useTranslations('VideoBioSection');

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#002C5A] mb-4">
                {t('title')}
              </h2>
              <div className="w-20 h-1 bg-[#D4AF37] mb-6"></div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('description')}
              </p>
              <div className="flex items-center gap-4 mb-8 text-[#002C5A] font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="text-[#D4AF37] h-5 w-5"/> 
                  {t('features.location')}
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="text-[#D4AF37] h-5 w-5"/> 
                  {t('features.security')}
                </div>
              </div>
              <Button 
                variant="outline" 
                className="border-[#002C5A] text-[#002C5A] hover:bg-[#002C5A] hover:text-white rounded-none"
                onClick={() => {
                  // History sahifasiga o'tkazish yoki modal ochish
                  window.location.href = '#history';
                }}
              >
                {t('ctaButton')}
              </Button>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] bg-black"
            >
              <iframe 
                src="https://drive.google.com/file/d/1l_EsPf6nXou2epgWY0VmjQ-Cuk9_bFG9/preview" 
                className="w-full h-full border-0 absolute inset-0"
                allow="autoplay"
                allowFullScreen
                title={t('videoTitle')}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}