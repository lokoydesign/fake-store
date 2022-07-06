import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import PageHeader from '../components/PageHeader'
import ProductCard from '../components/ProductCard'
import ProductCardsContainer from '../components/ProductCardsContainer'

import FeaturedProducts from '../sections/FeaturedProducts'
import SummerSaleBanner from '../banners/SummerSale'
import ClubBanner from '../banners/Club'

import { ENDPOINTS } from '../constants'

export default function CategoryPage({ title }) {
  const [ products, setProducts ] = useState([])
  const params = useParams()

  useEffect(function() {
    fetch(`${ENDPOINTS.CATEGORY}/${encodeURIComponent(params.category)}`)
      .then(res => res.json())
      .then(setProducts)
      .catch(console.error)
  }, [params.category])
  
  return (
    <>
      <PageHeader title={params.category}/>
      <ProductCardsContainer>
        {products.map((product) => <ProductCard key={product.id} {...product}/>)}
      </ProductCardsContainer>
      <ClubBanner />
      <FeaturedProducts />
      <SummerSaleBanner />
    </>
  )
}
