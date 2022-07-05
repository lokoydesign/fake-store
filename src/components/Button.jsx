import styled from 'styled-components'

export default function Button({ className, onClick, text }) {
  return (
    <StyledButton className={className} onClick={onClick}>{text}</StyledButton>
  )
}

const StyledButton = styled.button`
  background-color: var(--color-blue);
  color: var(--color-white);
  font-size: 1rem;
  font-weight: 500;
  padding: 1em;
  border: none;
  border-radius: .25em;
  width: 100%;
  cursor: pointer;
  transition: filter .25s ease-in-out;

  &:hover {
    filter: brightness(110%);
  }
`