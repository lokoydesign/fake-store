import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { shippingOptions, setShippingOption } from '../../features/cartSlice'

export default function Shipping() {
  const { shipping: shippingOption } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  return (
    <StyledShipping>
      <h1>Shipping options</h1>

      {shippingOptions.map(option => <div
        className={`shipping__option ${shippingOption.id === option.id && 'shipping__option--selected'}`}
        onClick={() => dispatch(setShippingOption(option))}
      >
        <span className="shipping__option__name">{option.name}</span>
        <span className="shipping__option__price">{option.price.toFixed(2)}</span>
      </div>)}
    </StyledShipping>
  )
}

const className = 'shipping'

const StyledShipping = styled.div.attrs(() => ({className}))`
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