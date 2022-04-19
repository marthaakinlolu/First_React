import React from 'react'
import styled from "styled-components"
<<<<<<< HEAD

function Header() {
=======
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from "../features/Car/CarSlice"
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)

>>>>>>> 0ccf4094ec1f217e69b67f2bd3ea6ff24005d27e
  return (
    <Container>
        <a> 
          <img src="/images/images/logo.svg" alt="" />
        </a>

        <Menu>
<<<<<<< HEAD
          <p><a href="#">Model S</a></p>
          <p><a href="#">Model 3</a></p>
          <p><a href="#">Model X</a></p>
          <p><a href="#">Model Y</a></p>
        </Menu>
=======
          {cars && cars.map((car, index)=>(
            <a key={index} href="#">{car}</a>
          ))}
        </Menu>

        <RightMenu>
          <a href='#'>Shop</a>
          <a href='#'>Telsa Clone</a>
          <CustomMenu onClick={()=> setBurgerStatus(true)} />
        </RightMenu>
        
        <BurgerNav show={burgerStatus}>
            <CLoseWrapper>
                <CustomClose onClick={()=> setBurgerStatus(false)}/>
            </CLoseWrapper>
            {cars && cars.map((car, index)=>(
                 <li><a href='#'>{car}</a></li>
            ))}
            <li><a href='#'>Existing Inventory</a></li>
            <li><a href='#'>Used Inventory</a></li>
            <li><a href='#'>Trade-in</a></li>
            <li><a href='#'>Cybertruck</a></li>
            <li><a href='#'>Roadaster</a></li>
            <li><a href='#'>Semi</a></li>
            <li><a href='#'>Charging</a></li>
            <li><a href='#'>Power</a></li>
        </BurgerNav>
>>>>>>> 0ccf4094ec1f217e69b67f2bd3ea6ff24005d27e
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
`


const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    p {
          font-weight: 600;
          text-transform: uppercase;
          padding: 0 10px;
          flex-wrap: nowrap;
    }
`