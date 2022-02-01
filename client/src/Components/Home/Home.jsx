import React,{useState , useEffect} from "react";
import Track from "../Track/Track";
import {Container, Grid,Title} from "@mantine/core";


const Home= (props)=>{
    const [isLoaded, setLoaded] =useState(false);
    const [items, setItems] =useState([]);
    const [error, setError] =useState(null);
    
    useEffect(() => {
        fetch("https://api.spotify.com/v1/me/top/tracks",{method:"GET",
        headers: {Authorization: 'Bearer ' + props.params.access_token}
        })
        .then(response => response.json())
        .then(data => {
            setLoaded(true)
            setItems(data.items)
        },
        (err)=>{
            setLoaded(true);
            setError(err)
        }
        )
        
        
        }, [props.params.access_token]);

        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
            return (
              <Container mt="3rem" fluid>
                <Title order={1} mb={10}>Top Songs</Title>
              <Grid m={2} align="stretch">
               { items.map( item =>{ 
                   console.log(item);
                   return (
                    <Grid.Col key = {item.id } sm={4}>
                    <Track {...item} />
                    </Grid.Col>
                    );
                   })
                }
                </Grid>
              </Container>
            );
    }
}
export default Home;