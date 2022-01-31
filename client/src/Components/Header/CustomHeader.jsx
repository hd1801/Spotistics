import React from "react";
import { Header,Button,Title,Image, Group} from '@mantine/core';

const CustomHeader = (props)=>{
  return (
    <Header height={80} padding="xl" style={{backgroundColor: "#000"}}>
    {/* Handle other responsive styles with MediaQuery component or createStyles function */}
      <div style={{ display: 'flex',justifyContent: "space-between", justifyItems:"center",alignItems: 'center', height: '100%'  }}>
        <Group spacing="xs" position="left">
        <Image 
          width="1.8rem"
          src="/Spotify_Icon_RGB_Green.png"
        />
        <Title order={4}  
        style={{ letterSpacing: 2.5, color:"#fff", fontStyle:"bold"}}>
        SPOTISTICS</Title>
        </Group>
        { !props.loginStatus && <Button radius="xl" color="green" size="sm" uppercase onClick={props.handleClick} >Login to spotify</Button>}
      </div>
      
    </Header>

  )
}

export default CustomHeader;

