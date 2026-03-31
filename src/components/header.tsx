"use client"
import React, { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { Menu, Search, Instagram, Facebook, Send } from 'lucide-react';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#002C5A] shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Left: Burger Menu */}
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Menu className="h-8 w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[450px] bg-[#223963] text-white border-r-0 overflow-y-auto">
              <SheetTitle className="text-white sr-only">Menu</SheetTitle>
              
              {/* Sidebar top logo (Back to Home) */}
              <div className="mt-6 mb-4 pb-6 border-b border-white/10">
                <Link href="/" className="flex flex-col text-white group hover:opacity-80 transition-opacity">
                  <span className="text-lg sm:text-xl font-serif tracking-widest uppercase mb-1">International</span>
                  <div className="flex items-center gap-2">
                    <div className="h-[1px] w-4 bg-[#D4AF37] group-hover:w-6 transition-all duration-300"></div>
                    <span className="text-[10px] sm:text-xs font-light tracking-[0.2em] text-[#D4AF37] uppercase">Business Centre</span>
                  </div>
                </Link>
              </div>

              <div className="flex flex-col pb-12">
                
                {/* Accordion Menu items */}
                <Accordion type="single" collapsible className="w-full">
                  
                  {/* Item 1 */}
                  <AccordionItem value="item-1" className="border-b border-white/10">
                    <AccordionTrigger className="text-sm font-semibold tracking-wide uppercase text-left hover:no-underline hover:text-[#D4AF37] text-white transition-colors py-5">
                      “XALQARO HAMKORLIK MARKAZI” AKSIYADORLIK JAMIYATI
                    </AccordionTrigger>
                    <AccordionContent className="bg-black/20 rounded-lg flex flex-col overflow-hidden mb-2 border border-white/5">
                      <Link href="/jamiyat-tarixi" className="py-3 px-4 border-b border-white/5 hover:bg-white/5 hover:text-[#D4AF37] text-gray-300 transition-all">Jamiyat tarixi</Link>
                      <Link href="/faoliyat-maqsadi" className="py-3 px-4 border-b border-white/5 hover:bg-white/5 hover:text-[#D4AF37] text-gray-300 transition-all">Faoliyat maqsadi va vazifalari</Link>
                      <Link href="/rahbariyat" className="py-3 px-4 border-b border-white/5 hover:bg-white/5 hover:text-[#D4AF37] text-gray-300 transition-all">Jamiyat Rahbariyati</Link>
                      <Link href="/tashkiliy-tuzilma" className="py-3 px-4 border-b border-white/5 hover:bg-white/5 hover:text-[#D4AF37] text-gray-300 transition-all">Jamiyatning tashkiliy tuzilmasi</Link>
                      <Link href="/korruptsiyaga-qarshi" className="py-3 px-4 hover:bg-white/5 hover:text-[#D4AF37] text-gray-300 transition-all">Korruptsiyaga qarshi kurash</Link>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Item 2 */}
                  <div className="border-b border-white/10">
                    <Link href="/jamiyat-obyektlari" className="block py-5 text-sm font-semibold tracking-wide uppercase text-white hover:text-[#D4AF37] transition-colors">
                      JAMIYAT OB'EKTLARI
                    </Link>
                  </div>

                  {/* Item 3 */}
                  <AccordionItem value="item-3" className="border-b border-white/10">
                    <AccordionTrigger className="text-sm font-semibold tracking-wide uppercase text-left hover:no-underline hover:text-[#D4AF37] text-white transition-colors py-5">
                      TAQDIM ETILADIGAN XIZMATLAR
                    </AccordionTrigger>
                    <AccordionContent className="bg-black/20 rounded-lg flex flex-col overflow-hidden mb-2 border border-white/5">
                      <Link href="/ofis-ijarasi" className="py-3 px-4 border-b border-white/5 hover:bg-white/5 hover:text-[#D4AF37] text-gray-300 transition-all">Ofis binolari ijarasi</Link>
                      <Link href="/konferens-zallar" className="py-3 px-4 border-b border-white/5 hover:bg-white/5 hover:text-[#D4AF37] text-gray-300 transition-all">Konferens zallar ijarasi</Link>
                      <Link href="/qoshimcha-xizmatlar" className="py-3 px-4 hover:bg-white/5 hover:text-[#D4AF37] text-gray-300 transition-all">Qo'shimcha xizmatlar</Link>
                    </AccordionContent>
                  </AccordionItem>
                  
                  {/* Item 4 */}
                  <AccordionItem value="item-4" className="border-b border-white/10">
                    <AccordionTrigger className="text-sm font-semibold tracking-wide uppercase text-left hover:no-underline hover:text-[#D4AF37] text-white transition-colors py-5">
                      BIZNING IJARACHILARIMIZ UCHUN
                    </AccordionTrigger>
                    <AccordionContent className="bg-black/20 rounded-lg flex flex-col overflow-hidden mb-2 border border-white/5">
                      <Link href="/ijara-qoidalari" className="py-3.5 px-4 border-b border-white/5 hover:bg-white/5 hover:text-[#D4AF37] text-gray-300 transition-all text-sm leading-relaxed">
                        1. IJARA OB'EKTLARIDAN FOYDALANISH QOIDALARI
                      </Link>
                      <Link href="/bildirishnomalar" className="py-3.5 px-4 border-b border-white/5 hover:bg-white/5 hover:text-[#D4AF37] text-gray-300 transition-all text-sm leading-relaxed">
                        2. IJARAGA BERUVCHINING BILDIRISHNOMALARI VA E'LONLARI
                      </Link>
                      <Link href="/murojaat-formalari" className="py-3.5 px-4 hover:bg-white/5 hover:text-[#D4AF37] text-gray-300 transition-all text-sm leading-relaxed">
                        3. IJARAGA OLUCHINING MUROJAATI FORMALARI
                      </Link>
                    </AccordionContent>
                  </AccordionItem>

                  <div className="border-b border-white/10">
                    <Link href="/aloqa" className="block py-5 text-sm font-semibold tracking-wide uppercase text-white hover:text-[#D4AF37] transition-colors">
                      ALOQA
                    </Link>
                  </div>
                  
                </Accordion>
                
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Center: Logo */}
        <Link href="/" className="flex flex-col items-center justify-center text-white scale-90 md:scale-100 group">
          <span className="text-xl md:text-2xl font-serif tracking-widest uppercase">International</span>
          <div className="w-full flex items-center justify-center gap-2">
            <div className="h-[1px] w-6 bg-white shrink-0 group-hover:bg-[#D4AF37] transition-colors"></div>
            <span className="text-xs md:text-sm font-light tracking-[0.3em] uppercase whitespace-nowrap group-hover:text-[#D4AF37] transition-colors">Business Centre</span>
            <div className="h-[1px] w-6 bg-white shrink-0 group-hover:bg-[#D4AF37] transition-colors"></div>
          </div>
        </Link>

        {/* Right: Search & Social */}
        <div className="flex items-center gap-4 text-white">
          <button className="hidden md:flex items-center gap-2 text-sm hover:text-[#D4AF37] transition-colors mr-2">
            <Search className="h-4 w-4" />
            <span>Search</span>
          </button>
          
          <div className="hidden sm:flex items-center gap-3">
            <Link href="#" className="bg-white text-[#002C5A] p-1.5 rounded-full hover:bg-[#D4AF37] hover:text-white transition-all">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="#" className="bg-white text-[#002C5A] p-1.5 rounded-full hover:bg-[#D4AF37] hover:text-white transition-all">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" className="bg-white text-[#002C5A] p-1.5 rounded-full hover:bg-[#D4AF37] hover:text-white transition-all">
              <Send className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
};
