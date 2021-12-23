import React from 'react'
import SideNav from '../../components/SideNav'
import { Box, Flex, Module, Image } from 'gestalt'
import ChorditLogo from '../../static/img/chordit.png'
import menus from '../../mockup/menu'
import Menu from '../../components/Menu'

const SongDetails = () => {
  return (
    <Flex width="100%">
      <SideNav width='10%' position='left' id="LeftSideNav">
        <Box>
          <Image
            alt="example.com"
            naturalHeight={52}
            naturalWidth={52}
            src={ChorditLogo}
          />
          <Flex direction="column">
            <Menu itemsList={menus.actionsMenu} />
            <Menu itemsList={menus.accountMenu} />
            <Menu itemsList={menus.helpMenu} />
          </Flex>
        </Box>
      </SideNav>
      <Box width="75%" marginTop={3}>
        <Module id="MainContentPanel">
          ...
        </Module>
      </Box>
      <SideNav width='15%' position='right' id="RightSideNav">
        <Box>asdasdasd</Box>
      </SideNav>
    </Flex>
  )
}

export default SongDetails
