import React from 'react'
// import Navbar from './Navbar';
import Woman from "../img/womann.png";
import styled from 'styled-components';

const Container=styled.div`
height:calc(100vh-50px);
display:flex;
padding:20px ;
@media only screen and (max-width:480px){
  flex-direction:column ;
}
`;
const Left=styled.div`
width:60%;
display:flex ;
flex-direction:column ;
align-items:center ;
justify-content:center ;
@media only screen and (max-width:480px){
  width:100% ;
  height:100% ;
}
`;
const Right=styled.div`
width:40%;
`;
const Title=styled.h1`
font-size:60px ;
width:60%;
@media only screen and (max-width:480px){
  width:100% ;
  font-size:50px ;
}
`;
const Desc=styled.p`
width: 60%;
font-size:20px ;
margin-top:20px ;
@media only screen and (max-width:480px){
  width:100% ;
  height:100% ;
}
`;
const Info=styled.div`
width:60% ;
margin-top:50px ;
display:flex ;
align-items:center ;
justify-content:space-between ;
@media only screen and (max-width:480px){
  width:100% ;
  flex-direction:column ;
}
`;
const Button=styled.button`
padding:15px ;
background-color:blue ;
color:white;
font-weight:bold;
letter-spacing:2px ;
cursor: pointer;
border:none ;
border-radius:15px ;
@media only screen and (max-width:480px){
  margin-bottom:20px ;
}
`;
const Contact=styled.div`
display:flex ;
flex-direction:column ;
`;
const Phone=styled.span`
color:#f0667d;
font-weight:bold;
@media only screen and (max-width:480px){
  width:100% ;
  height:100% ;
}
`;
const ContactText=styled.span`
color:grey;
margin-top:5px ;
@media only screen and (max-width:480px){
  width:100% ;
  height:100% ;
}
`;
const Image=styled.img`
width:90% ;
`;



const Intro = () => {
  return (
    <Container>
       <Left>
        <Title>Adventures in creative designs</Title>
        <Desc>Our templates include all the elements you need to easily launch a professional‑looking campaign in no time.</Desc>
        <Info><Button>Start a project</Button>
        <Contact>
          <Phone>Call us +90 539 663 70 14</Phone>
          <ContactText>For any question or concern</ContactText>
        </Contact>
        </Info>
       </Left>
       <Right><Image src={Woman}/></Right>
    </Container>
  )
}

export default Intro