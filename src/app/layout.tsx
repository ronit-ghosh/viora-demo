import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { CartProvider } from '@/components/cart-provider'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Viora - Kashmir\'s First 10-Minutes Delivery App',
  description: 'Get your groceries delivered in 10 minutes. Fresh groceries and everyday essentials delivered right to your doorstep, faster than you can imagine.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <main className="flex-grow">
                {children}
              </main>
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

