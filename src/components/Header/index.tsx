import logoImg from '../../assets/logo-dt-money.svg'

import { HeaderContainer, HeaderWrapper, NewTransactionButton } from './styles'

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <img src={logoImg} alt="" />

        <NewTransactionButton>New transaction</NewTransactionButton>
      </HeaderContainer>
    </HeaderWrapper>
  )
}