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

export function VideoBio() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (nextLocale) => {
    router.replace(pathname, {locale: nextLocale});
  };

  return (
    <>
      {/* 2. About IBC Video Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#002C5A] mb-4">Markaz haqida qisqacha bio</h2>
                <div className="w-20 h-1 bg-[#D4AF37] mb-6"></div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Xalqaro Biznes Markazi" ochiq aksiyadorlik jamiyati poytaxtimizning qon tomirida joylashgan zamonaviy inshootdir. Biz nafaqat ofis joylarini talab darajasida ijaraga beramiz, balki eng talabchan xalqaro kompaniyalar uchun to'liq ish infratuzilmasini ta'minlaymiz.
                </p>
                <div className="flex items-center gap-4 mb-8 text-[#002C5A] font-medium">
                  <div className="flex items-center gap-2"><MapPin className="text-[#D4AF37] h-5 w-5"/> Toshkent markazi</div>
                  <div className="flex items-center gap-2"><Shield className="text-[#D4AF37] h-5 w-5"/> 24/7 Xavfsizlik</div>
                </div>
                <Button variant="outline" className="border-[#002C5A] text-[#002C5A] hover:bg-[#002C5A] hover:text-white rounded-none">
                  Tariximiz bilan tanishish
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
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
