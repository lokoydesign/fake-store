import { useState, useEffect } from 'react'

import { ENDPOINTS } from '../constants'

import ProductCard from '../components/ProductCard'
import ProductCardsContainer from '../components/ProductCardsContainer'

export default function StoreFront() {
  const [ products, setProducts ] = useState([])

  useEffect(function() {
    fetch(ENDPOINTS.PRODUCTS)
      .then(res => res.json())
      .then(setProducts)
      .catch(console.error)
  }, [])

  return (
    <>
      <ProductCardsContainer title="Featured">
        {products.map(product => <ProductCard key={product.id} {...product}/>)}
      </ProductCardsContainer>
    </>
  )
}