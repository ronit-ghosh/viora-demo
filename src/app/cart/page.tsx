"use client"

import { useCart } from '@/components/cart-provider'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {cart.map(item => (
              <li key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <Button variant="destructive" onClick={() => removeFromCart(item.id)}>Remove</Button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Total: ₹{total.toFixed(2)}</h2>
            <Button variant="outline" onClick={clearCart}>Clear Cart</Button>
          </div>
          <Link href='/download'><Button className="w-full">Proceed to Checkout</Button></Link>
        </>
      )}
    </div>
  )
}

