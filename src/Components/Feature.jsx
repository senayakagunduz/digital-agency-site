import React from 'react'
import styled from 'styled-components' 
import App from "../img/app.png";

const Container=styled.div`
display:flex ;
@media only screen and (max-width:480px){
 flex-direction:column ;
}

`;
const Left=styled.div`
width:50% ;
@media only screen and (max-width:480px){
  display:none ;
}
`;
const Right=styled.div`
width:50% ;
margin-right:40px ;
display:flex ;
flex-direction:column ;
justify-content:center ;
@media only screen and (max-width:480px){
 width:100%;
 height:100% ;
}
`;
const Image=styled.img`
width:100% ;
`;
const Title=styled.span`
font-size:70px ;
@media only screen and (max-width:480px){
  font-size:50px ;
  margin-left:20px ;
  margin-top:10px ;
}
`;
const SubTitle=styled.span`
font-size:24px ;
font-style:italic ;
color:#333;
margin-top:30px ;
@media only screen and (max-width:480px){
 font-size:25px ;
 margin-left:20px  ;
}
`;
const Desc=styled.p`
font-size:20px ;
color:#777;
margin-top:30px ;
@media only screen and (max-width:480px){
 font-size:20px ;
 margin-left:20px  ;
 margin-top:10px ;
}
`;
const Button=styled.button`
width:150px ;
border:none;
padding:15px ;
background-color: blue ;
color:white;
border-radius:15px ;
font-size:20px ;
margin-top:30px;
@media only screen and (max-width:480px){
 width:140px;
 margin:30px 40px ;
 padding:10px ;
}

`;
const Feature = () => {
  return (
    <Container>
        <Left><Image src={App}/></Left>
        <Right>
            <Title><b>Brilliant</b> web design</Title>
            <SubTitle>Promote your site and build an audience with our all-in-one platform
            </SubTitle>
            <Desc>We help you establish your brand, look like a pro, and rise the ranks of search engines using our easy-to-use website builder. Customize your website on a no-code platform so that you don't need to hire anyone else to help</Desc>
            <Desc>
            Our website builder helps bring your unique vision to life—no design or code experience required. Create a customizable, mobile-optimized website within the hour. All you need to start is a domain name and a vision for your website. 
            </Desc>
            <Button>Learn more</Button>
        </Right>
    </Container>
  )
}

export default Feature