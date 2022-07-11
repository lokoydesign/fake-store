import styled from 'styled-components'

import Basket from './Cart/Basket'
import Summary from './Cart/Summary'

export default function cart() {
  
  return (
    <StyledCartSection>
      <Basket />
      <Summary />
    </StyledCartSection>
  )
}

const StyledCartSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1em;

  @media (min-width: 48em) {
    flex-direction: initial;
  }

  > * {
    border-radius: .25em;
    padding: 1em;
    border: .063em solid var(--color-gray);
    width: 100%;
  }

  .summary {
    @media (min-width: 48em) {
      width: 20em;
    }
  }
`