import { useState, useEffect } from 'react'

import { ENDPOINTS } from '../constants'

import ProductCard from '../components/ProductCard'
import ProductCardsContainer from '../components/ProductCardsContainer'

import SummerSaleBanner from '../banners/SummerSale'
import ClubBanner from '../banners/Club'

export default function StoreFront() {
  const [ products, setProducts ] = useState([])
  const [ categories, setCategories ] = useState([])
  const [ featured, setFeatured ] = useState(Array(8))

  useEffect(function() {
    fetch(ENDPOINTS.PRODUCTS)
      .then(res => res.json())
      .then(data => {
        const categories = data.reduce((cats, product) => cats.includes(product.category) ? cats : [...cats, product.category], [])
        
        const _featured = data.map(({ id }) => id)
        _featured.sort(() => Math.random() - 0.5)
        _featured.length = 8
        console.log(data, _featured, categories)

        setProducts(data)
        setCategories(categories)
        setFeatured(_featured)
      })
      .catch(console.error)
  }, [])

  return (
    <>
      <SummerSaleBanner />

      <ProductCardsContainer title="Featured products">
        {featured.map((id) => <ProductCard key={id} {...products.find(product => product.id === id)}/>)}
      </ProductCardsContainer>

      <ClubBanner />

      <ProductCardsContainer title={categories[0]}>
        {products
          .filter(({ category }) => category === categories[0])
          .map((product) => <ProductCard key={product.id} {...product}/>)
        }
      </ProductCardsContainer>

      <ProductCardsContainer title={categories[1]}>
        {products
          .filter(({ category }) => category === categories[1])
          .map((product) => <ProductCard key={product.id} {...product}/>)
        }
      </ProductCardsContainer>
    </>
  )
}