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
  display: inline-flex;
  border-radius: .25em;
  overflow: hidden;

  > * {
    border: none;
    border: .063em solid var(--color-gray);
    padding: .5em;
  }

  .${className}__button {
    background-color: var(--color-gray);
    cursor: pointer;
  }
  
  .${className}__number {
    border-inline: none;
    width: 5ch;
    text-align: center;
  }
`