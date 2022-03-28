import React from "react";
import { Header,Button,Title,Image, Group,UnstyledButton} from '@mantine/core';

const CustomHeader = (props)=>{
  const LinkStyle = {color:"#fff",fontSize:".9rem",fontWeight:"bolder"};
  return (
    <Header className="shadow" height={70} padding="md" style={{backgroundColor:"#070d17", border:"none"}} fixed>
    {/* Handle other responsive styles with MediaQuery component or createStyles function */}
      <div style={{ display: 'flex',justifyContent: "space-between", alignItems: "center", height: '100%' ,flexWrap:"wrap" }}>
        <Group spacing="xs" position="left" >
        <Image 
          width="1.8rem"
          src="/Spotify_Icon_RGB_Green.png"
        />
        <Title order={4}  
        style={{ letterSpacing: 2.5, color:"#fff", fontStyle:"bold"}}>
        SPOTISTICS</Title>
        </Group>
       
       { !props.loginStatus 
          ? <Button radius="sm" color="green" size="sm" uppercase compact onClick={props.handleClick} >Login to spotify</Button>
          : <Group spacing="sm" position="right" >
              <UnstyledButton onClick={()=>props.changePage(0)} style={LinkStyle} >Home   </UnstyledButton>
              <UnstyledButton onClick={()=>props.changePage(1)} style={LinkStyle} >Tracks  </UnstyledButton>
              <UnstyledButton onClick={()=>props.changePage(2)} style={LinkStyle} >Artists   </UnstyledButton>
            </Group>
        }
       
      </div>
      
    </Header>

  )
}

export default CustomHeader;

