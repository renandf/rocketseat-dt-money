import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styled'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard variant='income'>
        <header>
          <span>Income</span>
          <ArrowCircleUp size={32} />
        </header>

        <strong>$17,400.00</strong>
      </SummaryCard>

      <SummaryCard variant='expense'>
        <header>
          <span>Expenses</span>
          <ArrowCircleDown size={32} />
        </header>

        <strong>$17,400.00</strong>
      </SummaryCard>

      <SummaryCard variant='total'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>

        <strong>$17,400.00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}