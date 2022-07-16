import React from 'react'
import styled from 'styled-components' 

const Container=styled.div`
margin:50px;
padding:20px ;
-webkit-box-shadow: 5px 5px 26px -3px rgba(0,0,0,0.35); 
box-shadow: 5px 5px 26px -3px rgba(0,0,0,0.35);
background-color:white ;
border-radius:10px;
display:flex;
flex-direction:column ;
align-items:center ;
@media only screen and (max-width:480px){
margin-right:0 ;
margin-bottom:10px ;
padding:10px ;
}
`;
const PriceContainer=styled.div`
display:flex ;
align-items:center ;
`;
const Price=styled.span`
font-weight:bold ;
font-size:50px ;
@media only screen and (max-width:480px){
font-size:30px ;
}
`;
const Type=styled.button`
padding:10px;
margin:10px 0 ;
border:1.2px solid crimson;
color:crimson;
background-color:white ;
border-radius:20px ;
width:100px;
@media only screen and (max-width:480px){
display:none ;
}
`;

const List=styled.ul`
list-style:none ;
`;
const ListItem=styled.li`
margin:30px 0 ;
@media only screen and (max-width:480px){
margin:10px ;
font-size:12px;
}
`;
const Button=styled.button`
border:none;
border-radius:10px ;
padding:15px;
background-color:blue ;
color:white;
font-size:16px ;
font-weight:bold ;
@media only screen and (max-width:480px){
font-size:12px ;
padding:5px ;
}
`;


const PriceCard = ({price,type}) => {
  return (
    <Container>
        <PriceContainer>
            $<Price>{price}</Price>/month
        </PriceContainer>
            <Type>{type}</Type>
            <List>
                <ListItem>200 handcrafted templates</ListItem>
                <ListItem>Exclusive Support</ListItem>
                <ListItem>+50 PreBuild Websites</ListItem>
                <ListItem>Premium Plugins</ListItem>{" "}
            </List>
            <Button>Join Now</Button>
        
    </Container>
  )
}

export default PriceCard