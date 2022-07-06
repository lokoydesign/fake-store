import { useState, useEffect } from 'react'

import { ENDPOINTS } from '../constants'

import ProductCard from '../components/ProductCard'
import ProductCardsContainer from '../components/ProductCardsContainer'

export default function FeaturedProducts({ title, category, size = 4 }) {
  const [ products, setProducts ] = useState([])
  
  useEffect(function() {
    fetch(`${category ? ENDPOINTS.CATEGORY+'/'+encodeURIComponent(category) : ENDPOINTS.PRODUCTS}?limit=${size*2}`)
      .then(res => res.json())
      .then(data => {
        data.sort(() => Math.random() - 0.5)
        data.length = size
        setProducts(data)
      })
      .catch(console.error)
  }, [])
  
  return (
    <ProductCardsContainer title={title || 'Featured products'}>
      {products.map((product) => <ProductCard key={product.id} {...product}/>)}
    </ProductCardsContainer>
  )
}