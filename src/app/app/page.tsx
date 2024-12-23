import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function AppDownloadPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/kashmir-landscape.jpg"
        alt="Kashmir Landscape"
        fill
        style={{ objectFit: 'cover' }}
        className="z-0"
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white p-6 sm:p-8 bg-black bg-opacity-50 rounded-lg backdrop-blur-sm w-full max-w-md mx-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Download Viora App</h1>
        <p className="text-lg sm:text-xl mb-8">Get groceries delivered in 10 minutes!</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto">
            <Image src="/images/app-store-badge.png" alt="Download on App Store" width={135} height={40} />
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto">
            <Image src="/images/google-play-badge.png" alt="Get it on Google Play" width={135} height={40} />
          </Button>
        </div>
      </div>
    </div>
  )
}

