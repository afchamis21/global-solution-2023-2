import { Question } from '../../@types';

export const questions: Question[] = [
  {
    id: 1,
    title: 'Qual é uma das principais estratégias para o combate a doenças transmissíveis?',
    options: [
      { text: 'Uso indiscriminado de antibióticos.', isCorrect: false },
      { text: 'Vacinação em massa.', isCorrect: true },
      { text: 'Ignorar medidas de higiene.', isCorrect: false },
      { text: 'Promover aglomerações de pessoas.', isCorrect: false },
    ],
  },
  {
    id: 2,
    title: 'Como as medidas de isolamento social contribuem para o combate a doenças transmissíveis?',
    options: [
      { text: 'Aumentam a propagação das doenças.', isCorrect: false },
      { text: 'Não têm impacto significativo.', isCorrect: false },
      { text: 'Reduzem a disseminação dos agentes infecciosos.', isCorrect: true },
      { text: 'Causam efeitos colaterais prejudiciais à saúde.', isCorrect: false },
    ],
  },
  {
    id: 3,
    title: 'Qual é a importância da educação sanitária na prevenção de doenças transmissíveis?',
    options: [
      { text: 'Não tem impacto.', isCorrect: false },
      { text: 'Aumenta o risco de infecções.', isCorrect: false },
      { text: 'Promove práticas saudáveis e reduz o contágio.', isCorrect: true },
      { text: 'Diminui a eficácia das vacinas.', isCorrect: false },
    ],
  },
  {
    id: 4,
    title: 'O que é a imunização de rebanho e como ela contribui para o controle de doenças transmissíveis?',
    options: [
      { text: 'É o mesmo que vacinação individual e não tem benefícios coletivos.', isCorrect: false },
      { text: 'Aumenta a susceptibilidade da população às doenças.', isCorrect: false },
      { text: 'É alcançada quando uma porcentagem significativa da população é imunizada, protegendo também os não vacinados.', isCorrect: true },
      { text: 'Causa resistência às vacinas.', isCorrect: false },
    ],
  },
  {
    id: 5,
    title: 'Qual é a principal forma de transmissão de doenças como a malária e a dengue?',
    options: [
      { text: 'Transmissão pelo ar.', isCorrect: false },
      { text: 'Contato direto com fluidos corporais.', isCorrect: false },
      { text: 'Picada de insetos infectados, como mosquitos.', isCorrect: true },
      { text: 'Consumo de água contaminada.', isCorrect: false },
    ],
  },
];