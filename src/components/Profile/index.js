import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Container, Grid, Card, CardContent, Typography } from '@material-ui/core';
import AttachmentOutlinedIcon from '@material-ui/icons/AttachmentOutlined';
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('sm')]: desktopStyles,
  [theme.breakpoints.between('xs', 'sm')]: TabStyles,
  [theme.breakpoints.down('xs')]: mobileStyles
}))

const Profile = () => {

  const classes = useStyles()

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item lg={3} md={3} sm={4} xs={12}>
          <Box className={classes.ProfileContainer}>
            <Typography variant="h5">Edit Profile</Typography>
            <div className={classes.ProfileImage}>
              <img src="/static/images/placeholder.jpg"/>
              <input type="file" name="file" id="file" className={classes.vHide}/>
              <label htmlFor="file"><AttachmentOutlinedIcon className={classes.uploadIcon} /></label>
            </div>
            <Button variant="contained" className={classes.Button}>
              View Profile
            </Button>
          </Box>
        </Grid>
        <Grid item lg={9} md={9} sm={8} xs={12}>
          <Card className={classes.card}>
            <CardContent className={classes.cardBody}>
              {/* <img src={data.image.url} alt="" className={classes.image} />
              <Typography variant="h5" className={classes.eventName}>{data.title}</Typography> */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Profile
