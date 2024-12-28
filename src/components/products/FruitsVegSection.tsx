import { ProductCarousel } from "../product-carousel"

const fruitsVegProducts = [
    { id: 43, name: 'Fresh Onions 1kg', price: 40, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396583/Fresh_Onions_1kg_wf6hta.jpg' },
    { id: 44, name: 'Tomatoes 500g', price: 30, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396583/Tomatoes_500g_rfm82t.webp' },
    { id: 45, name: 'Green Apples 4pcs', price: 160, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396583/Green_Apples_4pcs_zqmvbk.webp' },
    { id: 46, name: 'Bananas 6pcs', price: 45, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396582/Bananas_6pcs_le0mom.jpg' },
    { id: 47, name: 'Baby Potatoes 1kg', price: 50, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396582/Baby_Potatoes_1kg_e3nl4a.jpg' },
    { id: 48, name: 'Sweet Lime 500g', price: 65, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396583/Sweet_Lime_500g_vyjt7z.jpg' },
  ]
  
  export function FruitsVegSection() {
    return (
      <div className="container mx-auto px-4">
        <ProductCarousel title="Fruits & Vegetables" products={fruitsVegProducts} />
      </div>
    )
  }
  