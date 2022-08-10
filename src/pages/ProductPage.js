import React from 'react'
import { useState } from 'react';
import ProductRow from '../components/ProductRow'
import ProductTable from '../components/ProductTable'
import SearchBar from '../components/SearchBar'

import data from "../data.json"

function ProductPage() {

  const [products, setProducts] = useState(data)
  const [search, setSearch] = useState("")

  const filterProducts = objName =>{
      setSearch(objName)
  }

  const stockProducts = check =>{
    console.log(check)
    setProducts(data)
    check === true && setProducts(products.filter(e=> e.inStock === true ? false : true))
  }
  
  return (
    <div>
        <SearchBar searchFunction={filterProducts} chekFunction={stockProducts}/>
        <ProductTable>
            {
            products
            .filter(e=> e.name.includes(search) ? true : false)
            .map((e)=><ProductRow key={e.id} sold={e.inStock} name={e.name} price={e.price}/>)
            }
        </ProductTable>
    </div>
  )
}

export default ProductPage