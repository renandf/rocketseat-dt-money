import { CurrencyDollar, TrendDown, TrendUp } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { SummaryCard, SummaryContainer } from './styled'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.value
        acc.total += transaction.value
      } else {
        acc.expenses += transaction.value
        acc.total -= transaction.value
      }

      return acc
    },
    {
      income: 0,
      expenses: 0,
      total: 0
    })

  return (
    <SummaryContainer>
      <SummaryCard variant='income'>
        <header>
          <span>Income</span>
          <TrendUp size={24} />
        </header>

        <strong>{summary.income}</strong>
      </SummaryCard>

      <SummaryCard variant='expense'>
        <header>
          <span>Expenses</span>
          <TrendDown size={24} />
        </header>

        <strong>{summary.expenses}</strong>
      </SummaryCard>

      <SummaryCard variant='total'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={24} />
        </header>

        <strong>{summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}