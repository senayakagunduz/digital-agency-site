import React from 'react'
import styled from "styled-components"; 
import How from "../img/how.png"          
import MiniCard from './MiniCard';
import Play from "../img/play.png";
import { useState } from 'react';

const Container=styled.div`
display:flex ;
height:100% ;
@media only screen and (max-width:480px){
  flex-direction:column ;
 }
`;
const Left=styled.div`
width:50%;
@media only screen and (max-width:480px){
width:100%;
height:100% ;
}
`;
const Right=styled.div`
margin-right:0px ;
width:50%;
@media only screen and (max-width:480px){
display:none ;
}

`;
const Wrapper=styled.div`
padding:50px ;
display:flex ;
flex-direction:column ;
@media only screen and (max-width:480px){
 padding:10px ;
}
`;
const Image=styled.img`
display:${(props)=>props.open && "none"} ;
height:100% ;
margin-left:279px ;
`;
const Video=styled.video`
display:${(props)=>!props.open && "none"} ;
height:300px ;
position:absolute ;
margin-right:10px;
margin-top:70px ;
@media only screen and (max-width:480px){
  width:100%;
}
`;
const Modal=styled.div`
width:100vw;
height:100vh;
position:absolute ;
top:0;
left:0 ;
background-color:rgba(0,0,0,0.5) ;
`;
const Title=styled.h1`
font-size: 30px;
margin-top:270px ;
font-weight:bold ;
`;
const Desc=styled.p`
font-size:20px ;
padding:10px ;
width:70% ;
color:#555 ;
`;
const CardContainer=styled.div`
display:flex ;
justify-content:space-between ;
margin-top:50px ;
@media only screen and (max-width:480px){
margin-top:5px ;
}
`;
const CloseButton=styled.button`
position:absolute ;
background-color:white ;
padding:5px ;
border:none;
border-radius:5px ;
margin-top:70px ;
right:5px;
top:30%;
`;
const Button=styled.button`
width:160px;
border:none;
padding:10px;
border-radius:10px ;
background-color:blue  ;
color:white;
font-size:20px;
margin-top:30px ;
cursor:pointer ;
display:flex ;
align-items:center ;
`;
const Icon=styled.img`
width:20px ;
margin-right:10px;
`;
const Service = () => {
    const[open,setOpen]=useState(false);
    const smallScreen=window.screen.width<=480?true:false;
  return (
    <Container>
        <Left>
            <Wrapper>
             <Title>Reach more people with your website</Title>
             <Desc>Grow and engage a bigger, higher quality customer base with intelligent tools that speak to an interested audience when they’re most willing to listen.</Desc> 
             <CardContainer>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
            </CardContainer>
            <Button onClick={()=>setOpen(true)}><Icon src={Play}/>How it works</Button> 
            </Wrapper>
        </Left>
        <Right>
            <Image open={open} src={How}/>
            <Video open={open} autoPlay loop controls src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"/>    
        </Right>
        {smallScreen && open && (
        <Modal>
          <Video open={open} autoPlay loop controls src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"/>
          <CloseButton onClick={()=>setOpen(false)}>Close</CloseButton>
        </Modal>)}
    </Container>
  )
}

export default Service