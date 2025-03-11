import * as Dialog from '@radix-ui/react-dialog'
import { TrendDown, TrendUp, X } from 'phosphor-react'
import { CloseModal, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'

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

          <TransactionType>
            <TransactionTypeButton
              variant="expense"
              value="expense"
            >
              <TrendDown size={20} />
              Expense
            </TransactionTypeButton>

            <TransactionTypeButton
              variant="income"
              value="income"
            >
              <TrendUp size={20} />
              Income
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">
            Add transaction
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}