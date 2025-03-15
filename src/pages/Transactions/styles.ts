import styled from 'styled-components';

export const TransactionsContainer = styled.main`
  margin: 4rem auto 0;
  padding-inline: 1.5rem;
  width: 100%;
  max-width: ${props => props.theme['container-content-max-width']};
  `

export const TransactionsTable = styled.table`
  width: 100%;
  margin-block-start: 1.5rem;
  border-collapse: separate;
  border-spacing: 0 .5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${props => props.theme['gray-700']};

    &:first-child {
      width: 40%;
      border-start-start-radius: ${props => props.theme['border-radius-md']};
      border-end-start-radius: ${props => props.theme['border-radius-md']};
    }

    &:last-child {
      width: 40%;
      border-start-end-radius: ${props => props.theme['border-radius-md']};
      border-end-end-radius: ${props => props.theme['border-radius-md']};
    }
  }
`

interface ValueProps {
  variant?: 'income' | 'expense';
}

export const Value = styled.span<ValueProps>`

  color: ${
    props => props.variant === 'income'
    ? props.theme['green-300']
    : props.theme['red-200']
  }
`