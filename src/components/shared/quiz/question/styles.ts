import styled from 'styled-components'

interface QuestionProps {
  hide: boolean
}

export const QuestionContainer = styled.div<QuestionProps>`
  display: flex;
  flex: 1;
  margin: 0 auto;
  flex-direction: column;
  gap: 1rem;

  p {
    font-weight: bold;
  }

  ${(props) => {
    return props.hide && 'display: none;'
  }}
`

interface OptionProps {
  isselected: boolean
  iscorrect: boolean
}

export const Option = styled.label<OptionProps>`
  background: ${(props) => props.theme.gray};
  padding: 1rem;
  display: flex;
  gap: 0.5rem;

  transition: filter 0.2s;
  cursor: pointer;

  &:has(input:disabled) {
    cursor: not-allowed;
    label {
      cursor: not-allowed;
    }
  }

  &:not(:has(input:disabled)):hover {
    filter: brightness(0.8);
  }

  input:disabled {
    cursor: not-allowed;
  }

  ${(props) =>
    props.isSelected
      ? props.isCorrect
        ? `border: 1px solid ${props.theme.green}; color: ${props.theme.green}`
        : `border: 1px solid ${props.theme.red}; color: ${props.theme.red}`
      : `border: 1px solid ${props.theme.black}; color: ${props.theme.black}`};
`
