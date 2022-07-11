import styled from 'styled-components'

import Shipping from './Cart/Shipping'
import Payment from './Cart/Payment'
import Summary from './Cart/Summary'

import Button from '../components/Button'

export default function Checkout() {
  function handleOrder() {
    alert('Order placed')
  }

  return (
    <StyledCheckoutSection>
      <Shipping />
      <Payment />
      <Summary>
        <Button onClick={handleOrder}>Place order</Button>
      </Summary>
    </StyledCheckoutSection>
  )
}

const className = 'checkout'

const StyledCheckoutSection = styled.section.attrs(() => ({className}))`
  display: grid;
  align-items: start;
  gap: 1em;

  @media (min-width: 48em) {
    grid-template-columns: 1fr 20em;
  }

  > * {
    border-radius: .25em;
    padding: 1em;
    border: .063em solid var(--color-gray);
    width: 100%;
  }

  .summary {
    grid-row: 1 / 3;
    grid-column: 2;
  }
`