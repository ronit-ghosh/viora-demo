import { ProductCarousel } from "../product-carousel"

const homeProducts = [
    { id: 49, name: 'Good Knight Gold Flash', price: 72, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396584/Good_Knight_Gold_Flash_hjzggs.jpg' },
    { id: 50, name: 'All Out Ultra 45ml', price: 79, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396584/All_Out_Ultra_45ml_pej6gz.jpg' },
    { id: 51, name: 'Hit Spray 400ml', price: 165, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396584/Hit_Spray_400ml_e2pc8i.jpg' },
    { id: 52, name: 'Odonil Air Freshener', price: 45, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396584/Odonil_Air_Freshener_otuxq4.jpg' },
    { id: 53, name: 'Scotch Brite Scrub Pad 3pc', price: 55, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396584/Scotch_Brite_Scrub_Pad_3pc_mabbow.jpg' },
    { id: 54, name: 'Mortein Coil 10pc', price: 40, image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1735396584/Mortein_Coil_10pc_belovh.webp' },
]

export function HomeSection() {
    return (
        <div className="container mx-auto px-4">
            <ProductCarousel title="Cleaning Essentials" products={homeProducts} />
        </div>
    )
}