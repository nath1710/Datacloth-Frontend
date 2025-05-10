import { faMagnifyingGlass, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import CreateProductModal from '../Product/CreateProductModal'

function ProductsFilters({triggerRefresh, products, setFilteredProducts}) {
  const [searchField, setSearchField] = useState("")

  const filterProducts = () => {
    let filtered = products;

    if (searchField) {
      filtered = filtered.filter(products =>
        products.name.toLowerCase().includes(searchField.toLowerCase())
      );
    }

    if (filtered.length > 0) {
      setFilteredProducts(filtered)
    }
  }

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="mr-4">
      <div className="p-4 rounded-xl bg-[rgba(226,232,240,255)] flex flex-col gap-2">
        <button onClick={() => setModalOpen(true)} className="bg-[#74C0FC] p-2 rounded-lg">Add product&nbsp;&nbsp;<FontAwesomeIcon icon={faSquarePlus} /></button>
        <CreateProductModal isOpen={modalOpen} onClose={() => {setModalOpen(false); triggerRefresh()}} />
        <div className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm w-full max-w-md">
          <input
            type="text"
            placeholder="Search On This List"
            className="outline-none w-full text-gray-500 placeholder-gray-400 bg-transparent"
            onKeyDown={filterProducts} value={searchField} onChange={(e) => setSearchField(e.target.value)}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer"/>
        </div>
      </div>
    </div>
  )
}

export default ProductsFilters