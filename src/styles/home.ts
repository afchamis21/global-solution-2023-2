import styled from 'styled-components'
import globalSolution from '../assets/text-header.svg'

export const TextHeader = styled.img`
  width: 100%;
  padding: 150px;
`

TextHeader.defaultProps = {
  src: globalSolution,
};
