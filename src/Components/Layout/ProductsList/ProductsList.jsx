import React, { useState } from 'react'
import ProductsListCard from '../../ProductsListCard/ProductsListCard';

const products = [
  {
    id: 1,
    name: "Yellow Coat",
    creationDate: "20h:46m:30s",
    category: "Bank Offer",
    price: "149",
    stock: 45,
    image: "https://i5.walmartimages.com/seo/TAGOLD-Raincoat-Women-Winter-Jacket-Womens-Plus-Size-Hooded-Trench-Coats-Women-Solid-Rain-Jacket-Outdoor-Windproof-Top-Lined-Windbreaker-Travel-Yello_73e01008-3221-4631-8da8-7cb67269cb2a.1e1faa72451c0ad0af84ab81b9d20e93.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
  },
  {
    id: 2,
    name: "White Shirt",
    creationDate: "20h:46m:30s",
    category: "Bank Offer",
    price: "149",
    stock: 45,
    image: "https://cafe24img.poxo.com/scause/web/product/big/202402/5eafbb04b2b89c6f7787f571997924e5.jpg"
  },
  {
    id: 3,
    name: "Blue Jean",
    creationDate: "20h:46m:30s",
    category: "Bank Offer",
    price: "149",
    stock: 45,
    image: "https://www.shutterstock.com/image-photo/fashion-trendy-womens-jeans-isolated-600nw-2466839305.jpg"
  },
];

function ProductsList() {

  const [cartState, setCartState] = useState(
    products.map((product) => product.inCart)
  );

  const toggleCart = (index) => {
    const updated = [...cartState];
    updated[index] = !updated[index];
    setCartState(updated);
  };

  return (
    <div className="pt-[115px] flex flex-col justify-center">
      <div className="w-fit">
      <h2>Products List</h2>
      <div className="bg-[rgba(226,232,240,255)] flex flex-col gap-2 p-4 rounded-xl">
        {products.map((product) => (
          <ProductsListCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
      </div>
    </div>
  )
}

export default ProductsList