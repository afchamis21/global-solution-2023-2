import { Banner, Container, Section } from '../../styles/shared'

import { TextHeader } from '../../styles/home'
import Contact from './contact'
import Members from './members'
import VideoComponent from './video-component'
import { Typography } from '@mui/material'

export function Home() {
  return (
    <>
      <Banner>
        <Container>
          <TextHeader />
        </Container>
      </Banner>
      <Section>
        <Container>
          <VideoComponent />
        </Container>
      </Section>
      <Banner style={{ padding: '150px' }}>
        <Container>
          <Typography variant="h4" align="center" mb={3}>
            Membros
          </Typography>
          <Members />
        </Container>
      </Banner>
      <Section>
        <Container>
          <Contact />
        </Container>
      </Section>
    </>
  )
}
