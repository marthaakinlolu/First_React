import React from 'react'
import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Home() {
  return (
    <Container>
        <Section>
          <ImageContainer>
            <Image src={require('../images/pics.jfif')}  alt='gallery' />
            <Wrap>
              <h3>Gallery 1</h3> 
              <EditMenu>
                <EditIcon />  
              </EditMenu>
              <h3>Edit</h3>
              <DeleteMenu>
                <DeleteIcon />  
              </DeleteMenu>
              <h3>Delete</h3>
            </Wrap>
          </ImageContainer>

          <ImageContainer>
            <Image src={require('../images/pics.jfif')}  alt='gallery' />
              <Wrap>
                  <h3>Gallery 2</h3> 
                  <EditMenu>
                    <EditIcon />  
                  </EditMenu>
                  <h3>Edit</h3>
                  <DeleteMenu>
                    <DeleteIcon />  
                  </DeleteMenu>
                  <h3>Delete</h3>
                </Wrap>
          </ImageContainer>

          <ImageContainer>
            <Image src={require('../images/pics.jfif')}  alt='gallery' />
            <Wrap>
              <h3>Gallery 3</h3> 
              <EditMenu>
                <EditIcon />  
              </EditMenu>
              <h3>Edit</h3>
              <DeleteMenu>
                <DeleteIcon />  
              </DeleteMenu>
              <h3>Delete</h3>
            </Wrap>
          </ImageContainer>
        </Section>
        <Section>
          <ImageContainer> 
            <Image src = {require('../images/download.jfif')}  alt='gallery' />
            <Wrap>
              <h3>Gallery 4</h3> 
              <EditMenu>
                <EditIcon />  
              </EditMenu>
              <h3>Edit</h3>
              <DeleteMenu>
                <DeleteIcon />  
              </DeleteMenu>
              <h3>Delete</h3>
            </Wrap>
          </ImageContainer> 

          <ImageContainer>
            <Image src = {require('../images/gallerylogo.png')}  alt='gallery' />
            <Wrap>
              <h3>Gallery 5</h3> 
              <EditMenu>
                <EditIcon />  
              </EditMenu>
              <h3>Edit</h3>
              <DeleteMenu>
                <DeleteIcon />  
              </DeleteMenu>
              <h3>Delete</h3>
            </Wrap>
          </ImageContainer> 

          <ImageContainer>
            <Image src = {require('../images/gallery.png')}  alt='gallery' />
            <Wrap>
              <h3>Gallery 6</h3> 
              <EditMenu>
                <EditIcon />  
              </EditMenu>
              <h3>Edit</h3>
              <DeleteMenu>
                <DeleteIcon />  
              </DeleteMenu>
              <h3>Delete</h3>
            </Wrap> 
          </ImageContainer>
        </Section>
        <Section>
          <ImageContainer>
            <Image src={require('../images/pic.png')}  alt='gallery' />
            <Wrap>
              <h3>Gallery 7</h3> 
              <EditMenu>
                <EditIcon />  
              </EditMenu>
              <h3>Edit</h3>
              <DeleteMenu>
                <DeleteIcon />  
              </DeleteMenu>
              <h3>Delete</h3>
            </Wrap>
          </ImageContainer>

          <ImageContainer>
            <Image src={require('../images/pic.png')}  alt='gallery' />
            <Wrap>
              <h3>Gallery 8</h3> 
              <EditMenu>
                <EditIcon />  
              </EditMenu>
              <h3>Edit</h3>
              <DeleteMenu>
                <DeleteIcon />  
              </DeleteMenu>
              <h3>Delete</h3>
            </Wrap>
          </ImageContainer>

          <ImageContainer>
            <Image src={require('../images/pic.png')}  alt='gallery' />
            <Wrap>
              <h3>Gallery 9</h3> 
              <EditMenu>
                <EditIcon />  
              </EditMenu>
              <h3>Edit</h3>
              <DeleteMenu>
                <DeleteIcon />  
              </DeleteMenu>
              <h3>Delete</h3>
            </Wrap>
          </ImageContainer>
        </Section>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100%;
`
const Section = styled.div`
    width: 100%;
    height: 100%;
    backgroung-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;
`
const ImageContainer = styled.div`
    width: 30%;
    height: auto;
`
const Image = styled.img`
    width: 100%;
    height: auto;
`
const EditMenu = styled(EditIcon)`
    cursor: pointer;
`
const DeleteMenu = styled(DeleteIcon)`
    cursor: pointer;
`
const Wrap = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`