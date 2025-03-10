import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { Price, TransactionsContainer, TransactionsTable } from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        
        <TransactionsTable>
          <tbody>
            <tr>
              <td>Activity</td>
              <td>
                <Price variant="income">$12,000.00</Price>
              </td>
              <td>Sell</td>
              <td>13 Apr 2025</td>
            </tr>
            <tr>
              <td>Activity</td>
              <td>
                <Price>-$8,000.00</Price>
              </td>
              <td>Sell</td>
              <td>13 Apr 2025</td>
            </tr>
            <tr>
              <td>Activity</td>
              <td>
                <Price variant="income">$12,000.00</Price>
              </td>
              <td>Sell</td>
              <td>13 Apr 2025</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

    </div>
  )
}