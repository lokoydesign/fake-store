import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { paymentOptions, setPaymentOption } from '../../features/cartSlice'

export default function Payment() {
  const { payment: paymentOption } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  return (
    <StyledPayment>
      <h2>Payment options</h2>

      {paymentOptions.map(option => <div
        className={`payment__option ${paymentOption.id === option.id && 'payment__option--selected'}`}
        onClick={() => dispatch(setPaymentOption(option))}
      >
        <span className="payment__option__name">{option.name}</span>
      </div>)}
    </StyledPayment>
  )
}

const className = 'payment'

const StyledPayment = styled.section.attrs(() => ({className}))`
  display: flex;
  flex-direction: column;
  gap: 1em;

  .${className}__option {
    display: flex;
    gap: 2em;
    background-color: var(--color-gray--500);
    padding: 1em;
    font-weight: 500;
    border-radius: .5em;
    cursor: pointer;

    &::before {
      background-color: var(--color-gray);
      display: block;
      content: '';
      width: 1em;
      height: 1em;
      border-radius: 50%;
    }
  
    &--selected {
      font-weight: 600;
    }

    &--selected::before {
      background-color: var(--color-green);
    }

    &__name {
      flex: 1;
    }
  }
`