import { useState, useEffect } from 'react'

import { ENDPOINTS } from '../constants'

import ProductCard from '../components/ProductCard'
import ProductCardsContainer from '../components/ProductCardsContainer'

export default function FeaturedProducts({ title, category, size = 4 }) {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ products, setProducts ] = useState([])

  useEffect(function() {
    async function fetchAndSetProducts() {
      setIsLoading(true)

      try {
        const URI = category ? `${ENDPOINTS.CATEGORY}/${encodeURIComponent(category)}` : ENDPOINTS.PRODUCTS

        // Requesting 2 x size in order to make the result more random
        const data = await fetch(URI + '?limit=' + Math.ceil(size*2)).then(res => res.json())
        
        data.sort(() => Math.random() - 0.5)
        data.length = size

        setProducts(data)
      
      } catch(err) { console.error(err) }

      setIsLoading(false)
    }

    fetchAndSetProducts()
  }, [])
  
  return (
    <ProductCardsContainer isLoading={isLoading} size={size} title={title || category || 'Featured products'}>
      {products.map((product) => <ProductCard key={product.id} {...product}/>)}
    </ProductCardsContainer>
  )
}