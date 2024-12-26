"use client"

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useCart } from '@/components/cart-provider'

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
}

export function ProductCard({ id, name, price, image }: ProductCardProps) {
  const { addToCart, cart } = useCart()
  const isAdded = cart.some(item => item.id === id)

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, quantity: 1 })
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: 'contain' }}
          className="transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">₹ {price.toFixed(2)}</p>
        <Button
          onClick={handleAddToCart}
          className="w-full"
          variant={isAdded ? "secondary" : "default"}
        >
          {isAdded ? "Added to Cart" : "Add to Cart"}
        </Button>
      </div>
    </div>
  )
}

