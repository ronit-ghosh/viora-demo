import { ProductCarousel } from "../product-carousel"

const snacksProducts = [
  { id: 91, name: 'Lay\'s Classic 90g', price: 40, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396591/Lays_Classic_90g_d9ymb4.jpg' },
  { id: 92, name: 'Kurkure 90g', price: 30, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396591/Kurkure_90g_chuee5.jpg' },
  { id: 93, name: 'Haldiram Bhujia 200g', price: 60, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396590/Haldiram_Bhujia_200g_lleae3.jpg' },
  { id: 94, name: 'Balaji Wafers 150g', price: 45, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396590/Balaji_Wafers_150g_gmrbly.jpg' },
  { id: 95, name: 'Bingo Mad Angles 90g', price: 30, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396590/Bingo_Mad_Angles_90g_abcwye.jpg' },
  { id: 96, name: 'Doritos Nacho 70g', price: 50, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396590/Doritos_Nacho_70g_jdg3ff.jpg' },
]

export function SnacksSection() {
  return (
    <div className="container mx-auto px-4">
      <ProductCarousel title="Snacks & Munchies" products={snacksProducts} />
    </div>
  )
}