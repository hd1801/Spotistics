import React from "react";
import {Card,Container, Button} from "@mantine/core"

const Login = (props)=>{
   return(
   <Card
   shadow="sm"
   style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: "40rem" } }
   withBorder>
       <Button variant="subtle" radius="xl" size="xl" onClick={props.handleClick} uppercase >Login to spotify</Button>
   </Card>
)

}

export default Login

