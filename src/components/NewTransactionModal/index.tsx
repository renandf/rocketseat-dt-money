import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { TrendDown, TrendUp, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { CloseModal, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'

const newTransactionFormSchema = z.object({
  description: z.string(),
  value: z.number(),
  category: z.string(),
  type: z.enum(['income', 'expense']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(data)
  }

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

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Description"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Value"
            required
            {...register('value', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Category"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
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
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Add transaction
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}