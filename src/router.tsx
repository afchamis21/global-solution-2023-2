import { Route, Routes } from 'react-router-dom'
import { Layout } from './layouts/layout'
import { Home } from './components/home'
import { GeneralHealthImprovements } from './components/general-health-improvements'
import { PreventionAndTreatmentOfNonCommunicableDiseases } from './components/prevention-and-treatment-of-non-communicable-diseases'
import { ReductionInInfantMortality } from './components/reduction-in-infant-mortality'
import { CombatingCommunicableDiseases } from './components/combating-communicable-diseases'

type Route = {
  path: string
  element: JSX.Element
  title: string
}

export const routes: Route[] = [
  {
    path: '',
    element: <Home />,
    title: 'Home',
  },
  {
    path: 'prevencao-e-tratamento-de-doencas-nao-transmissiveis',
    element: <PreventionAndTreatmentOfNonCommunicableDiseases />,
    title: 'Prevenção e tratamento de doenças não transmissíveis',
  },
  {
    path: 'melhoria-geral-da-saude',
    element: <GeneralHealthImprovements />,
    title: 'Melhoria Geral da Saúde',
  },
  {
    path: 'redução-mortalidade-Infantil',
    element: <ReductionInInfantMortality />,
    title: 'Redução da mortalidade Infantil',
  },
  {
    path: 'combate-doencas-transmissíveis',
    element: <CombatingCommunicableDiseases />,
    title: 'Combate a doenças transmissíveis',
  },
]

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  )
}
