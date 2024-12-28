"use client"

import Landing from '@/components/sections/landing'
import Feature from '@/components/sections/feature'
import Faq from '@/components/sections/faq'
import Download from '@/components/sections/download'
import Header from '@/components/header'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify'
import BuyPage from '@/components/sections/Buy'

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
      <BuyPage />
      <Landing />
      <Download />
      <Faq />
      <Feature />
      <Footer />
    </>
  )
}

