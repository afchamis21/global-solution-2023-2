import { Question } from '../../@types'

export const questions: Question[] = [
  {
    id: 1,
    title:
      'Como a tecnologia está transformando a abordagem aos cuidados de saúde?',
    options: [
      { text: 'Limitando o acesso aos serviços médicos.', isCorrect: false },
      {
        text: 'Redefinindo a acessibilidade e promovendo inovações.',
        isCorrect: true,
      },
      { text: 'Ignorando o impacto na saúde global.', isCorrect: false },
      {
        text: 'Desencorajando a integração de avanços tecnológicos.',
        isCorrect: false,
      },
      { text: 'Priorizando métodos tradicionais.', isCorrect: false },
    ],
  },
  {
    id: 2,
    title: 'O que a telemedicina busca superar?',
    options: [
      { text: 'Barreiras geográficas.', isCorrect: true },
      { text: 'Acesso aos serviços de saúde.', isCorrect: false },
      { text: 'Uso de dispositivos wearables.', isCorrect: false },
      { text: 'Dependência exclusiva da tecnologia.', isCorrect: false },
      {
        text: 'Deslocamento desnecessário para consultas médicas.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    title: 'Qual é o objetivo do monitoramento remoto de pacientes?',
    options: [
      { text: 'Substituir consultas médicas tradicionais.', isCorrect: false },
      {
        text: 'Aumentar a dependência do paciente em dispositivos.',
        isCorrect: false,
      },
      { text: 'Prevenir condições crônicas.', isCorrect: true },
      { text: 'Diminuir a intervenção médica.', isCorrect: false },
      { text: 'Restringir o acesso a dados de saúde.', isCorrect: false },
    ],
  },
  {
    id: 4,
    title: 'O que a inteligência artificial proporciona no campo da saúde?',
    options: [
      {
        text: 'Substituição completa dos profissionais de saúde.',
        isCorrect: false,
      },
      {
        text: 'Insights valiosos para profissionais de saúde.',
        isCorrect: true,
      },
      { text: 'Redução da precisão nos diagnósticos.', isCorrect: false },
      {
        text: 'Aumento da dependência exclusiva em tecnologia.',
        isCorrect: false,
      },
      {
        text: 'Ignorância em relação aos avanços tecnológicos.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 5,
    title:
      'Como a inteligência artificial se relaciona com os cuidados de saúde no texto?',
    options: [
      {
        text: 'Substituindo totalmente a intervenção humana.',
        isCorrect: false,
      },
      { text: 'Tornando os diagnósticos menos precisos.', isCorrect: false },
      {
        text: 'Redefinindo os cuidados de saúde com uma abordagem mais eficaz.',
        isCorrect: true,
      },
      {
        text: 'Restringindo o acesso a informações médicas.',
        isCorrect: false,
      },
      {
        text: 'Enfatizando a exclusão de inovações tecnológicas.',
        isCorrect: false,
      },
    ],
  },
]
