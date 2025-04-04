import { CurrencyDollar, TrendDown, TrendUp } from 'phosphor-react'
import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { valueFormatter } from '../../utils/formatter'
import { SummaryCard, SummaryContainer } from './styled'

export function Summary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    return (
      transactions.reduce(
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
    )
  }, [transactions])

  return (
    <SummaryContainer>
      <SummaryCard variant='income'>
        <header>
          <span>Income</span>
          <TrendUp size={24} />
        </header>

        <strong>{valueFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard variant='expense'>
        <header>
          <span>Expenses</span>
          <TrendDown size={24} />
        </header>

        <strong>{valueFormatter.format(summary.expenses)}</strong>
      </SummaryCard>

      <SummaryCard variant='total'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={24} />
        </header>

        <strong>{valueFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}