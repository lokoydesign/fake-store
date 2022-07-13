import styled from 'styled-components'

import Layout from '../layouts/Main'

import FeaturedProducts from '../sections/FeaturedProducts'

export default function NotFoundPage() {
  return (
    <Layout>
      <StyledNotFoundSection>
        <h1 className="not-found__title">Not found</h1>
        <p className="not-found__description">Sorry, We were unable to find what you were looking for</p>
      </StyledNotFoundSection>
      <FeaturedProducts/>
    </Layout>
  )
}

const className = 'not-found'
const StyledNotFoundSection = styled.section.attrs(() => ({className}))`
  min-height: 50vh;

  .${className}__title {
    font-size: 2rem;
  }
`