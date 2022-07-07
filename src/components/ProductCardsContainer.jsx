import styled from 'styled-components'

import ProductCard from './ProductCard'

export default function ProductCardsContainer({ isLoading, title, size, children }) {
  if (isLoading) return (
    <StyledContainer>
      {title && <StyledLoadingTitle />}
      {Array(size).fill(null).map((value, i) => <ProductCard key={i} isLoading={true} />)}
    </StyledContainer>
  )
  
  return (
    <StyledContainer>
      {title && <StyledTitle>{title}</StyledTitle>}
      {children}
    </StyledContainer>
  )
}

const StyledContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;

  > * {
    grid-column: span 4;
    @media (min-width: 38em) { grid-column: span 2; }
    @media (min-width: 74em) { grid-column: span 1; }
  }
`

const StyledLoadingTitle = styled.div`
  background-color: var(--color-gray--500);
  width: 25%;
  height: 1.5em;
  border-radius: .5em;
  grid-column: span 4;
`

const StyledTitle = styled.h3`
  grid-column: span 4;
  margin: 0;
  text-transform: capitalize;
  font-weight: 600;
`