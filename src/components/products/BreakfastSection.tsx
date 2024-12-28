import { ProductCarousel } from "../product-carousel"

const breakfastProducts = [
    { id: 19, name: 'Maggi 4 Pack', price: 48, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396580/Maggi_4_Pack_qddu8i.jpg' },
    { id: 20, name: 'Kelloggs Corn Flakes 875g', price: 349, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396580/Kelloggs_Corn_Flakes_875g_jjvahc.jpg' },
    { id: 21, name: 'Quaker Oats 1kg', price: 199, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396580/Quaker_Oats_1kg_a6f0tv.jpg' },
    { id: 22, name: 'MTR Breakfast Mix 500g', price: 185, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396580/MTR_Breakfast_Mix_500g_dvp2gg.jpg' },
    { id: 23, name: 'Saffola Oats 1kg', price: 179, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396580/Saffola_Oats_1kg_i0cjiw.jpg' },
    { id: 24, name: 'Top Ramen 4 Pack', price: 80, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396580/Top_Ramen_4_Pack_ozd2ti.jpg' },
  ]
  
  export function BreakfastSection() {
    return (
      <div className="container mx-auto px-4">
        <ProductCarousel title="Breakfast & Instant Food" products={breakfastProducts} />
      </div>
    )
  }