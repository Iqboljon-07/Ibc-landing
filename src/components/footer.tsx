import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#0b1f3b] text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Subtle decorative background pattern */}
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Logo and Copyright */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full md:w-2/3">
          <div className="flex flex-col items-center justify-center text-white scale-90 md:scale-100 flex-shrink-0">
             <div className="flex items-end gap-[2px] mb-1">
               <div className="w-2 h-10 border-2 border-white border-b-0 space-y-1 bg-blue-600"></div>
               <div className="w-2 h-14 border-2 border-white border-b-0 bg-blue-500"></div>
               <div className="w-2 h-10 border-2 border-white border-b-0 bg-blue-600"></div>
             </div>
             <span className="text-[10px] font-bold tracking-widest uppercase mt-1">International</span>
             <span className="text-[8px] font-light tracking-[0.1em] uppercase">Business Centre</span>
          </div>
          
          <div className="text-xs md:text-sm text-gray-400 text-center md:text-left leading-relaxed">
            <p>© Copyright 2015 - 2024 Aksiyadorlik jamiyati "Xalqaro biznes markazi"</p>
            <p className="mt-2">Ushbu saytda chop etilgan materiallardan to'liq yoki qisman foydalanish va iqtibos keltirishda AJ "Xalqaro biznes markazi" rasmiy saytiga havola keltirilishi majburiydir.</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-end w-full md:w-1/3">
          <p className="text-gray-400 text-sm mb-1">Kontakt telefon:</p>
          <a href="tel:+998712385884" className="text-xl font-medium hover:text-[#D4AF37] transition-colors">
            +(998 71) 238 58 84
          </a>
        </div>
        
      </div>
    </footer>
  );
};
