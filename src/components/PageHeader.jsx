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
  text-transform: capitalize;

  h1 {
    margin-block: 0;
  }
`