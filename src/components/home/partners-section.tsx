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

export function PartnersSection() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (nextLocale) => {
    router.replace(pathname, {locale: nextLocale});
  };

  return (
    <>
      {/* 5. Bizning hamkorlar (Partners / Tenants) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002C5A] uppercase tracking-wide mb-6">
              BIZNI TANLAGANLAR
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-gray-500 text-lg">
              O'zbekistonning va xalqaro bozorning eng yetakchi kompaniyalari o'z bizneslarini Xalqaro Hamkorlik Markazi (IBC) binosida yuritadilar.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {/* Using text logotypes for placeholders */}
            {[
              "LUKOIL", "SAMSUNG", "HUAWEI", "KPMG", "PwC", "HONOR"
            ].map((brand, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="w-full flex justify-center py-8 px-4 bg-gray-50 rounded-lg hover:bg-[#002C5A] hover:text-[#D4AF37] text-[#002C5A]/40 group transition-all text-xl md:text-2xl font-black tracking-widest cursor-pointer shadow-sm hover:shadow-xl"
              >
                <span className="group-hover:scale-110 transition-transform duration-300">{brand}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
