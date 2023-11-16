import {
  Banner,
  Container,
  Section,
  ParagraphContainer,
} from '../../styles/shared'
import { Quiz } from '../shared/quiz'
import { questionsNCD } from './questions'

export function PreventionAndTreatmentOfNonCommunicableDiseases() {
  return (
    <>
      <Banner>
        <Container>
          <Quiz
            questions={questionsNCD}
            title={
              'Você sabe como a tecnologia contribui com prevenção de doenças não transmissíveis?'
            }
          />
        </Container>
      </Banner>
      <Section>
        <ParagraphContainer>
          <h2>Prevenção e Tratamento de Doenças Não Transmissíveis</h2>
          <p>
            Vivenciamos uma era em que a tecnologia desempenha um papel crucial
            na abordagem às doenças não transmissíveis, oferecendo soluções
            inovadoras para prevenção e tratamento. Este texto explora como
            avanços tecnológicos estão moldando uma resposta mais eficaz a
            condições como diabetes, doenças cardiovasculares e câncer. Desde o
            emprego de wearables para monitoramento contínuo até a aplicação de
            algoritmos de inteligência artificial para diagnósticos precisos, as
            inovações tecnológicas estão se tornando aliadas poderosas na
            promoção de estilos de vida saudáveis e no tratamento personalizado
            dessas enfermidades.
          </p>
        </ParagraphContainer>
        <ParagraphContainer>
          <h2>Diagnósticos Precoces e Tratamentos Personalizados</h2>
          <p>
            Uma das aplicações notáveis da tecnologia no campo da prevenção de
            doenças não transmissíveis é a capacidade de realizar diagnósticos
            precoces e oferecer tratamentos personalizados. Algoritmos avançados
            de inteligência artificial analisam dados biomédicos, identificando
            padrões que podem indicar a predisposição a certas condições. Essa
            abordagem não apenas permite intervenções mais rápidas, mas também
            possibilita tratamentos específicos, otimizando a eficácia e
            melhorando a qualidade de vida dos pacientes.
          </p>
        </ParagraphContainer>
        <ParagraphContainer>
          <h2>Monitoramento Remoto para Estilos de Vida Saudáveis</h2>
          <p>
            O uso de dispositivos wearables e aplicativos de monitoramento
            remoto tornou-se uma ferramenta valiosa na promoção de estilos de
            vida saudáveis. Pacientes podem acompanhar continuamente indicadores
            como níveis de atividade física, padrões de sono e até mesmo
            parâmetros fisiológicos. Essa coleta de dados em tempo real não
            apenas empodera os indivíduos a tomar decisões informadas sobre seu
            bem-estar, mas também fornece aos profissionais de saúde informações
            cruciais para personalizar estratégias de prevenção e tratamento.
          </p>
        </ParagraphContainer>
        <ParagraphContainer>
          <h2>Educação e Conscientização Através da Tecnologia</h2>
          <p>
            Além das ferramentas diretamente ligadas ao diagnóstico e
            tratamento, a tecnologia desempenha um papel vital na educação e
            conscientização sobre doenças não transmissíveis. Aplicativos e
            plataformas online oferecem recursos informativos, orientações sobre
            hábitos saudáveis e comunidades de apoio virtual. Essa disseminação
            de conhecimento contribui para a prevenção, incentivando a adoção de
            comportamentos saudáveis e a busca por cuidados médicos adequados.
          </p>
        </ParagraphContainer>
        <ParagraphContainer>
          <h2>Integração Holística para um Futuro Mais Saudável</h2>
          <p>
            Em síntese, a integração inteligente da tecnologia na prevenção e
            tratamento de doenças não transmissíveis representa um passo
            significativo em direção a um futuro mais saudável. À medida que
            wearables, algoritmos de IA e recursos educacionais continuam a
            evoluir, a promessa de uma abordagem mais holística para a saúde
            individual e coletiva se fortalece. Este texto explora como a
            tecnologia não é apenas uma aliada na luta contra doenças não
            transmissíveis, mas uma peça fundamental na construção de
            comunidades mais saudáveis e informadas.
          </p>
        </ParagraphContainer>
      </Section>
    </>
  )
}
