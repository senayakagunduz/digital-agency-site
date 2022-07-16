import React from 'react'
import styled from 'styled-components';

const Container=styled.div`
width:100;
background-color:crimson ;
color:lightgrey;
`;
const Wrapper=styled.div`
padding:20px;
display:flex ;
justify-content:space-between ;
@media only screen and (max-width:480px){
padding:10px ;
}
`;
const List=styled.li`
padding:0 ;
margin:0 ;
display:flex ;
list-style:none ;
`;
const ListItem=styled.ul`
margin-right:20px ;
@media only screen and (max-width:480px){
margin-right:5px ;
font-size:14px;
}
`;
const Coppyright=styled.span`
@media only screen and (max-width:480px){
font-size:14px ;
}`;


const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <List>
                <ListItem>Guide</ListItem>
                <ListItem>Support</ListItem>
                <ListItem>API</ListItem>
                <ListItem>Community</ListItem>
            </List>
            <Coppyright>Agency Dev</Coppyright>
        </Wrapper>
    </Container>
  )
}

export default Footer