import styled from 'styled-components'

export default function MainLayout({ className, children }) {
  return (<StyledMain className={className}>{children}</StyledMain>)
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin: 2em 1em;
  width: calc(100% - 2em);
  max-width: 80em;
  min-height: 50vh;

  @media (min-width: 48em) {
    margin-block: 4em;
  }

  @media (min-width: 82em) {
    margin-inline: auto;
    gap: 4em;
  }
`