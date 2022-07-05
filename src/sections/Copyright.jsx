import styled from 'styled-components'

export default function Copyright() {
  return (
    <StyledDiv>
      <p>Copyright  © Fake Store 2022</p>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  background-color: var(--color-blue);
  color: var(--color-white);
  padding: 1em;
  border-block-start: .063em solid var(--color-white);

  @media (min-width: 82em) {
    padding-inline: calc((100% - 80em) / 2);
  }

  p {
    font-size: .85rem;
    margin: 0;
  }
`