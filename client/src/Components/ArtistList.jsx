import React from "react";
import { Container,Text, Card,Image,Badge, Group} from "@mantine/core";

const ArtistList=(props)=>{
    
    return (
    <Card padding="md"  shadow="xl"  style={{backgroundColor: "#070d17"}} >
    <Container padding={0} style={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",alignItems:"center" }} fluid>
        <Image radius={100} onClick={()=>{window.open(props.external_urls.spotify)}} height="7rem" width="7rem" src={ props.images[0] ? props.images[0].url : "https://i.scdn.co/image/ab67616d0000b273113ad52fd0dde0a7a1db81f1"} me= "3rem"/>
        <Text onClick={()=>{window.open(props.external_urls.spotify)}} mt="xl" size="md" weight="bold" >{props.name}</Text>
        <Group p="lg" mt="sm" position="center">
            {props.genres.map( (item,index) =>{
                return <Badge onClick={()=>{window.open(`https://open.spotify.com/genre/${item}`)}} key={index} mx={".1rem"} p={0} color="green" size="md" radius="sm" variant="filled">{item}</Badge>
            })}
        </Group>
    </Container>
    </Card>
   
    )
};

export default ArtistList;