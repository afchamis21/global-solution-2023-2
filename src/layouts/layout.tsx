import { Outlet } from 'react-router-dom'
import { Header } from '../components/shared/header'
import { Footer } from '../components/shared/footer'
import { LayoutContainer, OutletContainer } from './styles'

export function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <Footer />
    </LayoutContainer>
  )
}
