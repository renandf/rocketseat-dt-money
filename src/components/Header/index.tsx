import * as Dialog from '@radix-ui/react-dialog'
import logoImg from '../../assets/logo-dt-money.svg'

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

          <Dialog.Portal>
            <Dialog.Overlay />

            <Dialog.Content>
              <Dialog.Title>
                New transaction
              </Dialog.Title>

              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContainer>
    </HeaderWrapper>
  )
}