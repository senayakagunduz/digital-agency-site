import React from 'react'
import styled from "styled-components";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";


const Container=styled.div`
height:90% ;
background-image:url("https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") ;
background-repeat: no-repeat;
background-size: cover;
`;
const Wrapper=styled.div`
height:100%;
padding:20px ;
display:flex ;
align-items:center ;
justify-content:center ;
@media only screen and (max-width:480px){
flex-direction:column ;
}
`;
const FormContainer=styled.div`
width:50%;
`;

const Title=styled.h1`
margin:50px ;
margin-left:120px ;
margin-top:0 ;
@media only screen and (max-width:480px){
margin:20px ;
}
`;

const Form=styled.form`
height:250px ;
display:flex ;
align-items:center ;
justify-content:center ;
@media only screen and (max-width:480px){
flex-direction:column ;
}
`;

const LeftForm=styled.div`
height:100% ;
display:flex ;
flex-direction:column ;
justify-content:space-between ;
margin-right:20px ;
@media only screen and (max-width:480px){
height:50% ;
margin-right:0 ;
}
`;
const RightForm=styled.div`
height:100% ;
display:flex ;
flex-direction:column ;
justify-content:space-between ;
@media only screen and (max-width:480px){
height:50% ;
}
`;
const Input=styled.input`
width:200px;
padding:20px ;
@media only screen and (max-width:480px){
padding:5px ;
}
`;
const TextArea=styled.textarea`
width:200px;
height:60% ;
padding:20px ;
@media only screen and (max-width:480px){
padding:5px ;
margin-top:20px ;
height:30% ;
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
padding:10px ;
font-size:14px ;
margin-top:20px ;
}
`;

const AddressContainer=styled.div`
width:50%;
display:flex ;
flex-direction:column ;
align-items:center ;
@media only screen and (max-width:480px){
width:100%;
margin-top:20px ;
}
`;
const AdressItem=styled.div`
display:flex ;
align-items:center ;
margin-bottom:50px ;
@media only screen and (max-width:480px){
margin-bottom:20px ;
}
`;
const Icon=styled.img`
width:20px;
margin-right:20px ;
@media only screen and (max-width:480px){
width:15px;
}
`;
const Text=styled.span`
font-size:20px ;
margin-right:15px ;
@media only screen and (max-width:480px){
margin-top:20px ;
font-size:14px ;
}
`;
const Contact = () => {
  return (
    <Container>
        <Wrapper>
            <FormContainer>
                <Title>Questions? <br/>Let's Get In Touch</Title>
                <Form>
                    <LeftForm>
                        <Input placeholder='your name'/>
                        <Input placeholder='your email'/>
                        <Input placeholder='your subject'/>   
                    </LeftForm>
                    <RightForm>
                        <TextArea placeholder='your message'/>
                        <Button>Send</Button>
                    </RightForm>
                </Form>  
            </FormContainer>
        <AddressContainer>
            <AdressItem>
                <Icon src={Map}/>
                <Text>Soğanlık Yeni, Balıkesir Cad. No:5 Kartal/Istanbul</Text>
            </AdressItem>
            <AdressItem>
                <Icon src={Phone}/>
                <Text>+90 539 663 70 14</Text>
                 <Text>+90 539 662 70 15</Text>{" "}
            </AdressItem>
            <AdressItem>
                <Icon src={Send}/>
                <Text>contact@agency.dev</Text>
                <Text>senayakgndz@gmail.com</Text>{" "}
            </AdressItem>
        </AddressContainer>
        </Wrapper>
    </Container>
  )
}

export default Contact