import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${(props) => props.theme['max-width']};
  margin: 0 auto;
  padding: 1rem 2rem;
`

export const Section = styled.section`
  width: 100%;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
`

export const Banner = styled(Section)`
  background: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
`

export const Detail = styled.span`
  color: ${(props) => props.theme.blue};
`

export const ParagraphContainer = styled(Container)`
  h1,
  h2,
  h3 {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.blue};
  }

  p {
    margin-top: 0.5rem;
  }

  &:nth-child(even) {
    h1,
    h2,
    h3 {
      text-align: right;
    }
  }

  padding: 2rem 1rem;
`
