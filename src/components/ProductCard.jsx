import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import Rating from './Rating'
import StockStatus from './StockStatus'
import Button from './Button'

import { addItemToCart } from '../features/cartSlice'

export default function ProductCard({ id, title, image, rating, price }) {
  const dispatch = useDispatch()

  function handleAddToCart() {
    dispatch(addItemToCart(id))
  }

  return (
    <StyledCard>
      <StyledImgWrapper href={`/product/${id}`}>
        <StyledCardImg src={image} />
      </StyledImgWrapper>
      <StyledCardTitle href={`/product/${id}`} title={title}>{title.length > 26 ? title.substring(0, 26)+'...' : title}</StyledCardTitle>
      <StyledCardPrice>{price.toFixed(2)} Credits</StyledCardPrice>
      <Rating {...rating} />
      <StockStatus amountInStock={999} />
      <StyledCardButton text="Add to cart" onClick={handleAddToCart} />
    </StyledCard>
  )
}

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr repeat(4, auto);
  border: 1px solid var(--color-gray);
  border-radius: .25em;
  padding: 1em;
  gap: .5em;
  align-items: end;
  align-content: end;
`

const StyledImgWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: span 2;
  height: 20em;
  padding-block-end: 1em;
`

const StyledCardImg = styled.img`
  max-height: 100%;
`

const StyledCardTitle = styled.a`
  grid-column: span 2;
  color: var(--color-black);
  font-weight: 500;

  &:hover {
    color: var(--color-blue);
    text-decoration: none;
  }
`

const StyledCardPrice = styled.b`
  grid-column: span 2;
  color: var(--color-blue);
  font-size: 1.2rem;
  font-weight: 600;
  margin-block-end: 1em;
`

const StyledCardButton = styled(Button)`
  grid-column: span 2;
`