import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    Ad:{
      margin:'1rem 0',
      '& img':{
        width: '100%',
        height: 'auto',
        maxHeight: '325px'
      }
    }
}))

export default function Advertisement(props) {

  const classes = useStyles()

  return (
    <div className={classes.Ad}>
      <Container maxWidth="xl">
        <img src="/static/images/ads.jpg" />
      </Container>
    </div>
  )
};

