import * as Dialog from '@radix-ui/react-dialog'
import logoImg from '../../assets/logo-dt-money.svg'
import { NewTransactionModal } from '../NewTransactionModal'

import { HeaderContainer, HeaderWrapper, NewTransactionButton } from './styles'

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New transaction</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContainer>
    </HeaderWrapper>
  )
}