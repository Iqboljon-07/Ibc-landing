"use client"
import React from 'react'
import { HeroSection } from '@/components/home/hero-section'
import { VideoBio } from '@/components/home/video-bio'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { ServicesSection } from '@/components/home/services-section'
import { StatsRibbon } from '@/components/home/stats-ribbon'
import { PartnersSection } from '@/components/home/partners-section'
import { LocationSection } from '@/components/home/location-section'
import { Fab } from '@/components/home/fab'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <VideoBio />
      <WhyChooseUs />
      <ServicesSection />
      <StatsRibbon />
      <PartnersSection />
      <LocationSection />
      <Fab />
    </div>
  )
}
