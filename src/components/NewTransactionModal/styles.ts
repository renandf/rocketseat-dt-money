import * as Dialog from '@radix-ui/react-dialog'
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

      &:hover {
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