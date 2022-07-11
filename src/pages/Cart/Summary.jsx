import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { taxPercentage } from '../../features/cartSlice'

export default function CartSummary({ className }) {
  const { items, shipping } = useSelector(state => state.cart)

  return (
    <StyledSummary className={className}>
      <h2>Summary</h2>
      <ul className="summary__list">
        <li className="summary__list__item">
          <b>Products:</b>
          <span>{items.reduce((total, { price, amount }) => total += price * (1 - taxPercentage) * amount, 0).toFixed(2)}</span>
        </li>
        <li className="summary__list__item">
          <b>Tax:</b>
          <span>{items.reduce((total, { price, amount }) => total += price * taxPercentage * amount, 0).toFixed(2)}</span>
        </li>
        <li className="summary__list__item">
          <b>Shipping:</b>
          <span>{shipping.price.toFixed(2)}</span>
        </li>
        <li className="summary__list__item summary__list__item--total">
          <b>Total:</b>
          <span>{(items.reduce((total, { price, amount }) => total += price * amount, 0) + shipping.price).toFixed(2)}</span>
        </li>
      </ul>
    </StyledSummary>
  )
}

const className = 'summary'

const StyledSummary = styled.div.attrs(() => ({className}))`
  .${className}__list {
    display: flex;
    flex-direction: column;
    gap: 1em;
    list-style: none;
    padding: 0;

    &__item {
      display: inline-flex;
      justify-content: space-between;
      gap: 1em;

      &--total {
        border-block-start: .063em solid var(--color-gray);
        padding-top: 1em;
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--color-blue);
      }
    }
  }
`