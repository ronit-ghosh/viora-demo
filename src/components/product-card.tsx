"use client"

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useCart } from '@/components/cart-provider'
import { Tag } from 'lucide-react'

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
}

export function ProductCard({ id, name, price, image }: ProductCardProps) {
  const { addToCart, cart } = useCart()
  const isAdded = cart.some(item => item.id === id)
  const offer = 25;
  const handleAddToCart = () => {
    addToCart({ id, name, price, image, quantity: 1 })
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 w-full bg-white transition-transform duration-300 ease-in-out hover:scale-105">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <div className="flex gap-2">
          <p className="text-gray-500 dark:text-gray-400 mb-4 line-through">₹{price.toFixed(2)}</p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">₹{(price - (price * offer / 100)).toFixed(2)}</p>
          <span className='text-violet-500 font-extrabold flex gap-1 justify-center'><Tag size={18} className='mt-1'/> {offer + "% off"}</span> 
        </div>
        <Button
          onClick={handleAddToCart}
          className="w-full"
          variant={isAdded ? "secondary" : "default"}
          disabled={isAdded ? true : false}
        >
          {isAdded ? "Added to Cart" : "Add to Cart"}
        </Button>
      </div>
    </div>
  )
}

