import React from 'react'

function ProductRow({name, price, sold}) {
  return (
    <section>
      {
        sold === true ? <p style={{color: "red"}}>{name}</p> : <p>{name}</p>
      }
      <p>{price}</p>
      
    </section>
  )
}

export default ProductRow