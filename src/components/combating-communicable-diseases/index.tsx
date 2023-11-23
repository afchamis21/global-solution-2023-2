import {
  Banner,
  Container,
  ParagraphContainer,
  Section,
} from '../../styles/shared'
import { Quiz } from '../shared/quiz'
import { questions } from './questions'

export function CombatingCommunicableDiseases() {
  return (
    <>
      <Banner>
        <Container>
          <Quiz
            questions={questions}
            title={'Combate a Doenças Transmissíveis'}
          />
        </Container>
      </Banner>
      <Section>
        <ParagraphContainer>
          <h2>Combate a Doenças Transmissíveis</h2>
          <p>
            Em uma sociedade cada vez mais globalizada, o combate a doenças
            transmissíveis exige abordagens inovadoras. Este texto explora como
            avanços tecnológicos, como a telemedicina, o monitoramento remoto e
            a inteligência artificial, estão remodelando estratégias de saúde
            pública para prevenir e controlar a disseminação de doenças
            transmissíveis, contribuindo para um mundo mais saudável e
            protegido.
          </p>
        </ParagraphContainer>
        <ParagraphContainer>
          <h2>Fronteiras Virtuais contra Doenças Contagiosas</h2>
          <p>
            A telemedicina emerge como uma ferramenta poderosa no combate a
            doenças transmissíveis. Ao possibilitar consultas remotas, ela
            facilita o diagnóstico precoce e o tratamento eficiente, minimizando
            a propagação de agentes patogênicos. Além disso, a telemedicina
            permite a rápida implementação de medidas preventivas, ajudando a
            conter surtos e melhorar a resposta global contra doenças
            contagiosas.
          </p>
        </ParagraphContainer>
        <ParagraphContainer>
          <h2>Vigilância Eficiente para Controle de Epidemias</h2>
          <p>
            O monitoramento remoto desempenha um papel crucial na vigilância e
            controle de doenças transmissíveis. Dispositivos inteligentes e
            wearables permitem a coleta em tempo real de dados epidemiológicos,
            auxiliando as autoridades de saúde a identificar padrões e antecipar
            surtos. Essa abordagem proativa fortalece a capacidade de resposta,
            contribuindo para a contenção eficaz de doenças contagiosas e a
            proteção da saúde pública.
          </p>
        </ParagraphContainer>
        <ParagraphContainer>
          <h2>
            Inteligência Artificial: Estratégias Avançadas de Diagnóstico e
            Prevenção
          </h2>
          <p>
            A incorporação da inteligência artificial no combate a doenças
            transmissíveis representa um avanço significativo. Desde algoritmos
            preditivos até análises de big data, a IA oferece ferramentas
            poderosas para prever padrões de propagação e desenvolver
            estratégias eficazes de contenção. Ao potencializar a capacidade de
            diagnóstico e prevenção, a inteligência artificial fortalece a
            resposta global contra doenças transmissíveis, contribuindo para a
            construção de comunidades mais resilientes e saudáveis.
          </p>
        </ParagraphContainer>
      </Section>
    </>
  )
}
