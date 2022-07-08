import styled from 'styled-components'

export default function AmountSelector({ className, value, onSubtract, onAdd }) {
  return (
    <StyledAmountSelector className={className}>
      <button className="amount-selector__button" onClick={onSubtract}>-</button>
      <input className="amount-selector__number" type="number" min={1} value={value} readOnly />
      <button className="amount-selector__button" onClick={onAdd}>+</button>
    </StyledAmountSelector>
  )
}

const className = 'amount-selector'

const StyledAmountSelector = styled.div.attrs({className})`
  display: flex;
  border: .063em solid var(--color-gray);
  justify-content: flex-start;
  border-radius: .25em;

  > * {
    border: none;
    font-size: 1.4rem;
    padding: .5em;
  }

  .${className}__button {
    cursor: pointer;
  }
  
  .${className}__number {
    width: 5ch;
    text-align: center;
  }
`