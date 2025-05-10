import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import EditProductModal from '../Product/EditProductModal';

function ProductsListCard({product, triggerRefresh}) {

  const [modalOpen, setModalOpen] = useState(false);

  const deleteProduct = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/products/" + product.id, {
                method: 'DELETE'
            });
            triggerRefresh()
      if (!response.ok) throw new Error("Error while deleting product");
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="flex items-center justify-between p-4 rounded-2xl shadow-sm border bg-white w-full max-w-5xl mx-auto">
      <EditProductModal product={product} isOpen={modalOpen} onClose={() => {setModalOpen(false); triggerRefresh()}} />
      <div className="flex items-center space-x-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 rounded-xl object-cover border border-gray-100"
        />
        <div className="h-24 flex flex-col justify-around">
          <h3 className="text-xl font-semibold">{product.name}</h3>

          <div className="mt-2 flex flex-wrap gap-6 text-sm text-gray-500">
            <div>
              Creation date <span className="font-bold text-black">{product.creation_date}</span>
            </div>
            <div>
              Category <span className="font-bold text-black">{product.category}</span>
            </div>
            <div>
              Price <span className="font-bold text-black">${product.price}</span>
            </div>
            <div>
              Stock <span className="font-bold text-black">{product.stock}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-2 pl-10">
        <FontAwesomeIcon icon={faPen} onClick={() => setModalOpen(true)} className="border rounded-lg p-2 hover:bg-[rgba(226,232,240,255)]" />
        <FontAwesomeIcon icon={faTrash} onClick={deleteProduct} className="border rounded-lg p-2 hover:bg-red-500" />
      </div>
    </div>
  )
}

export default ProductsListCard