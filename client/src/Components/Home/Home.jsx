import React,{useEffect,useContext, useReducer} from "react";
import Track from "../Track/Track";
import {Container, Grid,Title} from "@mantine/core";
import { TokenContext } from "../../App";

const initialState=  {
  loading: true,
  items: [],
  error: null
}
const trackReducer = (state , action)=>{
  switch(action.type){
    case "FETCH_SUCCESS": return { loading: false , items: action.payload, error:""}
    case "FETCH_ERROR": return { loading: false,items: [] ,error:"OOPS!! , Something Went Wrong."}
    default: return state
  }
}

const Home= (props)=>{
    const accessToken =  useContext(TokenContext);
    const [tracks,dispatch] = useReducer(trackReducer,initialState);
    const showContent = ()=>{
      return (
        <Grid m={2} align="stretch">
          { tracks.items.map( item =>{ 
              console.log(item);
              return (
              <Grid.Col key = {item.id } sm={4}>
              <Track {...item} />
              </Grid.Col>
              );
              })
          }
        </Grid>
      )
    }
    useEffect(() => {
        fetch("https://api.spotify.com/v1/me/top/tracks",{method:"GET",
        headers: {Authorization: 'Bearer ' + accessToken}
        })
        .then(response => response.json())
        .then(data => {
            dispatch({type: "FETCH_SUCCESS", payload: data.items });
        })
        .catch(err => {dispatch({type: "FETCH_ERROR"});
        }
        )},[accessToken]);
  
    return(
    <Container mt="3rem" fluid>
      <Title order={1} mb={10}>{ tracks.loading ? "LOADING... ": "Top Tracks "}</Title>
      {tracks.error
      ? <Title order={6} >there was a problem loading tracks, please try again.</Title>
      : showContent()
      }
    </Container>
    )
      
}
export default Home;