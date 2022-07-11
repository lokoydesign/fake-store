import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { taxPercentage } from '../../features/cartSlice'

export default function CartSummary({ className, children }) {
  const [ costs, setCosts ] = useState({products: 0, tax: 0, shipping: 0, total: 0})
  const { items, shipping } = useSelector(state => state.cart)

  useEffect(function() {
    setCosts({
      ...costs,
      products: items.reduce((total, { price, amount }) => total += price * (1 - taxPercentage) * amount, 0),
      tax: items.reduce((total, { price, amount }) => total += price * taxPercentage * amount, 0),
      shipping: items.length > 0 ? shipping.price : 0,
      total: items.length > 0 ? items.reduce((total, { price, amount }) => total += price * amount, 0) + shipping.price : 0
    })
  }, [items, shipping])

  return (
    <StyledSummary className={className}>
      <h2>Summary</h2>
      <ul className="summary__list">
        <li className="summary__list__item">
          <b>Products:</b>
          <span>{costs.products.toFixed(2)}</span>
        </li>
        <li className="summary__list__item">
          <b>Tax:</b>
          <span>{costs.tax.toFixed(2)}</span>
        </li>
        <li className="summary__list__item">
          <b>Shipping:</b>
          <span>{costs.shipping.toFixed(2)}</span>
        </li>
        <li className="summary__list__item summary__list__item--total">
          <b>Total:</b>
          <span>{costs.total.toFixed(2)}</span>
        </li>
      </ul>
      {children}
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