import styled from 'styled-components'

export default function ProductCardsContainer({ title, children }) {
  return (
    <StyledContainer>
      <h3>{title}</h3>
      {children}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;

  > * {
    grid-column: span 4;
  
    @media (min-width: 38em) {
      grid-column: span 2;
    }

    @media (min-width: 70em) {
      grid-column: span 1;
    }
  }

  h3 {
    grid-column: span 4;
    margin: 0;
  }
`