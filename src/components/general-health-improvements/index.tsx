import {
  Banner,
  Container,
  ParagraphContainer,
  Section,
} from '../../styles/shared'
import { Quiz } from '../shared/quiz'
import { questions } from './questions'

export function GeneralHealthImprovements() {
  return (
    <>
      <Banner>
        <Container>
          <Quiz
            questions={questions}
            title={'Você sabe como a tecnologia contribui com a saúde?'}
          />
        </Container>
      </Banner>
      <Section>
        <ParagraphContainer>
          <h2>A Tecnologia na Vanguarda da Saúde</h2>
          <p>
            Numa era onde a tecnologia permeia todos os aspectos da vida, sua
            influência na saúde é particularmente marcante. Este texto explora
            como avanços como a telemedicina, o monitoramento remoto e a
            inteligência artificial estão redefinindo os cuidados de saúde,
            promovendo uma abordagem mais acessível, proativa e eficaz. Vamos
            explorar como essas inovações estão moldando um futuro mais saudável
            e interconectado.
          </p>
        </ParagraphContainer>
        <ParagraphContainer>
          <h2>Telemedicina Revolucionando o Acesso aos Cuidados de Saúde</h2>
          <p>
            A telemedicina emergiu como uma poderosa ferramenta na busca por
            melhorias na saúde global. Ao permitir consultas médicas remotas,
            ela supera barreiras geográficas, conectando pacientes a
            profissionais de saúde sem a necessidade de deslocamento. Essa
            abordagem não apenas agiliza o atendimento, mas também promove a
            acessibilidade, beneficiando comunidades distantes ou com recursos
            limitados.
          </p>
        </ParagraphContainer>
        <ParagraphContainer>
          <h2>Monitoramento Remoto para uma Saúde Mais Proativa</h2>
          <p>
            Outra aplicação inovadora é o monitoramento remoto de pacientes.
            Dispositivos inteligentes e wearables possibilitam o acompanhamento
            contínuo de indicadores de saúde, fornecendo dados em tempo real aos
            profissionais médicos. Essa abordagem proativa não só auxilia na
            prevenção de condições crônicas, mas também permite intervenções
            rápidas e personalizadas, elevando o nível de cuidado e promovendo a
            saúde a longo prazo.
          </p>
        </ParagraphContainer>
        <ParagraphContainer>
          <h2>Inteligência Artificial na Diagnóstico e Tratamento</h2>
          <p>
            A incorporação de inteligência artificial no campo da saúde
            representa um avanço significativo. Desde algoritmos de diagnóstico
            até sistemas de apoio à decisão clínica, a IA oferece insights
            valiosos para profissionais de saúde. Essa tecnologia não substitui,
            mas aprimora a capacidade humana, tornando os diagnósticos mais
            precisos e os tratamentos mais eficazes, destacando assim a sinergia
            entre a tecnologia e o cuidado com a saúde.
          </p>
        </ParagraphContainer>
      </Section>
    </>
  )
}
