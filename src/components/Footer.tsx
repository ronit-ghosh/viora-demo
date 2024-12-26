"use client"
import Link from 'next/link'
import { Twitter, Instagram, Linkedin } from 'lucide-react'
import PlayStore from "@/images/playstore.svg"
import AppStore from "@/images/appstore.svg"
import Image from 'next/image'
import ThemeToggle from './theme-toggle'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="container mx-auto md:px-44 px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ABOUT VIORA</h3>
            <ul className="space-y-2">
              <li><Link href="/about">Who are we</Link></li>
              <li><Link href="/team">Our Team</Link></li>
              <li><Link href="/careers">Work with us</Link></li>
              <li><Link href="/report-fraud">Report fraud</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/security">Security</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">SOCIAL LINKS</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/viora_minutemart" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram />
              </a>

              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter />
              </a> */}
              <a href="https://www.linkedin.com/company/vioranow/ " target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>
          <div>
            <ThemeToggle />
            <h3 className="text-lg font-semibold my-4">DOWNLOAD APP</h3>
            <div className="flex flex-col gap-2">
              <Link href={'/download'}>
                <Image
                  src={AppStore}
                  alt="Download on App Store"
                  width={135}
                  height={40}
                  className='cursor-pointer'
                />
              </Link>
              <Link href={'/download'}>
                <Image
                  src={PlayStore}
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                  className='cursor-pointer'
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. {currentYear} © Viora™ Ltd. All rights reserved.
        </div>
      </div>
      <div className="py-1 border-t text-xs text-gray-600 dark:text-gray-400 text-center">
        Made with ❤️ by <a href="https://github.com/ronit-ghosh" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-1 cursor-pointer">Ignite Studios</a>
      </div>
    </footer>
  )
}

