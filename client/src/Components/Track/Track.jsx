import React from "react";
import { Container,Text, Card,Image, Button, Group} from "@mantine/core";

const Track=(props)=>{
    // Converting MS into minutes.  MS => MM:SS format 
    
    const Duration = ((props.duration_ms/60000).toFixed(2)).replace('.',':');
    const openSongPlayer = ()=>{
        window.open(props.external_urls.spotify);
    }
    const openSongAlbum = ()=>{
        window.open(props.album.external_urls.spotify);
    }
    console.log(props);
    return (
    <Card padding="xs"  shadow="xl"  style={{backgroundColor: "#070d17"}} >
    <Container padding={0} style={{display:"flex",justifyContent:"start",height:"100%",flexWrap:"nowrap" }} fluid>
        <Image height="7rem" width="7rem" src={props.album.images[1].url} me= "3rem"/>
        <Container mt={0} m=".7rem" padding={0} fluid>
        <Text size="md" weight="bold" >{props.name}</Text>
        <Text size="sm" >{Duration}</Text>
        <Text size="sm" weight="500" >{props.artists[0].name}</Text>
        </Container>
    </Container>
    <Group mt="sm" grow>
        <Button size= "md" onClick={openSongPlayer} variant="gradient" gradient={{ from: "green", to: "dark", deg:75 }} compact>Play Track</Button>
        <Button size= "md"  onClick={openSongAlbum} variant="gradient" gradient={{ from: 'green', to: 'dark', deg: 75 }} compact>View Album</Button>
    </Group>
    </Card>
   
    )
};

export default Track;