// import { Header } from '@/components/header'
// import { Footer } from '@/components/footer'
// import React from 'react'

// const pageTitles: Record<string, string> = {
//   'jamiyat-tarixi': 'Jamiyat tarixi',
//   'faoliyat-maqsadi': 'Faoliyat maqsadi va vazifalari',
//   'rahbariyat': 'Jamiyat Rahbariyati',
//   'tashkiliy-tuzilma': 'Jamiyatning tashkiliy tuzilmasi',
//   'korruptsiyaga-qarshi': 'Korruptsiyaga qarshi kurash',
//   'jamiyat-obyektlari': "JAMIYAT OB'EKTLARI",
//   'ofis-ijarasi': 'Ofis binolari ijarasi',
//   'konferens-zallar': 'Konferens zallar ijarasi',
//   'qoshimcha-xizmatlar': "Qo'shimcha xizmatlar",
//   'ijara-qoidalari': "IJARA OB'EKTLARIDAN FOYDALANISH QOIDALARI",
//   'bildirishnomalar': "IJARAGA BERUVCHINING BILDIRISHNOMALARI",
//   'murojaat-formalari': "IJARAGA OLUCHINING MUROJAATI FORMALARI",
//   'aloqa': 'ALOQA'
// }

// export default async function GenericPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
//   const { slug } = await params;
//   const title = pageTitles[slug] || slug.replace(/-/g, ' ').toUpperCase();

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       <Header />
//       <div className="flex-grow pt-32 pb-24 container mx-auto px-6">
//         <div className="bg-white p-12 lg:p-24 rounded-2xl shadow-sm border border-gray-100 text-center mt-12">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002C5A] mb-8 uppercase tracking-wide leading-tight">
//             {title}
//           </h1>
//           <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-10"></div>
//           <p className="text-gray-500 text-lg max-w-2xl mx-auto">
//             Ushbu sahifa tayyorlanmoqda. Keyinchalik bu yerga batafsil ma'lumotlar va hujjatlar kiritiladi.
//           </p>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }
