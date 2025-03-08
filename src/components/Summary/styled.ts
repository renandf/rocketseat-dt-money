import styled, { css } from 'styled-components';

export const SummaryContainer = styled.section`
  margin: 0 auto;
  padding-inline: 1.5rem;
  width: 100%;
  max-width: ${props => props.theme['container-content-max-width']};

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-block-start: -5rem;
`

interface SummaryCardProps {
  variant?: 'income' | 'expense' | 'total';
}

export const SummaryCard = styled.div<SummaryCardProps>`
  padding: 2rem;
  background-color: ${props => props.theme['gray-600']};
  border-radius: ${props => props.theme['border-radius-md']};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-block-start: 1rem;
    font-size: 2rem;
  }

  ${props => props.variant === 'income' && css`
    svg {
      color: ${props.theme['green-300']};
    }
  `}

  ${props => props.variant === 'expense' && css`
    svg {
      color: ${props.theme['red-300']};
    }
  `}

  ${props => props.variant === 'total' && css`
    background-color: ${props.theme['green-700']};

    svg {
      color: ${props.theme.white};
    }
  `}
`