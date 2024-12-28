"use client"
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Menu, X, Download } from 'lucide-react'
import { useCart } from './cart-provider'
import Image from 'next/image'
import Logo from "@/images/Viora.svg"

export default function Header() {
  const { cart } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
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
                  <span className={`animate-bounce ${cartCount ===  0 ? 'sr-only': ''}`}>{cartCount}</span>
                </Link>
              </li>
              {/* <li><Button variant="ghost" onClick={() => { }}>Sign Up</Button></li>
              <li><Button variant="ghost" onClick={() => { }}>Login</Button></li> */}
              <li><Link href={'/download'}>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium hover:text-[#7800ff] text-neutral-300 transition-colors ">
                  Download App
                </button>
              </Link> </li>
            </ul>
          </nav>
          <div className="md:hidden flex items-center">
            <Link href={'/download'}><Button className="mr-2"><Download /></Button></Link>
            <Link href="/cart" className="flex items-center">
              <ShoppingCart className="mr-1" />
              <span className={`animate-bounce ${cartCount ===  0 ? 'sr-only': ''}`}>{cartCount}</span>
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
    </header>
  )
}

