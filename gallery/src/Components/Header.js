import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
        
        <img src='../images/gallerylogo.png' alt='gallery'/>
        <Nav>
            <button>Create</button>
        </Nav>

    </Container>
  );
}
export default Header;

const Container = styled.div`
min-height: 60px;1
position: fixed;
background-color: #rgb(0, 0, 255);
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