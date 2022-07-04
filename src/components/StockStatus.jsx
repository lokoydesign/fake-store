import styled from 'styled-components'

export default function StockStatus({ amountInStock = 0 }) {
  const stockStr = (0 < amountInStock) ? 'In stock' : 'Out of stock'

  return (
    <StyledContainer>
      <StyledSpan count={amountInStock} />{stockStr}
    </StyledContainer>
  )
}

const StyledContainer = styled.span`
  font-size: .85rem;
  text-align: end;
`

const StyledSpan = styled.span`
  display: inline-block;
  background-color: ${({ count }) => {
    if (count <= 0) {
      return 'var(--color-red)'
    } else {
      return 'var(--color-green)'
    }
  }};
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin-inline-end: .5em;
`