"use client"

import { useState } from 'react'
import Landing from '@/components/sections/landing'
import Feature from '@/components/sections/feature'
import Faq from '@/components/sections/faq'
import Places from '@/components/sections/places'
import Download from '@/components/sections/download'
import FloatingButton from '@/components/floating-button'

export default function Home() {

  return (
    <>
      <FloatingButton />
      <Landing />
      <Feature />
      <Places />
      <Download />
      <Faq />
    </>
  )
}

