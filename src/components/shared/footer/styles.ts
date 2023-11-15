import styled from 'styled-components'
import { Container } from '../../../styles/shared'

export const Wrapper = styled.footer`
  background: ${(props) => props.theme.black};
`

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.white};
`
