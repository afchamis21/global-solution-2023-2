import { Question } from '../../@types'

export const questions: Question[] = [
  {
    id: 1,
    title:
      'Qual é um dos principais fatores que contribuem para a redução da mortalidade infantil?',
    options: [
      { text: 'Aumento da poluição ambiental.', isCorrect: false },
      {
        text: 'Melhoria no acesso à água potável.',
        isCorrect: true,
      },
      { text: 'Diminuição do investimento em educação.', isCorrect: false },
      {
        text: 'Aumento da taxa de natalidade.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    title: 'Qual é a importância da vacinação na redução da mortalidade infantil?',
    options: [
      { text: 'Não tem impacto significativo.', isCorrect: false },
      { text: 'Aumenta a mortalidade.', isCorrect: false },
      { text: 'Reduz a mortalidade ao prevenir doenças.', isCorrect: true },
      { text: 'Causa efeitos colaterais prejudiciais.', isCorrect: false },
    ],
  },
  {
    id: 3,
    title: 'Qual região do mundo apresentou avanços notáveis na redução da mortalidade infantil nas últimas décadas?',
    options: [
      { text: 'Ásia.', isCorrect: true },
      {
        text: 'América do Norte.',
        isCorrect: false,
      },
      { text: 'Europa.', isCorrect: false },
      { text: 'África Subsaariana.', isCorrect: false },
    ],
  },
  {
    id: 4,
    title: 'Qual é o papel da nutrição adequada na redução da mortalidade infantil?',
    options: [
      {
        text: 'Não tem impacto.',
        isCorrect: false,
      },
      {
        text: 'Aumenta a mortalidade.',
        isCorrect: false,
      },
      { text: 'Contribui para o desenvolvimento saudável.', isCorrect: true },
      {
        text: 'Causa obesidade infantil.',
        isCorrect: false,
      },
    ],
  },
  {
    id: 5,
    title:
      'Qual é a importância do acompanhamento pré-natal para a redução da mortalidade infantil?',
    options: [
      {
        text: 'Não tem impacto.',
        isCorrect: false,
      },
      { text: 'Aumenta a mortalidade.', isCorrect: false },
      {
        text: 'Reduz complicações e identifica riscos precocemente.',
        isCorrect: true,
      },
      {
        text: 'Causa desconforto para a gestante.',
        isCorrect: false,
      },
    ],
  },
]
