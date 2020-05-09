import React from 'react'
import DesktopNavbar from './Desktop'
import MobileNavbar from './Mobile'
import useMediaQuery from '@material-ui/core/useMediaQuery'

function Header() {

  const matches = useMediaQuery(theme => theme.breakpoints.up('md'))

  if (matches) return <DesktopNavbar/>
  return <MobileNavbar/>
}

export default Header