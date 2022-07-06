import styled from 'styled-components'

export default function ProductCardsContainer({ isLoading, title, size, children }) {
  if (isLoading) return (
    <StyledContainer>
      {title && <StyledLoadingTitle />}
      {Array(size).fill(null).map((value, i) => <StyledLoadingCard key={i} />)}
    </StyledContainer>
  )
  
  return (
    <StyledContainer>
      {title && <StyledTitle>{title}</StyledTitle>}
      {children}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  margin-block: 2em;
  margin-inline: 1em;
  max-width: 80em;

  @media (min-width: 82em) {
    margin-inline: auto;
  }

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

const StyledLoadingCard = styled.div`
  background-color: var(--color-gray--500);
  width: 100%;
  min-height: 32em;
  border-radius: .5em;
`