import React from 'react'
import styled from 'styled-components'
import Search from "../img/search.png";


const Container=styled.div`
width:100px ;
padding:20px ;
display:flex ;
flex-direction:column ;
align-items:center ;
-webkit-box-shadow: 5px 5px 26px -3px rgba(0,0,0,0.35); 
box-shadow: 5px 5px 26px -3px rgba(0,0,0,0.35);
@media only screen and (max-width:480px){
width:70px ;
}
`;
const Text=styled.span`
margin-top:10px ;
text-align:center ;
@media only screen and (max-width:480px){
font-size:12px;
}
`;
const Image=styled.img`
width:20px ;

`;

const MiniCard = () => {
  return (
    <Container>
        <Image src={Search}/>
        <Text>Ready to start building your new site?</Text>
    </Container>
  )
}

export default MiniCard