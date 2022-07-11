import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

import {
  addToItemAmount,
  subtractFromItemAmount,
  removeItemFromCart
} from '../../features/cartSlice'

import AmountSelector from '../../components/AmountSelector'

export default function Basket({ className }) {
  const { items } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  return (
    <StyledBasket className={className}>
      <h1>Basket</h1>
      {items.map(product => <div className="basket__product">
        <img className="basket__product__image" src={product.image} alt={product.title} />
        <h6 className="basket__product__title">{product.title}</h6>
        <b className="basket__product__price">{(product.price * product.amount).toFixed(2)} ({product.price.toFixed(2)}) Credits</b>
        <StyledAmountSelector
          className="basket__product__amount-selector"
          onAdd={() => dispatch(addToItemAmount({id: product.id, amount: 1}))}
          onSubtract={() => 
            product.amount > 1 && dispatch(subtractFromItemAmount({id: product.id, amount: 1}))
          }
          value={product.amount}
        />
        <StyledTrashIcon icon={faTrashCan} onClick={() => dispatch(removeItemFromCart(product.id))} />
      </div>)}
    </StyledBasket>
  )
}

const className = 'basket'

const StyledBasket = styled.div.attrs(() => ({className}))`
  display: flex;
  flex-direction: column;
  gap: 2em;

  .${className}__product {
    display: grid;
    align-items: start;
    gap: .5em 1em;
    grid-template-columns: auto 1fr;
    
    grid-template-areas:
      "img img"
      "title title"
      "price price"
      "amount trash"
    ;

    @media (min-width: 26em) {
      grid-template-columns: minmax(2em, 10em) repeat(2, auto) minmax(0, 1fr);
      grid-template-areas:
        "img title title title"
        "img price price price"
        "img amount trash ..."
        "img ... ... ..."
      ;
    }
    
    &__image {
      grid-area: img;
    }

    &__title {
      grid-area: title;
      margin: 0;
      font-size: 1rem;
      width: 100%;
      font-weight: 600;

      @media (min-width: 48em) {
        font-size: 1.2rem;
      }
    }

    &__price {
      grid-area: price;
      color: var(--color-blue);
    }

    &__amount-selector {
      /* grid-area: amount; */
    }
  }

  .${className}__product + .${className}__product {
    border-block-start: .063em solid var(--color-gray--500);
    padding-block-start: 2em;
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