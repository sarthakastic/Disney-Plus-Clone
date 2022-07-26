import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp>
                Get All There
            </SignUp>
            <Description>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat repellendus incidunt, perspiciatis totam dolorem suscipit illo explicabo voluptate aliquid fugit at eius dicta aut assumenda deserunt ipsum tenetur maiores nostrum!
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`

height: calc(100vh - 70px);
position: relative;
display: flex;
align-items: top;
justify-content: center;


&:before{
    position: absolute;
    top: 0;
    bottom: 0;
    content: "";
    left: 0;
    right:0; 
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.7;
    z-index: -1;
}



`

const CTA = styled.div`
max-width: 650px;
padding: 80px 40px;
width: 80%;
display: flex;
flex-direction: column;
margin-top: 100px;
align-items: center;

`

const CTALogoOne =  styled.img`
`
const SignUp = styled.a`
width: 100%;
background-color: #0063e5;
font-weight: bold;
text-transform: uppercase;
text-align: center;
font-size: 18px;
cursor: pointer;
padding: 17px 0;
color: #f9f9f9;
border-radius: 4px;
transition: all 250ms;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom: 12px;
&:hover{
    background-color: #0483ee;
}
`
const Description = styled.p`
font-size: 11px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
`



const CTALogoTwo = styled.img`
width: 90%;

`