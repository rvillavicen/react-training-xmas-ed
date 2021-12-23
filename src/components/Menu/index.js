import React from 'react'
import { Flex, Button, Divider, Box } from 'gestalt'

const Menu = ({ itemsList }) => (
  <Box>
    <Divider />
    <Flex direction="column" alignItems="start">
      {itemsList.map(item => 
        <Button
          key={item.text}
          text={item.text}
          href={item.url}
          role="link"
          color="transparent"
          iconEnd={item.icon || null}
          size="sm"
        />
      )}
    </Flex>
  </Box>
)

export default Menu
