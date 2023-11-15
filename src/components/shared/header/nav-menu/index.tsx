import { routes } from '../../../../router'
import { Link, Nav } from './styles'

export function NavMenu() {
  return (
    <Nav>
      {routes.map((route, i) => (
        <Link key={i} to={route.path}>
          {route.title}
        </Link>
      ))}
    </Nav>
  )
}
