import { ProductCarousel } from "@/components/product-carousel"

const saucesProducts = [
  { id: 85, name: 'Kissan Tomato Ketchup 1kg', price: 140, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396589/Kissan_Tomato_Ketchup_1kg_gwor1l.jpg' },
  { id: 86, name: 'Maggi Hot & Sweet 1kg', price: 160, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396590/Maggi_Hot_Sweet_1kg_zxfbqe.jpg' },
  { id: 87, name: 'Ching\'s Schezwan 250g', price: 85, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396589/Chings_Schezwan_250g_ponl8z.webp' },
  { id: 88, name: 'Del Monte Pasta Sauce 400g', price: 140, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396589/Del_Monte_Pasta_Sauce_400g_n5whik.jpg' },
  { id: 89, name: 'Veeba Mayonnaise 300g', price: 120, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396590/Veeba_Mayonnaise_300g_g31jyz.jpg' },
  { id: 90, name: 'Smith & Jones Pasta Masala 40g', price: 35, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396590/Smith_Jones_Pasta_Masala_40g_jrt8st.jpg' },
]

export default function SaucesSection() {
  return (
    <div className="container mx-auto px-4">
      <ProductCarousel title="Sauces & Spices" products={saucesProducts} />
    </div>
  )
}