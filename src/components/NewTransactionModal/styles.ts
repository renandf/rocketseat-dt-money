import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, .75);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 32rem;
  border-radius: ${props => props.theme['border-radius-md']};
  padding: 2.5rem 3rem;
  background-color: ${props => props.theme['gray-800']};

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-block-start: 2rem;

    input {
      padding: 1rem;
      border: 0;
      border-radius: ${props => props.theme['border-radius-md']};
      background-color: ${props => props.theme['gray-900']};
      color: ${props => props.theme['gray-300']};

      &::placeholder {
        color: ${props => props.theme['gray-500']};
      }
    }

    button[type="submit"] {
      margin-block-start: 1.5rem;
      padding: 1rem 1.25rem;
      background-color: ${props => props.theme['green-500']};
      color: ${props => props.theme.white};
      font-weight: 700;
      border: 0;
      border-radius: ${props => props.theme['border-radius-md']};
      cursor: pointer;
      transition: background-color .2s;

      &:disabled {
        background-color: ${props => props.theme['gray-700']};
        border-color: ${props => props.theme['gray-700']};
        color: ${props => props.theme['gray-900']};
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background-color: ${props => props.theme['green-700']};
      }
    }
  }
`

export const CloseModal = styled(Dialog.Close)`
  position: absolute;
  top: 1.2rem;
  right: 1.25rem;
  padding: .25rem;
  border: 0;
  border-radius: ${props => props.theme['border-radius-md']};
  line-height: 0;
  background-color: transparent;
  cursor: pointer;
  color: ${props => props.theme['gray-500']};
  transition: background-color .2s, color .2s;

  &:hover {
    background-color: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-300']};
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-block-start: .5rem;
`

interface TransactionButtonProps {
  variant: 'income' | 'expense';
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  border: 0;
  border-radius: ${props => props.theme['border-radius-md']};
  background-color: ${props => props.theme['gray-700']};
  color: ${props => props.theme['gray-300']};
  cursor: pointer;
  transition: background-color .2s, color .2s;

  svg {
    color: ${
      props => props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-200']
    }
  }

  &[data-state='unchecked']:hover {
    background-color: ${props => props.theme['gray-600']};
    color: ${
      props => props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-200']
    }
  }

  &[data-state='checked'] {
    text-decoration: underline;
    text-underline-offset: .25rem;
    color: ${props => props.theme.white};
    background-color: ${
      props => props.variant === 'income'
      ? props.theme['green-500']
      : props.theme['red-500']
    };

    svg {
      color: ${props => props.theme.white};
    }
  }
`