import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Basket from './Cart/Basket'
import Summary from './Cart/Summary'

import Button from '../components/Button'

export default function Cart() {
  const items = useSelector(state => state.cart.items)
  const navigate = useNavigate()
  
  return (
    <StyledCartSection>
      <Basket />
      <Summary>
        {items.length > 0 && <Button text="Checkout" onClick={() => navigate('/checkout')}/>}
      </Summary>
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