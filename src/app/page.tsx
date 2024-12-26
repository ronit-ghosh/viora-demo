"use client"

import Landing from '@/components/sections/landing'
import Feature from '@/components/sections/feature'
import Faq from '@/components/sections/faq'
import Places from '@/components/sections/places'
import Download from '@/components/sections/download'
import FloatingButton from '@/components/floating-button'
import Header from '@/components/header'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify'

export default function Home() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header />
      <FloatingButton />
      <Landing />
      <Feature />
      <Places />
      <Download />
      <Faq />
      <Footer />
    </>
  )
}

