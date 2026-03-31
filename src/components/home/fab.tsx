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

export function Fab() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (nextLocale) => {
    router.replace(pathname, {locale: nextLocale});
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <Button className="bg-[#002C5A] hover:bg-[#001f40] text-white rounded-full py-6 px-6 shadow-xl shadow-black/30 border border-white/20 group flex items-center gap-3">
          <MessageSquare className="h-5 w-5 group-hover:scale-110 transition-transform" />
          <span className="font-medium mr-1 uppercase text-sm tracking-wide">Ostav'te zayavku</span>
        </Button>
      </motion.div>
    </>
  )
}
