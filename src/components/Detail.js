import React from 'react'
import styled from 'styled-components'
import ironman from "../images/ironman.jpg"
import black from "../images/play-icon-black.png"
import white from "../images/play-icon-white.png"
import group from "../images/group-icon.png"

function Detail() {
  return (
    <Container>
        <Background>
            <img src={ironman}  />
        </Background>
        <ImgTitle>
        <img src="https://pngimg.com/uploads/ironman/ironman_PNG44.png" alt="" />
        </ImgTitle>
        <Controls>
            <PlayButton>
                <img src={black} alt="" />
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
            <img src={white} alt="" />
                <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
                <span>
                    +
                </span>
            </AddButton>
            <GroupButton>
                <img src={group} alt="" />
            </GroupButton>
        </Controls>
        <Subtitle>
            2018 7m Family,Kids
        </Subtitle>
        <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus animi, vero, eos minima provident aperiam ipsum quos cumque sed magni iure aut, neque impedit consectetur dolores nesciunt reprehenderit. Dolores, porro?
        </Description>
        </Container>
  )
}

export default Detail

const Container = styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
`
const Background = styled.div`
position: fixed;
top:0;
left:0;
bottom:0;
right: 0;
z-index: -1;
opacity: 0.8;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`


const ImgTitle = styled.div`
margin-top: 60px;
height: 30vh;
min-height: 170px;
min-width: 200px;
width: 35vw;
img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`

const Controls = styled.div`
display:flex;
align-items: center;


`

const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
display: flex;
align-items: center;
height: 56px;
background-color: rgb(249,249,249);
border: none;
padding: 0px 24px;
margin-right: 22px;
letter-spacing: 1.8px;
cursor: pointer;

&:hover{
    background-color: rgb(198,198,198);
}
`

const TrailerButton =styled(PlayButton)`
background-color: rgba(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
color: rgb(249,249,249);


`

const AddButton = styled.button`

width:44px;
height:44px;
display:flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border:2px solid white;
background-color: rgba(0,0,0,0.6);
cursor: pointer;
color: white;
margin-right: 16px;

span{
    font-size: 30px;

}

`

const GroupButton = styled(AddButton)`
background-color: rgb(0,0,0) ;
`

const Subtitle = styled.div`
color: rgb(249,249,249);
font-size: 15px;
margin-top: 26px;
min-height: 20px;
`
const Description= styled.div`
line-height: 1.4;
font-size: 20px;
margin-top: 16px;
color: rgb(249,249,249);
max-width: 500px;
`