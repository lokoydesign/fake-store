import styled from 'styled-components'

export default function NewsletterBanner() {
  function handleFormSubmit(e) {
    e.preventDefault()
  }

  return (
    <StyledBanner>
      <h6 className="newsletter-banner__title">Sign up to our newsletter</h6>
      <p className="newsletter-banner__description">Get exlusive offers and never miss a sale, sign up today</p>
      <form  className="newsletter-banner__form" onSubmit={handleFormSubmit}>
        <label>E-mail address</label>
        <input type="email" />
        <input type="submit" value="Sign up"/>
      </form>
    </StyledBanner>
  )
}

const className = 'newsletter-banner'
const StyledBanner = styled.div`
  background-color: var(--color-blue);
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  gap: 1em;
  border-radius: .25em;

  .${className}__title {
    text-transform: uppercase;
    font-size: 2rem;
    margin: 0;
  }
  
  .${className}__description {
    margin: 0;
  }

  .${className}__form {
    display: grid;
    grid-template-columns: 1fr;
    gap: .25em .5em;
    margin-block-start: 2em;

    @media (min-width: 26em) {
      grid-template-columns: minmax(auto, 20em) auto;
    }

    label {
      font-size: .85rem;

      @media (min-width: 26em) {
        grid-column: 1 / 3;
      }
    }

    input {
      background-color: var(--color-gray);
      border: none;
      font-size: 1rem;
      border-radius: .25em;
      padding: .75em 1em;
    }

    input[type="submit"] {
      background-color: var(--color-white);
      color: var(--color-blue);
      font-weight: 600;
      cursor: pointer;
    }
  }
`