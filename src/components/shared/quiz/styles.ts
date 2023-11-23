import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const QuizHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const QuizContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > button {
    background: transparent;
    border: 0;
    color: ${(props) => props.theme.white};
    cursor: pointer;
    transition: color 0.2s;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      color: ${(props) => props.theme.blue};
    }
  }
`

export const QuizController = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`

interface ControllerButtonProps {
  isSelected: boolean
}

export const ControllerButton = styled.button<ControllerButtonProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme.blue};
  }

  ${(props) =>
    props.isSelected
      ? `background: ${props.theme.blue}; border: 2px solid ${props.theme.blue};`
      : `background: transparent; border: 2px solid ${props.theme.white};`}
`
