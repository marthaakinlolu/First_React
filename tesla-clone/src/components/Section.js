import React from 'react'
import styled from 'styled-components'


function Section() {
  return (
    <Wrap>
        <ItemText>
          <h1> Model S</h1>
          <p>Order online for Touchless Delivery</p>
        </ItemText>

        <ButtonGroup>
          <LeftButton>
            Custom Order
          </LeftButton>
          <RightButton>
            Existing Inventory
          </RightButton>
        </ButtonGroup>
    
    
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    backgroung-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/images/model-s.jpg');
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;

`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
`
const RightButton = styled(LeftButton)`

`