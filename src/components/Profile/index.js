import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Container, Grid, Card, CardContent, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DetailsIcon from '@material-ui/icons/Details';
import AttachmentOutlinedIcon from '@material-ui/icons/AttachmentOutlined';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
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
            <Typography variant="h5">Add image</Typography>
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
              <Typography variant="h5">Edit Profile Details</Typography>
              <form className={classes.form} noValidate autoComplete="off">
                <div className={classes.formInput}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <PersonIcon />
                    </Grid>
                    <Grid item className={classes.formInputField}>
                      <TextField id="fname" label="First Name" />
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.formInput}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <PersonIcon />
                    </Grid>
                    <Grid item className={classes.formInputField}>
                      <TextField id="lname" label="Last Name" />
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.formInput}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <MailOutlineIcon />
                    </Grid>
                    <Grid item className={classes.formInputField}>
                      <TextField id="email" label="Email" />
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.formInput}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <PhoneIphoneIcon />
                    </Grid>
                    <Grid item className={classes.formInputField}>
                      <TextField id="number" label="Phone Number" />
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.formInputFullWidth}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <DetailsIcon />
                    </Grid>
                    <Grid item className={classes.formInputFieldFull}>
                      <TextField id="about" label="About" />
                    </Grid>
                  </Grid>
                </div>
                <Button variant="contained" className={classes.Button}>
                  Save
               </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Profile
