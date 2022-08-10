import React from 'react'
import ProductRow from '../components/ProductRow'
import ProductTable from '../components/ProductTable'
import SearchBar from '../components/SearchBar'

function ProductPage() {
  return (
    <div>
        <SearchBar/>
        <ProductTable>
            <ProductRow/>
        </ProductTable>
    </div>
  )
}

export default ProductPage