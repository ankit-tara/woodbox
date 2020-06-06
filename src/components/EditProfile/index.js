import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Container, Grid, Card, CardContent, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DetailsIcon from '@material-ui/icons/Details';
import SchoolIcon from '@material-ui/icons/School';
import LockIcon from '@material-ui/icons/Lock';
import AttachmentOutlinedIcon from '@material-ui/icons/AttachmentOutlined';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from './styles'
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('sm')]: desktopStyles,
  [theme.breakpoints.between('xs', 'sm')]: TabStyles,
  [theme.breakpoints.down('xs')]: mobileStyles
}))

const EditProfile = ({user}) => {

  const classes = useStyles()

  return (
    <section className={classes.section}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography className={classes.editTitle} variant="h3">
              Edit Profile Details
            </Typography>
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={12}>
            <Box className={classes.ProfileContainer}>
              <Typography variant="h5">Add image</Typography>
              <div className={classes.ProfileImage}>
                <img src="/static/images/placeholder.jpg" />
                <input
                  type="file"
                  name="file"
                  id="file"
                  className={classes.vHide}
                />
                <label htmlFor="file">
                  <AttachmentOutlinedIcon className={classes.uploadIcon} />
                </label>
              </div>
              <Link href="/profile">
                <Button variant="contained" className={classes.Button}>
                  View Profile
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item lg={9} md={9} sm={8} xs={12}>
            <Card className={classes.card}>
              <CardContent className={classes.cardBody}>
                {/* <Typography variant="h5">Edit Profile Details</Typography> */}
                <form className={classes.form} noValidate autoComplete="off">
                  <div className={classes.formInput}>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <PersonIcon />
                      </Grid>
                      <Grid item className={classes.formInputField}>
                        <TextField
                          id="fname"
                          label="First Name"
                          value={user.first_name}
                        />
                      </Grid>
                    </Grid>
                  </div>
                  <div className={classes.formInput}>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <PersonIcon />
                      </Grid>
                      <Grid item className={classes.formInputField}>
                        <TextField
                          id="lname"
                          label="Last Name"
                          value={user.last_name}
                        />
                      </Grid>
                    </Grid>
                  </div>
                  <div className={classes.formInput}>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <MailOutlineIcon />
                      </Grid>
                      <Grid item className={classes.formInputField}>
                        <TextField
                          id="email"
                          label="Email"
                          value={user.email}
                          disabled
                        />
                      </Grid>
                    </Grid>
                  </div>
                  <div className={classes.formInput}>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <PhoneIphoneIcon />
                      </Grid>
                      <Grid item className={classes.formInputField}>
                        <TextField
                          id="number"
                          label="Phone Number"
                          value={user.phone_number}
                        />
                      </Grid>
                    </Grid>
                  </div>
                  <div className={classes.formInput}>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <SchoolIcon />
                      </Grid>
                      <Grid item className={classes.formInputField}>
                        <TextField id="college" label="College" />
                      </Grid>
                    </Grid>
                  </div>
                  <div className={classes.formInput}>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <DetailsIcon />
                      </Grid>
                      <Grid item className={classes.formInputField}>
                        <TextField
                          id="branch"
                          label="Branch"
                          value={user.branch}
                        />
                      </Grid>
                    </Grid>
                  </div>
                  {/* <div className={classes.formInput}>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <LockIcon />
                      </Grid>
                      <Grid item className={classes.formInputField}>
                        <TextField
                          id="password"
                          label="Password"
                          type="password"
                        />
                      </Grid>
                    </Grid>
                  </div>
                  <div className={classes.formInput}>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <LockIcon />
                      </Grid>
                      <Grid item className={classes.formInputField}>
                        <TextField
                          id="cpassword"
                          label="Confirm password"
                          type="password"
                        />
                      </Grid>
                    </Grid>
                  </div> */}
                  {/* <div className={classes.formInputFullWidth}>
                    <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                    <DetailsIcon />
                    </Grid>
                    <Grid item className={classes.formInputFieldFull}>
                    <TextField id="about" label="About" />
                    </Grid>
                    </Grid>
                  </div> */}
                  <Button variant="contained" className={classes.Button}>
                    Update
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default EditProfile
