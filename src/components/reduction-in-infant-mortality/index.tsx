import {
  Banner,
  Container,
  ParagraphContainer,
  Section,
} from '../../styles/shared'
import { Quiz } from '../shared/quiz'
import { questions } from './questions'

export function ReductionInInfantMortality() {
  return (
    <>
      <Banner>
        <Container>
          <Quiz
            questions={questions}
            title={'Redução da Mortalidade Infantil'}
          />
        </Container>
      </Banner>
      <Section>
        <ParagraphContainer>
          <h2>Redução da Mortalidade Infantil</h2>
          <p>
            Em um esforço contínuo para enfrentar desafios globais de saúde, a
            tecnologia desempenha um papel crucial na redução da mortalidade
            infantil. Este texto explora como avanços inovadores, como a
            telemedicina, o monitoramento remoto e a inteligência artificial,
            estão moldando um futuro onde a sobrevivência infantil é aprimorada
            por meio de cuidados mais acessíveis, proativos e eficazes.
          </p>
        </ParagraphContainer>
        <ParagraphContainer>
          <h2>Um Salto Além das Fronteiras Geográficas</h2>
          <p>
            A telemedicina emerge como uma ferramenta revolucionária na promoção
            da saúde infantil. Ao facilitar consultas médicas remotas, ela
            supera barreiras geográficas, conectando pais e cuidadores a
            profissionais de saúde especializados. Essa abordagem não apenas
            agiliza o diagnóstico e tratamento, mas também proporciona acesso a
            cuidados especializados em regiões distantes, contribuindo assim
            para a redução da mortalidade infantil.
          </p>
        </ParagraphContainer>
        <ParagraphContainer>
          <h2>Antecipando Cuidados para os Mais Jovens</h2>
          <p>
            O monitoramento remoto de indicadores de saúde infantil é uma
            inovação que promove uma abordagem proativa na prevenção de
            condições críticas. Dispositivos inteligentes e wearables permitem o
            acompanhamento contínuo do bem-estar do bebê, proporcionando dados
            em tempo real aos pediatras. Essa abordagem não só ajuda a evitar
            complicações, mas também permite intervenções rápidas,
            potencialmente salvando vidas e contribuindo para a redução da
            mortalidade infantil.
          </p>
        </ParagraphContainer>
        <ParagraphContainer>
          <h2>
            Inteligência Artificial: Potencializando Diagnósticos e Tratamentos
            Pediátricos
          </h2>
          <p>
            A integração da inteligência artificial na saúde pediátrica
            representa um avanço significativo. Desde algoritmos de diagnóstico
            até sistemas de apoio à decisão clínica, a IA oferece insights
            valiosos para profissionais que cuidam dos mais jovens. Essa
            sinergia entre a tecnologia e a expertise médica humana eleva a
            precisão dos diagnósticos e a eficácia dos tratamentos, contribuindo
            assim para a redução da mortalidade infantil e proporcionando um
            futuro mais saudável para as gerações vindouras.
          </p>
        </ParagraphContainer>
      </Section>
    </>
  )
}
