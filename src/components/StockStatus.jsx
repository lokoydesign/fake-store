import styled from 'styled-components'

export default function StockStatus({ amountInStock = 0 }) {
  let stockStr = 'Out of stock'

  if (99 < amountInStock) {
    stockStr = '100+ in stock'
  } else if (0 < amountInStock) {
    stockStr = `${amountInStock} in stock`
  }

  return (
    <StyledContainer>
      <StyledSpan count={amountInStock} />
      <span>{stockStr}</span>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: inline-flex;
  font-size: .85rem;
  justify-content: flex-end;
  align-items: center;
  gap: .5em;
`

const StyledSpan = styled.span`
  display: inline-block;
  background-color: ${({ count }) => (count > 0) ? 'var(--color-green)' : 'var(--color-red)'};
  width: 1em;
  height: 1em;
  border-radius: 50%;
`