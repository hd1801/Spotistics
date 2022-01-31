import React from "react";
import { Container,Text, Card,Image,} from "@mantine/core";
const Track=(props)=>{
    // Converting MS into minutes.  MS => MM:SS format 
    const Duration = ((props.duration_ms/60000).toFixed(2)).replace('.',':');
    
    return (
    <Card padding="sm" style={{height:"7rem"}} withBorder>
    
    <Container padding={0} style={{display:"flex",justifyContent:"start" }} fluid>
        <Image height="5rem" width="5rem" src={props.album.images[1].url} me= "3rem"/>
        <Container mt={0} m=".5rem" padding={0} fluid>
        <Text size="md" weight="bolder" >{props.name}</Text>
        <Text size="sm" >{Duration}</Text>
        <Text size="sm" weight="300" >{props.artists[0].name}</Text>
        
        </Container>
        
    </Container>

    </Card>
   
    )
};

export default Track;