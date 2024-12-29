import { ProductCarousel } from "@/components/product-carousel"

const dairyProducts = [
    { id: 31, name: 'Amul Milk 500ml', price: 25, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735388276/amul_milk_efc9wr.webp' },
    { id: 32, name: 'English Brown Eggs 6pcs', price: 78, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735388276/eggs_cd2fmb.jpg' },
    { id: 33, name: 'Amul Butter 100g', price: 52, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735388278/amul_butter_sm3ibd.jpg' },
    { id: 34, name: 'Modern Bread', price: 40, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735388277/Modern_Bread_sd1qxr.jpg' },
    { id: 35, name: 'Amul Cheese Slices', price: 130, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396936/Amul_Cheese_Slices_milbzc.jpg' },
    { id: 36, name: 'Mother Dairy Curd', price: 45, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735388277/Mother_Dairy_Curd_kvvg4k.jpg' },
  ]
  
  export default function DairyBreadSection() {
    return (
      <div className="container mx-auto px-4">
        <ProductCarousel title="Dairy, Bread & Eggs" products={dairyProducts} />
      </div>
    )
  }
  