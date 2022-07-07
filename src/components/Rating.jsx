import styled from 'styled-components'

export default function Rating({ className, rate, count }) {
  return (
    <StyledContainer className={className} title={`${rate} out of 5 dots`}>
      <StyledSpan lit={rate >= 1} />
      <StyledSpan lit={rate >= 2} />
      <StyledSpan lit={rate >= 3} />
      <StyledSpan lit={rate >= 4} />
      <StyledSpan lit={rate >= 5} />
      <span>({count.toLocaleString()})</span>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  gap: .25em;
  font-size: .85rem;
  align-items: center;
`

const StyledSpan = styled.span`
  background-color: ${props => props.lit ? 'var(--color-blue)' : 'var(--color-gray)'};
  width: 1em;
  height: 1em;
  border-radius: 50%;
`