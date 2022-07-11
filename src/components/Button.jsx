import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'


export default function Button({ className, to, onClick, children }) {

  if (to)
    return (<StyledLink className={className} to={to}>{children}</StyledLink>)

  return (
    <StyledButton className={className} onClick={onClick}>{children}</StyledButton>
  )
}


const styles = css`
  background-color: var(--color-blue);
  color: var(--color-white);
  font-size: 1rem;
  padding: 1em;
  border: none;
  border-radius: .25em;
  width: 100%;
  cursor: pointer;
  transition: filter .25s ease-in-out;
  text-align: center;

  &:hover {
    filter: brightness(110%);
  }
`

const StyledLink = styled(Link)`
  ${styles}
  display: block;

  &:hover {
    text-decoration: none;
  }
`

const StyledButton = styled.button`
  ${styles}
`