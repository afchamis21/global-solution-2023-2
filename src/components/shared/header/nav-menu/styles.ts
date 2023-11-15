import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(100%);
  background: ${(props) => props.theme.black};
  border: 1px solid ${(props) => props.theme.white};
  padding: 1rem;
  box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: max-content;
  max-width: calc(100vw - 4rem);
  text-align: right;
`

export const Link = styled(NavLink)`
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme.blue};
  }

  &[aria-current] {
    color: ${(props) => props.theme.blue};
  }
`
