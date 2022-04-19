import React from 'react'
import styled from 'styled-components'


function Header() {
  return (
    <Container>
        
    <img src={require('../images/logo.jfif')} width={60} height={60} alt='gallery'/>
    <Nav>
        <button>Create</button>
    </Nav>

</Container>
  )
}

export default Header

const Container = styled.div`
background-color: rgba(23, 26, 32, 0.8);
min-height: 60px;1
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0;
left: 0;
right: 0
`
const Nav = styled.div`
display: flex;

`