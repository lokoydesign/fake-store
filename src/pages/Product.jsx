import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { addItemToCart } from '../features/cartSlice'

import { ENDPOINTS } from '../constants'

import ClubBanner from '../banners/Club'
import FeaturedProducts from '../sections/FeaturedProducts'

import Rating from '../components/Rating'
import StockStatus from '../components/StockStatus'
import Button from '../components/Button'
import AmountSelector from '../components/AmountSelector'

export default function ProductPage() {
  const [ data, setData ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ amount, setAmount ] = useState(1)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(function() {
    async function fetchAndSetData() {
      setIsLoading(true)

      try {
        const data = await fetch(`${ENDPOINTS.PRODUCT}/${params.id}`).then(res => res.json())
        setData(data)
      } catch(err) { console.error(err) }

      setIsLoading(false)
    }

    fetchAndSetData()
  }, [params.id])

  if (isLoading) return (
    <>
      <StyledProductLoadingSection>
        <div className="product__image-wrapper"></div>
        <span className="product__title"></span>
        <span className="product__description"></span>
        <span className="product__price"></span>
        <span className="product__rating"></span>
        <span className="product__stock-status"></span>
        <span className="product__amount-selector"></span>
        <span className="product__button"></span>
      </StyledProductLoadingSection>

      <ClubBanner />
    </>
  )

  return (
    <>
      <StyledProductSection isLoading={isLoading}>
        <div className="product__image-wrapper">
          {data.image && <img className="product__image" src={data.image} alt={data.title} />}
        </div>
        <h1 className="product__title">{data.title}</h1>
        <p className="product__description">{data.description}</p>
        <strong className="product__price">{data.price.toFixed(2)} Credits</strong>
        <Rating className="product__rating" {...data.rating} />
        <StockStatus className="product__stock-status" amountInStock={999} />
        
        <AmountSelector
          className="product__amount-selector"
          onSubtract={() => setAmount(amount > 1 ? amount-1 : amount)}
          onAdd={() => setAmount(amount+1)}
          value={amount}
        />
        
        <Button className="product__button" text="Add to cart" onClick={() => dispatch(addItemToCart({...data, amount: 1}))}/>
      </StyledProductSection>

      <ClubBanner />
      
      <FeaturedProducts title="You might also like" category={data.category} />
    </>
  )
}

const className = 'product'

const StyledProductSection = styled.section.attrs(props => ({className}))`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1em;
  justify-items: start;

  @media (min-width: 48em) {
    gap: 1em 4em;
  }

  > * {
    grid-column: span 12;

    @media (min-width: 48em) {
      grid-column: span 6;
    }
  }

  .${className}__image-wrapper {
    @media (min-width: 48em) {
      grid-row: span 7;
    }
    
  }

  .${className}__title {
    margin-block: 2em 0;
  }

  .${className}__price {
    font-size: 1.4rem;
    color: var(--color-blue);
  }

  .${className}__rating,
  .${className}__stock-status,
  .${className}__amount-selector,
  .${className}__button {
    grid-column: span 6;

    @media (min-width: 48em) {
      grid-column: span 3;
    }
  }

  .${className}__stock-status {
    justify-self: end;
  }

  .${className}__amount-selector {
    @media (min-width: 26em) {
      grid-column: span 4;
    }

    @media (min-width: 64em) {
      grid-column: span 2;
    }
  }

  .${className}__button {
    @media (min-width: 26em) {
      grid-column: span 8;
    }

    @media (min-width: 48em) {
      grid-column: span 6;
    }

    @media (min-width: 64em) {
      grid-column: span 4;
    }
  }
`

const StyledProductLoadingSection = styled(StyledProductSection)`
  > * {
    background-color: var(--color-gray--500);
    width: 100%;
    height: 2em;
    border-radius: .25em;
  }

  .${className}__image-wrapper {
    height: 60vh;
  }

  .${className}__description {
    height: 20em;
  }

  .${className}__price,
  .${className}__rating,
  .${className}__stock-status {
    max-width: 10em;
  }

  .${className}__amount-selector {
    border: none;
  }
`
