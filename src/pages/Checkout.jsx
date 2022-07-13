import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { clearCart } from '../features/cartSlice'

import Layout from '../layouts/Main'

import Shipping from './Cart/Shipping'
import Payment from './Cart/Payment'
import Summary from './Cart/Summary'

import Button from '../components/Button'

export default function Checkout() {
  const dispatch = useDispatch()

  function handleOrder() {
    alert('Order placed')
    dispatch(clearCart())
  }

  return (
    <StyledLayout>
      <Shipping />
      <Payment />
      <StyledSummary>
        <Button onClick={handleOrder}>Place order</Button>
      </StyledSummary>
    </StyledLayout>
  )
}

const StyledLayout = styled(Layout)`
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
`

const StyledSummary = styled(Summary)`
  @media (min-width: 48em) {
    grid-row: 1 / 3;
    grid-column: 2;
  }
`
