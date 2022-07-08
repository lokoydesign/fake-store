import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

import AmountSelector from '../components/AmountSelector'

import {
  addToItemAmount,
  subtractFromItemAmount,
  removeItemFromCart
} from '../features/cartSlice'

const taxPercentage = .25
const shippingFee = 100

export default function CartPage() {
  const { items } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  return (
    <StyledCartSection>
      <div className="cart__basket">
        <h1>Cart</h1>
        {items.map(product => <div className="cart__product">
          <img className="cart__product__image" src={product.image} alt={product.title} />
          <h6 className="cart__product__title">{product.title}</h6>
          <StyledAmountSelector
            className="cart__product__amount-selector"
            onAdd={() => dispatch(addToItemAmount({id: product.id, amount: 1}))}
            onSubtract={() => 
              product.amount > 1 && dispatch(subtractFromItemAmount({id: product.id, amount: 1}))
            }
            value={product.amount}
          />
          <StyledTrashIcon icon={faTrashCan} onClick={() => dispatch(removeItemFromCart(product.id))} />
          <b className="cart__product__price">{(product.price * product.amount).toFixed(2)} Credits</b>
        </div>)}
      </div>

      <div className="cart__summary">
        <h2>Summary</h2>
        <ul className="cart__summary__list">
          <li className="cart__summary__list__item">
            <b>Products:</b>
            <span>{items.reduce((total, { price, amount }) => total += price * (1 - taxPercentage) * amount, 0).toFixed(2)}</span>
          </li>
          <li className="cart__summary__list__item">
            <b>Tax:</b>
            <span>{items.reduce((total, { price, amount }) => total += price * taxPercentage * amount, 0).toFixed(2)}</span>
          </li>
          <li className="cart__summary__list__item">
            <b>Shipping:</b>
            <span>{shippingFee.toFixed(2)}</span>
          </li>
          <li className="cart__summary__list__item cart__summary__list__item--total">
            <b>Total:</b>
            <span>{(items.reduce((total, { price, amount }) => total += price * amount, 0) + shippingFee).toFixed(2)}</span>
          </li>
        </ul>
      </div>
    </StyledCartSection>
  )
}

const className = 'cart'

const StyledCartSection = styled.section.attrs(props => ({className}))`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;

  > * {
    border-radius: .25em;
    padding: 1em;
    border: .063em solid var(--color-gray);
  }
  
  .${className}__basket {
    display: flex;
    flex-direction: column;
    gap: 2em;
    flex-grow: 1;
  }

  .${className}__product {
    display: grid;
    grid-template-columns: 2em repeat(2, minmax(0, auto)) 1fr;
    align-items: start;
    gap: .5em 1em;

    @media (min-width: 48em) {
      grid-template-columns: 10em repeat(2, minmax(0, auto)) 1fr;
    }

    &__image {
      grid-row: span 3;
    }

    &__title {
      grid-column: span 3;
      margin: 0;
      font-size: 1rem;
      width: 100%;
      font-weight: 600;
    }

    &__price {
      color: var(--color-blue);
      margin-inline-start: auto;
    }
  }

  .${className}__product + .${className}__product {
    border-block-start: .063em solid var(--color-gray--500);
    padding-block-start: 2em;
  }

  .${className}__summary {
    min-width: 20em;

    &__list {
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
  }
`

const StyledAmountSelector = styled(AmountSelector)`
  > * {
    font-size: .925rem;
  }
`

const StyledTrashIcon = styled(FontAwesomeIcon)`
  border: .063em solid var(--color-gray);
  border-radius: .25em;
  padding: .5em;
  cursor: pointer;
`