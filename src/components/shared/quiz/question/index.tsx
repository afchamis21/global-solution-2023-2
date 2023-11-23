import { useState } from 'react'
import { Question } from '../../../../@types'
import { Option, QuestionContainer } from './styles'

interface QuestionProps {
  question: Question
  hide: boolean
  increaseCorrectQuestions: () => void
}

export function QuestionCard({
  question,
  hide,
  increaseCorrectQuestions,
}: QuestionProps) {
  const [isSelected, setIsSelected] = useState(false)

  function handleAnswerQuestion(isCorrect: boolean) {
    if (isCorrect) {
      increaseCorrectQuestions()
    }

    setIsSelected(true)
  }
  return (
    <QuestionContainer hide={hide}>
      <p>{question.title}</p>
      {question.options.map((option, i) => (
        <Option
          key={option.text}
          isSelected={isSelected}
          isCorrect={option.isCorrect}
          htmlFor={`${option.text}-${i}`}
        >
          <input
            type="radio"
            id={`${option.text}-${i}`}
            onChange={() => handleAnswerQuestion(option.isCorrect)}
            disabled={isSelected}
          />
          <p>{option.text}</p>
        </Option>
      ))}
    </QuestionContainer>
  )
}
