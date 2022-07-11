import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Rating from './Rating'
import StockStatus from './StockStatus'
import Button from './Button'

export default function ProductCard(props) {
  const { isLoading, id, title, image, rating, price } = props

  if (isLoading) return (
    <StyledLoadingProductCard />
  )

  return (
    <StyledProductCard>
      <Link className="product-card__image-wrapper" to={`/product/${id}`}>
        <img className="product-card__image" src={image} alt={title} />
      </Link>
      
      <Link
        to={`/product/${id}`}
        className="product-card__title"
        title={title}>{title.length > 26 ? title.substring(0, 26)+'...' : title}</Link>
      
      <span className="product-card__price">{price.toFixed(2)} Credits</span>
      <Rating className="product-card__rating" {...rating} />
      <StockStatus className="product-card__stock-status" amountInStock={999} />
      <Button className="product-card__button" to={`/product/${id}`}>View and buy</Button>
    </StyledProductCard>
  )
}

const className = 'product-card'

const StyledLoadingProductCard = styled.div`
  background-color: var(--color-gray);
  width: 100%;
  min-height: 32em;
  border-radius: .5em;
`

const StyledProductCard = styled.div.attrs(props => ({className}))`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr repeat(4, auto);
  border: 1px solid var(--color-gray);
  border-radius: .25em;
  padding: 1em;
  gap: .5em;
  align-items: end;
  align-content: end;

  .${className}__image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: span 2;
    height: 20em;
    padding-block-end: 1em;
  }

  .${className}__image {
    max-height: 100%;
  }

  .${className}__title {
    grid-column: span 2;
    color: var(--color-black);
    font-weight: 500;

    &:hover {
      color: var(--color-blue);
      text-decoration: none;
    }
  }

  .${className}__price {
    grid-column: span 2;
    color: var(--color-blue);
    font-size: 1.2rem;
    font-weight: 600;
    margin-block-end: 1em;
  }

  .${className}__button {
    grid-column: span 2;
  }
`
