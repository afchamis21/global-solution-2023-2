import { useEffect, useState } from 'react'
import { Detail } from '../../../styles/shared'
import { NavMenu } from './nav-menu'
import { HeaderContainer, Logo, Wrapper, NavContainer } from './styles'
import { List, X } from '@phosphor-icons/react'
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleIsMenuOpen() {
    setIsMenuOpen((value) => !value)
  }

  useEffect(() => {
    const closeMenuOnEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      window.addEventListener('keydown', closeMenuOnEscapeKey)
    } else {
      window.removeEventListener('keydown', closeMenuOnEscapeKey)
    }

    return () => {
      window.removeEventListener('keydown', closeMenuOnEscapeKey)
    }
  }, [isMenuOpen])

  return (
    <Wrapper>
      <HeaderContainer>
        <h1>
          <Logo to="/">
            <Detail>Global</Detail> Solution
          </Logo>
        </h1>
        <NavContainer>
          <button onClick={toggleIsMenuOpen}>
            {isMenuOpen ? <X size={32} /> : <List size={32} />}
          </button>
          {isMenuOpen && <NavMenu />}
        </NavContainer>
      </HeaderContainer>
    </Wrapper>
  )
}
