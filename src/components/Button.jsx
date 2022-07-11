import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'


export default function Button({ className, isPrimary = true, to, onClick, children }) {

  if (to)
    return (<StyledLink className={className} isPrimary={isPrimary} to={to}>{children}</StyledLink>)

  return (
    <StyledButton className={className} isPrimary={isPrimary} onClick={onClick}>{children}</StyledButton>
  )
}


const styles = css`
  background-color: ${props => props.isPrimary ? 'var(--color-blue)' : 'var(--color-gray--400)'};
  color: ${props => props.isPrimary ? 'var(--color-white)' : 'var(--color-black)'};
  font-size: 1rem;
  padding: 1em;
  border: none;
  border-radius: .25em;
  width: 100%;
  cursor: pointer;
  transition: filter .25s ease-in-out;
  text-align: center;

  &:hover {
    filter: ${props => props.isPrimary ? 'brightness(110%)' : 'brightness(90%)'};
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