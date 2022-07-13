import styled from 'styled-components'

export default function AddressForm({ className }) {
  return (
    <StyledFormSection className={className}>
      <h2>Address</h2>
      <form className="address-form">
        <label>
          Name
          <input type="text" required/>
        </label>
        <label>
          Email
          <input type="email" required/>
        </label>
        <label>
          Address
          <input type="text" required/>
        </label>
        <label>
          Country
          <input type="text" required/>
        </label>
      </form>
    </StyledFormSection>
  )
}

const StyledFormSection = styled.form`
  .address-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1em;

    > * {
      width: 100%;
      
      @media (min-width: 48em) {
        width: calc(50% - .5rem);
      }
    }

    label {
      display: flex;
      flex-direction: column;
      font-size: .85rem;
    }

    input {
      width: 100%;
      font-size: 1rem;
      background-color: var(--color-gray--300);
      padding: .5em 1em;
      border: .063em solid var(--color-gray--500);
      border-radius: .25em;
    }
  }
`