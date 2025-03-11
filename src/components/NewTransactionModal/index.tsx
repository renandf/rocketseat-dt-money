import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { CloseModal, Content, Overlay } from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>
          New transaction
        </Dialog.Title>

        <CloseModal>
          <X size={24} />
        </CloseModal>

        <form action="">
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Value" required />
          <input type="text" placeholder="Category" required />

          <button type="submit">
            Add transaction
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}