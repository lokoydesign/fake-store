import styled from 'styled-components'
import { Link } from 'react-router-dom'

import summerSaleImg from '../assets/images/banners/summer_sale.png'

export default function SummerSaleBanner() {
  return (
    <StyledBannerLink to="/sale">
      <img src={summerSaleImg} alt="Summer sale banner" />
    </StyledBannerLink>
  )
}

const StyledBannerLink = styled(Link)`
  display: block;
  margin-block: 4em;
  max-width: 80em;
  margin-inline: 1em;

  @media (min-width: 82em) {
    margin-inline: auto;
  }
`