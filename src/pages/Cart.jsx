import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Layout from '../layouts/Main'

import Basket from './Cart/Basket'
import Summary from './Cart/Summary'

import Button from '../components/Button'

export default function Cart() {
  const items = useSelector(state => state.cart.items)
  
  return (
    <StyledLayout>
      <Basket />
      <Summary>
        {items.length > 0 && <Button to="/checkout">Checkout</Button>}
        <Button to="/" isPrimary={false}>Continue shopping</Button>
      </Summary>
    </StyledLayout>
  )
}

const StyledLayout = styled(Layout)`
  gap: 1em;
  align-items: start;

  @media (min-width: 48em) {
    flex-direction: initial;
  }

  > * {
    border-radius: .25em;
    padding: 1em;
    border: .063em solid var(--color-gray);
    width: 100%;
  }
`
