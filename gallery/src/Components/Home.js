import React from 'react'
import styled from 'styled-components'


function Home() {
  return (
    <Container>
        <Section>
        <img src='/public/gallerylogo.png' alt='gallery' /> 
        </Section>
        <Section>
        <img src='/public/gallerylogo.png' alt='gallery' /> 
        </Section>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
const Section = styled.div`
    display: flex;
`
