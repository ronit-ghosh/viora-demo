import { ProductCarousel } from './product-carousel'

const sweetToothProducts = [
  { id: 1, name: 'Cadbury Silk', price: 2.99, image: '/placeholder.svg?height=200&width=200&text=Cadbury+Silk' },
  { id: 2, name: '5 Star Chocolate', price: 1.99, image: '/placeholder.svg?height=200&width=200&text=5+Star' },
  { id: 3, name: 'Dark Chocolate', price: 3.99, image: '/placeholder.svg?height=200&width=200&text=Dark+Chocolate' },
  { id: 4, name: 'Milk Chocolate', price: 2.49, image: '/placeholder.svg?height=200&width=200&text=Milk+Chocolate' },
  { id: 5, name: 'Gems', price: 1.99, image: '/placeholder.svg?height=200&width=200&text=Gems' },
  { id: 6, name: 'Milkybar', price: 1.49, image: '/placeholder.svg?height=200&width=200&text=Milkybar' },
]

export function SweetToothSection() {
  return (
    <div className="container mx-auto px-4">
      <ProductCarousel title="Sweet Tooth" products={sweetToothProducts} />
    </div>
  )
}

