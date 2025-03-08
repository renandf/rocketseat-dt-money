import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  padding: 2.5rem 0 7.5rem;
  background-color: ${props => props.theme['gray-900']};
`

export const HeaderContainer = styled.div`
  margin: 0 auto;
  padding-inline: 1.5rem;
  width: 100%;
  max-width: ${props => props.theme['container-content-max-width']};;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-height: 40px;
  }
`

export const NewTransactionButton = styled.button`
  padding: .875rem 1.25rem;
  border: 0;
  background-color: ${props => props.theme['green-500']};
  color: ${props => props.theme.white};
  font-weight: ${props => props.theme['font-weight-bold']};
  border-radius: ${props => props.theme['border-radius-md']};
  cursor: pointer;
  transition: background-color .2s;

  &:hover {
    background-color: ${props => props.theme['green-700']};
  }
`