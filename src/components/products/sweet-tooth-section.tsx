import { ProductCarousel } from '../product-carousel'

const sweetToothProducts = [
  { id: 1, name: 'Cadbury Silk', price: 89, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735248810/dairy-milk-silk_np6ov1.jpg' },
  { id: 2, name: '5 Star Chocolate', price: 20, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735248810/five-star_n9xsjb.webp' },
  { id: 3, name: 'Dark Chocolate', price: 800, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735248812/dark-chocolate_yfsbtr.jpg' },
  { id: 4, name: 'Milk Chocolate', price: 28, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735248811/milk-chocolate_lm9fka.webp' },
  { id: 5, name: 'Gems', price: 10, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735248810/gems_bgqlge.webp' },
  { id: 6, name: 'Milkybar', price: 10, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735248811/milkybar_jn8cth.webp' },
]

export function SweetToothSection() {
  return (
    <div className="container mx-auto px-4">
      <ProductCarousel title="Sweet Tooth" products={sweetToothProducts} />
    </div>
  )
}