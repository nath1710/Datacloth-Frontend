import React, { useEffect, useState } from 'react'
import ProductsListCard from '../../ProductsListCard/ProductsListCard';
import ProductsFilters from '../../Filters/ProductsFilters';

// const products = [
//   {
//     id: 1,
//     name: "Yellow Coat",
//     creationDate: "20h:46m:30s",
//     category: "Bank Offer",
//     price: "149",
//     stock: 45,
//     image: "https://i5.walmartimages.com/seo/TAGOLD-Raincoat-Women-Winter-Jacket-Womens-Plus-Size-Hooded-Trench-Coats-Women-Solid-Rain-Jacket-Outdoor-Windproof-Top-Lined-Windbreaker-Travel-Yello_73e01008-3221-4631-8da8-7cb67269cb2a.1e1faa72451c0ad0af84ab81b9d20e93.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
//   },
//   {
//     id: 2,
//     name: "White Shirt",
//     creationDate: "20h:46m:30s",
//     category: "Bank Offer",
//     price: "149",
//     stock: 45,
//     image: "https://cafe24img.poxo.com/scause/web/product/big/202402/5eafbb04b2b89c6f7787f571997924e5.jpg"
//   },
//   {
//     id: 3,
//     name: "Blue Jean",
//     creationDate: "20h:46m:30s",
//     category: "Bank Offer",
//     price: "149",
//     stock: 45,
//     image: "https://www.shutterstock.com/image-photo/fashion-trendy-womens-jeans-isolated-600nw-2466839305.jpg"
//   },
//   {
//     id: 4,
//     name: "Yellow Coat",
//     creationDate: "20h:46m:30s",
//     category: "Bank Offer",
//     price: "149",
//     stock: 45,
//     image: "https://i5.walmartimages.com/seo/TAGOLD-Raincoat-Women-Winter-Jacket-Womens-Plus-Size-Hooded-Trench-Coats-Women-Solid-Rain-Jacket-Outdoor-Windproof-Top-Lined-Windbreaker-Travel-Yello_73e01008-3221-4631-8da8-7cb67269cb2a.1e1faa72451c0ad0af84ab81b9d20e93.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
//   },
//   {
//     id: 5,
//     name: "White Shirt",
//     creationDate: "20h:46m:30s",
//     category: "Bank Offer",
//     price: "149",
//     stock: 45,
//     image: "https://cafe24img.poxo.com/scause/web/product/big/202402/5eafbb04b2b89c6f7787f571997924e5.jpg"
//   },
//   {
//     id: 6,
//     name: "Blue Jean",
//     creationDate: "20h:46m:30s",
//     category: "Bank Offer",
//     price: "149",
//     stock: 45,
//     image: "https://www.shutterstock.com/image-photo/fashion-trendy-womens-jeans-isolated-600nw-2466839305.jpg"
//   },
//   {
//     id: 7,
//     name: "Yellow Coat",
//     creationDate: "20h:46m:30s",
//     category: "Bank Offer",
//     price: "149",
//     stock: 45,
//     image: "https://i5.walmartimages.com/seo/TAGOLD-Raincoat-Women-Winter-Jacket-Womens-Plus-Size-Hooded-Trench-Coats-Women-Solid-Rain-Jacket-Outdoor-Windproof-Top-Lined-Windbreaker-Travel-Yello_73e01008-3221-4631-8da8-7cb67269cb2a.1e1faa72451c0ad0af84ab81b9d20e93.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
//   },
//   {
//     id: 8,
//     name: "White Shirt",
//     creationDate: "20h:46m:30s",
//     category: "Bank Offer",
//     price: "149",
//     stock: 45,
//     image: "https://cafe24img.poxo.com/scause/web/product/big/202402/5eafbb04b2b89c6f7787f571997924e5.jpg"
//   },
//   {
//     id: 9,
//     name: "Blue Jean",
//     creationDate: "20h:46m:30s",
//     category: "Bank Offer",
//     price: "149",
//     stock: 45,
//     image: "https://www.shutterstock.com/image-photo/fashion-trendy-womens-jeans-isolated-600nw-2466839305.jpg"
//   },
//   {
//     id: 10,
//     name: "Yellow Coat",
//     creationDate: "20h:46m:30s",
//     category: "Bank Offer",
//     price: "149",
//     stock: 45,
//     image: "https://i5.walmartimages.com/seo/TAGOLD-Raincoat-Women-Winter-Jacket-Womens-Plus-Size-Hooded-Trench-Coats-Women-Solid-Rain-Jacket-Outdoor-Windproof-Top-Lined-Windbreaker-Travel-Yello_73e01008-3221-4631-8da8-7cb67269cb2a.1e1faa72451c0ad0af84ab81b9d20e93.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
//   },
//   {
//     id: 11,
//     name: "White Shirt",
//     creationDate: "20h:46m:30s",
//     category: "Bank Offer",
//     price: "149",
//     stock: 45,
//     image: "https://cafe24img.poxo.com/scause/web/product/big/202402/5eafbb04b2b89c6f7787f571997924e5.jpg"
//   },
//   {
//     id: 12,
//     name: "Blue Jean",
//     creationDate: "20h:46m:30s",
//     category: "Bank Offer",
//     price: "149",
//     stock: 45,
//     image: "https://www.shutterstock.com/image-photo/fashion-trendy-womens-jeans-isolated-600nw-2466839305.jpg"
//   },
// ];

function ProductsList() {

  const fetchProducts = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/products");

      if (!response.ok) throw new Error("Error while fetching products");

      const data = await response.json();
      console.log(data);
      setProducts(data);
      setFilteredProducts(data)
    } catch (error) {
      console.error(error.message);
    }
  }

  const[refreshTrigger, setRefreshTrigger] = useState(0)

  const triggerRefresh = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  useEffect(() => {
    fetchProducts();
  }, [refreshTrigger]);

  const [products, setProducts] = useState([])

  const [filteredProducts, setFilteredProducts] = useState([]);

  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 10;

  // const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // const handleNextPage = () => {
  //   if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  // };

  // const handlePreviousPage = () => {
  //   if (currentPage > 1) setCurrentPage(currentPage - 1);
  // };

  // const handlePageClick = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const selectedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="pt-[115px] flex flex-col items-center">
      <div>
        <p className="text-3xl pb-3">Products List</p>
        <div className="flex">
          <ProductsFilters triggerRefresh={triggerRefresh} products={products} setFilteredProducts={setFilteredProducts}/>
          <div className="bg-[rgba(226,232,240,255)] flex flex-col gap-1 p-4 rounded-xl">
            {products && products.length >0 ? (
              filteredProducts.map((product) => (
                <ProductsListCard
                  key={product.id}
                  product={product}
                  triggerRefresh={triggerRefresh}
                />
              ))
            ) : <p>No products were found</p>}

            {/* Paginación
            {products.length > 0 && <div className="flex justify-center mt-4 space-x-2">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageClick(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? 'bg-indigo-500 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              >
                Next
              </button>
            </div>} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsList