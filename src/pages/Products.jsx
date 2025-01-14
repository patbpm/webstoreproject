import React from "react";
import ProductCard from "../components/products/ProductCard";

const productsData = [
    {
        id:1,
        name: 'Voiture',
        price: 200,
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/2021_BMW_M3_Competition_Automatic_3.0_Front.jpg'
    },
    {
        id:2,
        name: 'Chaussure',
        price: 50,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Reebok_Royal_Glide_Ripple_Clip_shoe.jpg'
    },
];

const Products = () =>  {
    return(
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Product List</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {productsData.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Products;