import styled from 'styled-components'
import { Container } from '../../../styles/shared'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.header`
  background: ${(props) => props.theme.black};
  position: sticky;
  top: 0;
`

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.white};
`

export const Logo = styled(NavLink)`
  &:hover {
    text-decoration: underline;
  }
`

export const NavContainer = styled.div`
  position: relative;
  background: transparent;

  button {
    background: transparent;
    border: 0;
    line-height: 0;

    color: ${(props) => props.theme.white};
    cursor: pointer;

    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.blue};
    }
  }
`
