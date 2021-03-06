import React,{useState} from "react";
import TrackList from "./TrackList";
import {Container, Grid,Title,Select} from "@mantine/core";
import useFetch from "../hooks/useFetch";

const TopTracks= ()=>{
    const [timeRange,setTimeRange]= useState("long_term");//initial time rate for getting top music.
    const URL=`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}`;
    const tracks = useFetch(URL)
    const showContent = ()=>{
      return (
      <>
          <Select 
              ml={12} mb={10}
              data={[
                { value: 'short_term', label: '4 weeks'  },
                { value: 'medium_term', label: '6 months'},
                { value: 'long_term', label: 'all time'}
              ]}
              onChange={handleSelectChange}
              value={timeRange}
              radius="sm"
              size="sm"
              style={{ marginTop: 10,width:"8rem",backgroundColor:"#070d17" }}    
        />
        <Grid m={2} align="stretch">
            { tracks.items.map( item =>{
                return (
                <Grid.Col key = {item.id } sm={4}>
                <TrackList {...item} />
                </Grid.Col>
                );
                })
            }
        </Grid>
        </>)
    }
    const handleSelectChange =(event)=>  {
      setTimeRange(event);
    }

    return(
    <Container mt="3rem" fluid>
      
      <Title order={1} mt="4rem" ml={12} mb={10}>{ tracks.loading ? "LOADING... ":"Top Tracks"}</Title>
      {tracks.error
      ? <Title order={6} >there was a problem loading tracks, please try again.</Title>
      : showContent()
      }
    </Container>
    )
      
}
export default TopTracks;