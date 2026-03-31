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

export function ServicesSection() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (nextLocale) => {
    router.replace(pathname, {locale: nextLocale});
  };

  return (
    <>
      {/* 4. Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#002C5A] mb-4"
          >
            Siz uchun nimalar taqdim etamiz
          </motion.h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Ofis maydonlari ijarasi', icon: Building, desc: 'Barcha qulayliklarga ega zamonaviy va yorug‘ ofislar.' },
              { title: 'Konferens zallar', icon: Users, desc: 'Tadbirlaringiz uchun to\'liq jihozlangan muhtasham zallar.' },
              { title: 'Virtual ofis xizmatlari', icon: Briefcase, desc: 'Sizning biznesingiz rasmiyligi uchun manzil taqdim etish.' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="hover:shadow-2xl transition-all duration-300 border-none rounded-xl overflow-hidden group">
                  <div className="h-2 bg-transparent group-hover:bg-[#D4AF37] transition-colors" />
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto w-16 h-16 bg-[#002C5A]/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#002C5A]/10 transition-colors">
                      <service.icon className="w-8 h-8 text-[#002C5A]" />
                    </div>
                    <CardTitle className="text-xl text-[#002C5A]">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-gray-500 pb-8">
                    {service.desc}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
