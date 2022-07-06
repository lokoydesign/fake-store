import styled from 'styled-components'

export default function PageHeader({ title, children }) {
  return (
    <StyledHeader>
      {title && <h1>{title}</h1>}
      {children}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  margin: 2em 1em;
  max-width: 80em;
  text-transform: capitalize;

  @media (min-width: 82em) {
    margin-inline: auto;
  }
`