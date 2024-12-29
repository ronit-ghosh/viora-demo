"use client"

import { useCart } from '@/components/cart-provider'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Minus, Plus } from 'lucide-react'

export default function CartPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const cartItemMessage = () => {
    let msg = ''
    cart.forEach(item => {
      msg += `${item.name}: ${item.quantity} qty for ₹${item.price} each\n` 
    })
    return msg
  }

  const message = `Hi,
I want to buy
${cartItemMessage()}
Total: ₹${total.toFixed(2)}

`

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {cart.map(item => (
              <li key={item.id} className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className='bg-white rounded-lg'
                  />
                  <div className="space-y-1">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-muted-foreground">₹{item.price.toFixed(2)} each</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-4 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <p className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Total: ₹{total.toFixed(2)}</h2>
            <Button variant="outline" onClick={clearCart}>Clear Cart</Button>
          </div>
          <a href={`https://wa.me/+919070127513?text=${encodeURIComponent(message)}`}>
            <Button className="w-full">Proceed to Checkout</Button>
          </a>
        </>
      )}
    </div>
  )
}