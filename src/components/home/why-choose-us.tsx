"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, MessageSquare, PlayCircle, Building, Users, Briefcase, Shield, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'


const LANGUAGES = [
  { code: 'ru', name: 'Русский' },
  { code: 'uz', name: 'O`zbek' },
  { code: 'en', name: 'English' }
];

export function WhyChooseUs() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (nextLocale) => {
    router.replace(pathname, {locale: nextLocale});
  };

  return (
    <>
      {/* 3. Why Choose Us (Instagram Highlights) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#002C5A] mb-4">Nima uchun IBC ni tanlashadi?</h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Sizning biznesingiz barqarorligi va osoyishtaligi uchun eng yuqori darajadagi sharoitlar yaratilgan. 
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Biznes Maskan */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="group relative rounded-2xl overflow-hidden shadow-lg h-[350px]">
              {/* Rasmning chetlaridagi UI chiqib qolmasligi uchun zoom qilingan (h-125% -top-10%) */}
              <div className="absolute inset-0 w-full h-[125%] -top-[12%] overflow-hidden bg-gray-200 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="IBC Maskan" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C5A]/90 via-[#002C5A]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Muvaffaqiyatingiz maskani</h3>
                <p className="text-gray-200">Biznesingiz uchun eng nufuzli va ko'rkam bino.</p>
              </div>
            </motion.div>

            {/* Xavfsizlik */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="group relative rounded-2xl overflow-hidden shadow-lg h-[350px]">
              <div className="absolute inset-0 w-full h-[125%] -top-[12%] overflow-hidden bg-gray-200 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80" alt="Xavfsizlik tizimi" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C5A]/90 via-[#002C5A]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Tizimli xavfsizlik</h3>
                <p className="text-gray-200">Kirish nazorati, ichki patrul va O'zbekiston Milliy gvardiyasi tomonidan 24/7 himoya.</p>
              </div>
            </motion.div>

            {/* Konferens */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="group relative rounded-2xl overflow-hidden shadow-lg h-[350px]">
              <div className="absolute inset-0 w-full h-[125%] -top-[12%] overflow-hidden bg-gray-200 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80" alt="Konferens zal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C5A]/90 via-[#002C5A]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Keng Konferens zallar</h3>
                <p className="text-gray-200">Muzokaralar, uchrashuvlar va tadbirlaringiz uchun to'liq jihozlangan premium hudud.</p>
              </div>
            </motion.div>

            {/* Parking */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="group relative rounded-2xl overflow-hidden shadow-lg h-[350px]">
              <div className="absolute inset-0 w-full h-[125%] -top-[12%] overflow-hidden bg-gray-200 flex items-center justify-center">
                <img src="/images/parking.jpg" alt="Parking" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C5A]/90 via-[#002C5A]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Yer osti to'xtash joyi</h3>
                <p className="text-gray-200">Siz va mijozlaringiz avtomobillari uchun keng, xavfsiz va qulay parking zonasi.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
