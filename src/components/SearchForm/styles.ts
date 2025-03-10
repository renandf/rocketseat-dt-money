import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;
    border-radius: 6px;
    border: 0;
    background-color: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-300']};

    &::placehoder {
      color: ${props => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: .75rem;

    padding: 1rem 1rem 1rem .75rem;
    background-color: transparent;
    border: 1px solid ${props => props.theme['green-300']};
    color: ${props => props.theme['green-300']};
    font-weight: 700;
    border-radius: ${props => props.theme['border-radius-md']};
    transition: background-color .2s, border-color .2s, color .2s;

    &:hover {
      background-color: ${props => props.theme['green-700']};
      border-color: ${props => props.theme['green-700']};
      color: ${props => props.theme.white};
    }
  }
`