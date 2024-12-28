import { ProductCarousel } from "../product-carousel"

const personalCareProducts = [
    { id: 67, name: 'Dove Soap 3x75g', price: 135, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396587/Dove_Soap_3x75g_wexxpe.jpg' },
    { id: 68, name: 'Colgate MaxFresh 150g', price: 95, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396587/Colgate_MaxFresh_150g_tpq8dc.jpg' },
    { id: 69, name: 'Nivea Body Lotion 400ml', price: 325, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396587/Nivea_Body_Lotion_400ml_qncghq.jpg' },
    { id: 70, name: 'Pantene Shampoo 650ml', price: 399, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396587/Pantene_Shampoo_650ml_dp4uqj.jpg' },
    { id: 71, name: 'Gillette Mach 3 Razor', price: 349, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396587/Gillette_Mach_3_Razor_h9fo9q.jpg' },
    { id: 72, name: 'Lakme Face Wash 100g', price: 185, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396587/Lakme_Face_Wash_100g_yqy8at.jpg' },
  ]
  
  export function PersonalCareSection() {
    return (
      <div className="container mx-auto px-4">
        <ProductCarousel title="Personal Care" products={personalCareProducts} />
      </div>
    )
  }