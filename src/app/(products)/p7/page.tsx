import { ProductCarousel } from "@/components/product-carousel"

const drinksProducts = [
    { id: 37, name: 'Coca Cola 2L', price: 95, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396581/Coca_Cola_2L_ljxrxp.jpg' },
    { id: 38, name: 'Real Fruit Juice 1L', price: 110, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396582/Real_Fruit_Juice_1L_pf89hs.jpg' },
    { id: 39, name: 'Sprite 750ml', price: 40, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396582/Sprite_750ml_euf3ot.jpg' },
    { id: 40, name: 'Tropicana Orange 1L', price: 120, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396582/Tropicana_Orange_1L_rtezw1.webp' },
    { id: 41, name: 'Thumbs Up 750ml', price: 40, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396582/Thumbs_Up_750ml_stcz14.webp' },
    { id: 42, name: 'Maaza 1L', price: 70, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396582/Maaza_1L_q908hy.jpg' },
  ]
  
  export default function DrinksSection() {
    return (
      <div className="container mx-auto px-4">
        <ProductCarousel title="Cold Drinks & Juices" products={drinksProducts} />
      </div>
    )
  }