import React, { useState } from "react";
import { Header,MediaQuery,Burger,useMantineTheme} from '@mantine/core';

const CustomHeader = ()=>{
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <Header height={60} padding="md" >
    {/* Handle other responsive styles with MediaQuery component or createStyles function */}
      <div style={{ display: 'flex',justifyContent: "center", alignItems: 'center', height: '100%'  }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          size="sm"
          color={theme.colors.gray[6]}
          mr="xl"
          />
        </MediaQuery>    
      SPOTISTICS
      </div>
    </Header>

  )
}

export default CustomHeader;

