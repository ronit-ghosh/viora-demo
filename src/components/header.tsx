"use client"
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useCart } from './cart-provider'
import Image from 'next/image'
import Logo from "@/images/Viora.svg"

export default function Header() {
  const { cart } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showAppModal, setShowAppModal] = useState(false)

  const handleDownloadApp = () => {
    setShowAppModal(true)
    setTimeout(() => setShowAppModal(false), 3000)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/30 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            <Image
              src={Logo}
              alt='Logo'
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 items-center">
              <li><Link href="/">Home</Link></li>
              <li>
                <Link href="/cart" className="flex items-center">
                  <ShoppingCart className="mr-1" />
                  <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
                </Link>
              </li>
              <li><Button variant="ghost" onClick={() => { }}>Sign Up</Button></li>
              <li><Button variant="ghost" onClick={() => { }}>Login</Button></li>
              <li><Button onClick={handleDownloadApp}>Download App</Button></li>
            </ul>
          </nav>
          <div className="md:hidden flex items-center">
            <Button onClick={handleDownloadApp} className="mr-2">Download App</Button>
            <Link href="/cart" className="flex items-center">
              <ShoppingCart className="mr-1" />
              <span>({cart.reduce((sum, item) => sum + item.quantity, 0)})</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link href={'/'} className="w-full justify-start">Sign Up</Link></li>
              <li><Link href={'/'} className="w-full justify-start">Login</Link></li>
            </ul>
          </nav>
        )}
      </div>
      {showAppModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold">App Under Development</p>
          </div>
        </div>
      )}
    </header>
  )
}

