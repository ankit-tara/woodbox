import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DesktopNavbar from './Desktop'
import MobileNavbar from './Mobile'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('sm')]: desktopStyles,
  [theme.breakpoints.between('xs', 'sm')]: TabStyles,
  [theme.breakpoints.down('xs')]: mobileStyles
}))

function Header() {

  const matches = useMediaQuery(theme => theme.breakpoints.up('md'))

  if (matches) return <DesktopNavbar/>
  return <MobileNavbar/>
}

export default Header