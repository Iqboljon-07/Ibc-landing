"use client"
import React from 'react'
import { MapPin, MessageSquare, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export function LocationSection() {
  const t = useTranslations('LocationSection');

  return (
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
            title={t('mapTitle')}
          />
        </div>
        
        {/* Contact Details */}
        <div className="p-12 lg:p-24 flex flex-col justify-center bg-[#002C5A] text-white">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-8 text-[#D4AF37]">
            {t('title')}
          </h2>
          <p className="text-gray-300 text-lg mb-12">
            {t('description')}
          </p>
          
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-5">
              <div className="p-4 bg-white/5 rounded-full text-[#D4AF37] border border-white/10">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-xl mb-2 uppercase tracking-wide">
                  {t('addressTitle')}
                </h4>
                <p className="text-gray-400">
                  {t('addressLine1')}<br/>
                  {t('addressLine2')}
                </p>
              </div>
            </div>
            
            {/* Contact */}
            <div className="flex items-start gap-5">
              <div className="p-4 bg-white/5 rounded-full text-[#D4AF37] border border-white/10">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-xl mb-2 uppercase tracking-wide">
                  {t('contactTitle')}
                </h4>
                <p className="text-gray-400">
                  {t('workingHours')}<br/>
                  {t('phone')}
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="mt-14">
            <Button 
              className="bg-[#D4AF37] hover:bg-white text-[#002C5A] hover:text-[#002C5A] font-bold px-10 py-7 uppercase tracking-wider text-sm rounded flex items-center gap-3 transition-colors shadow-lg"
              onClick={() => {
                // Aloqa formasiga o'tkazish yoki modal ochish
                window.location.href = '#contact-form';
              }}
            >
              <Send className="w-5 h-5" />
              {t('ctaButton')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}