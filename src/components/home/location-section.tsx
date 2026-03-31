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

export function LocationSection() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (nextLocale) => {
    router.replace(pathname, {locale: nextLocale});
  };

  return (
    <>
      {/* 6. Joylashuv va Xarita (Location & Maps) */}
      <section className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Map */}
          <div className="h-[500px] lg:h-auto w-full relative grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.6669041267433!2d69.2818957759847!3d41.33946269904259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5341208949%3A0xe1db0bc5bb2faad2!2sInternational%20Business%20Centre!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen={false} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          {/* Contact Details */}
          <div className="p-12 lg:p-24 flex flex-col justify-center bg-[#002C5A] text-white">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-8 text-[#D4AF37]">
              Aloqa Uchun
            </h2>
            <p className="text-gray-300 text-lg mb-12">
              Markazimiz Toshkent shahrining eng nufuzli biznes hududida joylashgan bo'lib, barcha transport turlari uchun qulay kirish yo'llari va bekatlariga ega.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-white/5 rounded-full text-[#D4AF37] border border-white/10">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2 uppercase tracking-wide">Manzilimiz</h4>
                  <p className="text-gray-400">100084, Toshkent shahri,<br/>Amir Temur shoh ko'chasi, 107-B uy</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="p-4 bg-white/5 rounded-full text-[#D4AF37] border border-white/10">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2 uppercase tracking-wide">Ish vaqti va Kontakt</h4>
                  <p className="text-gray-400">Dush - Jum: 09:00 - 18:00<br/>Telefon: +998 71 238-59-59</p>
                </div>
              </div>
            </div>
            
            <div className="mt-14">
               <Button className="bg-[#D4AF37] hover:bg-white text-[#002C5A] hover:text-[#002C5A] font-bold px-10 py-7 uppercase tracking-wider text-sm rounded flex items-center gap-3 transition-colors shadow-lg">
                  <Send className="w-5 h-5" />
                  Bizga xabar yo'llang
               </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
