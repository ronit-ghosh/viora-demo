import { ProductCarousel } from "../product-carousel"

const petCareProducts = [
    { id: 73, name: 'Pedigree Adult Dog Food 3kg', price: 699, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396588/Pedigree_Adult_Dog_Food_3kg_lhuokq.jpg' },
    { id: 74, name: 'Whiskas Cat Food 1.2kg', price: 399, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396588/Whiskas_Cat_Food_1.2kg_eehpt4.jpg' },
    { id: 75, name: 'Royal Canin Maxi Adult 4kg', price: 2999, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396588/Royal_Canin_Maxi_Adult_4kg_abue6p.webp' },
    { id: 76, name: 'Me-O Cat Food 1.2kg', price: 375, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396588/Me-O_Cat_Food_1.2kg_qp3xln.jpg' },
    { id: 77, name: 'Drools Dog Food 3kg', price: 549, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396588/Drools_Dog_Food_3kg_uzwtam.jpg' },
    { id: 78, name: 'Pet Lovers Crunch 1kg', price: 299, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396588/Pet_Lovers_Crunch_1kg_bwbqg5.jpg' },
  ]
  
  export function PetCareSection() {
    return (
      <div className="container mx-auto px-4">
        <ProductCarousel title="Pet Care" products={petCareProducts} />
      </div>
    )
  }