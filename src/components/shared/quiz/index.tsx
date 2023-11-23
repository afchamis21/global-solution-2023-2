import { useState } from 'react'
import { Question } from '../../../@types'
import { QuestionCard } from './question'
import {
  ControllerButton,
  QuizContainer,
  QuizController,
  QuizHeader,
  Wrapper,
} from './styles'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Detail } from '../../../styles/shared'

interface QuizProps {
  title: string
  questions: Question[]
}

export function Quiz({ questions, title }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [correctQuestions, setCorrectQuestions] = useState(0)

  function nextQuestion() {
    if (currentQuestion + 1 >= questions.length) {
      return
    }

    setCurrentQuestion((value) => value + 1)
  }

  function previousQuestion() {
    if (currentQuestion <= 0) {
      return
    }

    setCurrentQuestion((value) => value - 1)
  }

  function goToSpecificQuestion(targetQuestion: number) {
    if (targetQuestion < 0 || targetQuestion >= questions.length) {
      return
    }

    setCurrentQuestion(targetQuestion)
  }

  function increaseCorrectQuestions() {
    setCorrectQuestions((value) => value + 1)
  }

  const pages = [...new Array(questions.length)].map((_, i) => i)

  return (
    <Wrapper>
      <QuizHeader>
        <h2>{title}</h2>
        <p>Para saber mais, leia o texto abaixo...</p>
        <span>
          Corretas:{' '}
          <Detail>
            {correctQuestions}/{questions.length}
          </Detail>
        </span>
      </QuizHeader>
      <QuizContainer>
        <button onClick={previousQuestion} disabled={currentQuestion === 0}>
          <CaretLeft size={32} weight="bold" />
        </button>
        {questions.map((question, i) => (
          <QuestionCard
            key={question.id}
            question={question}
            hide={i !== currentQuestion}
            increaseCorrectQuestions={increaseCorrectQuestions}
          />
        ))}
        <button
          onClick={nextQuestion}
          disabled={currentQuestion + 1 === questions.length}
        >
          <CaretRight size={32} weight="bold" />
        </button>
      </QuizContainer>

      <QuizController>
        {pages.map((page) => (
          <ControllerButton
            isSelected={page === currentQuestion}
            key={page}
            onClick={() => goToSpecificQuestion(page)}
          >
            {page + 1}
          </ControllerButton>
        ))}
      </QuizController>
    </Wrapper>
  )
}
