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

export function HeroSection() {
  const t = useTranslations('Index');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (nextLocale:any) => {
    router.replace(pathname, {locale: nextLocale});
  };

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        
        {/* You can replace this img with a <video autoPlay loop muted> tag for a video background! */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#002C5A]/80 via-[#002C5A]/40 to-[#002C5A]/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
            alt="IBC Office" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="container relative z-20 px-4 md:px-8 mx-auto flex flex-col items-center justify-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-wider"
          >
            {t('title').split(' ').map((word, i, arr) => (
              <React.Fragment key={i}>
                {i === arr.length - 1 || i === arr.length - 2 ? <span className="text-[#D4AF37]">{word} </span> : word + ' '}
              </React.Fragment>
            ))}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl"
          >
            {t('desc')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="bg-[#D4AF37] hover:bg-[#b08d24] text-white px-8 py-6 text-lg rounded-none transition-all group shadow-xl">
              {t('batafsil')}
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Vertical Language Switcher */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-30 flex flex-col bg-black/40 backdrop-blur-md rounded-r-lg border border-white/10 border-l-0 overflow-hidden">
          {LANGUAGES.map((lang, idx) => (
            <button 
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`px-4 py-4 text-sm font-medium transition-colors border-b border-white/10 last:border-0 ${
                lang.code === locale ? 'text-[#D4AF37] bg-white/10 shadow-inner' : 'text-white hover:bg-white/10 hover:text-[#D4AF37]'
              }`}
            >
              <div className="flex flex-col items-center">
                <span className="mb-1 text-[10px] opacity-70 uppercase">{lang.code}</span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </>
  )
}
