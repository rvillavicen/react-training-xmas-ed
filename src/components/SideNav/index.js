import React from 'react'
import { Box } from 'gestalt'

const SideNav = ({
  width,
  position,
  children,
  id
}) => {
  return (
    <Box
      width={width}
      height="100vw"
      bottom
      top
      left
      margin={3}
      rounding={4}
      borderStyle="shadow"
    >
      {children}
    </Box>
  )
}

export default SideNav
