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
`