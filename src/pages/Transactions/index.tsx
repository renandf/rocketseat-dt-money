import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, valueFormatter } from '../../utils/formatter'
import { TransactionsContainer, TransactionsTable, Value } from './styles'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>
                    <Value variant={transaction.type}>
                      {transaction.type === 'expense' && '- '}
                      {valueFormatter.format(transaction.value)}
                    </Value>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(
                      new Date(transaction.createdAt)
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

    </div>
  )
}