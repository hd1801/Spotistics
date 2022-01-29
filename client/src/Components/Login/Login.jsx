import React from "react";
import {Blockquote, Button, Container,Title,Text, Group} from "@mantine/core"

const Login = (props)=>{
   return(
    <Container style={{display: 'flex',flexDirection:"column",alignItems:"center",justifyItems:"center",justifyContent:"center",height:'60%'}}  fluid>
        <Text
        align="center"
        mt= "md"
        color="green"
        style = {{fontSize:"1.5rem",fontWeight:"600"}}
    >Your Spotify Stats year-round!</Text>
    <Blockquote mt="xl" color="green" cite="Mark Ruffalo"  >
    <Title
        
        style = {{color:"#fff"}}
        order={2}
    >
    You can tell a lot about a person by what's on their playlist.
    </Title>
    </Blockquote>
    <Button mt="xl" radius="xl" color="green" size="md"  onClick={props.handleClick} uppercase >Login to spotify</Button>        
    
    </Container>
    );

}

export default Login

