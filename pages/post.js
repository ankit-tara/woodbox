import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../src/Layout";
import { Box, Card, CardContent, TextField, Button, Container, Grid, Typography } from '@material-ui/core';
import { DropzoneDialog } from 'material-ui-dropzone'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import DetailsIcon from '@material-ui/icons/Details';
import SchoolIcon from '@material-ui/icons/School';
import CategoryIcon from '@material-ui/icons/Category';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';

const useStyles = makeStyles(theme => ({
  section:{
    padding: '5rem 0',
    position: 'relative',
    overflow: 'hidden'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  pdTitle:{
    marginBottom:'2rem'
  },
  card: {
    boxShadow: 'none',
    border: '#ccc solid 1px',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.6)',
    "&::before": {
      content: '""',
      background: "url(/static/images/circleCenter.svg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      top: "55%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      height: "540px",
      width: "540px",
      position: "absolute",
      zIndex: "-1",
    },
    "&::after": {
      content: '""',
      background: "url(/static/images/circleCenter.svg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      bottom: "-15rem",
      left: "-25rem",
      height: "50rem",
      width: "50rem",
      position: "absolute",
      zIndex: "-1",
    },
  },
  cardBody: {
    padding: '2rem !important'
  },
  formInput: {
    marginBottom: '2rem',
    width: '50%',
    [theme.breakpoints.down('sm')]:{
      width: '100%'
    }
  },
  formInputFullWidth: {
    width: '100%'
  },
  formInputField: {
    width: '80%',
    '& .MuiTextField-root': {
      width: '100%'
    }
  },
  formInputFieldFull: {
    [theme.breakpoints.up('sm')]: {
      width: '90%',
      '& .MuiTextField-root': {
        width: '100%'
      }
    }
  },
  Button: {
    width: '80%',
    height: '50px',
    marginTop: '1rem',
    backgroundColor: '#FD8118',
    color: '#fff',
    fontSize: '1rem',
    boxShadow: 'none',
    maxWidth: '200px'
  },
  Images:{
    display: 'flex',
    flexWrap: 'wrap',
    '& img':{
      width: '80px',
      height: '80px',
      objectFit: 'contain',
      marginRight: '10px',
      marginBottom: '10px',
      border:'solid 1px #333 '
    }
  },
  AddBtn:{
    border:'solid 1px #333',
    width: '80px',
    height: '80px',
    display: 'grid'
  },
  dialoge:{
    '& .MuiGrid-spacing-xs-8':{
      width: '100%',
      margin: '0'
    }
  }
}))

export default function Post() {

  const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = React.useState([])

  const handleClose = () => {
    setOpen(false)
  }

  const handleSave = (files) => {
    setFiles(files)
    setOpen(false)
    console.log(files)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <Layout>
      <section className={classes.section}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item lg={9} md={9} sm={8} xs={12} style={{margin: 'auto'}}>
              <Card className={classes.card}>
                <CardContent className={classes.cardBody}>
                  <Typography variant="h4" style={{marginBottom: '1rem'}}>Add Product Details</Typography>
                  <form className={classes.form} noValidate autoComplete="off">
                    <div className={classes.formInput}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <SubtitlesIcon />
                        </Grid>
                        <Grid item className={classes.formInputField}>
                          <TextField id="fname" label="Title" />
                        </Grid>
                      </Grid>
                    </div>
                    <div className={classes.formInput}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <LocalOfferIcon />
                        </Grid>
                        <Grid item className={classes.formInputField}>
                          <TextField id="lname" label="Price" />
                        </Grid>
                      </Grid>
                    </div>
                    <div className={classes.formInput}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <CategoryIcon />
                        </Grid>
                        <Grid item className={classes.formInputField}>
                          <TextField id="email" label="Categories" />
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
                    <div className={`${classes.formInput} ${classes.formInputFullWidth}`}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <DetailsIcon />
                        </Grid>
                        <Grid item className={`${classes.formInputField} ${classes.formInputFieldFull}`}>
                          <TextField id="about" label="Description" />
                        </Grid>
                    </Grid>
                    </div>
                    <div className={`${classes.formInput} ${classes.formInputFullWidth} `}>
                      <Typography variant="h6" style={{ marginBottom: '1rem' }}>Add images</Typography>
                      <div className={classes.Images}>
                        <img src="/static/images/culture.png"/>
                        <img src="/static/images/technical.png"/>
                        <img src="/static/images/library.png"/>
                        <Button onClick={handleOpen.bind(this)} className={classes.AddBtn}>
                          <PhotoCameraOutlinedIcon />
                          More+
                        </Button>
                      </div>
                      <DropzoneDialog
                        open={open}
                        onSave={handleSave.bind(this)}
                        acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                        showPreviews={true}
                        maxFileSize={5000000}
                        onClose={handleClose.bind(this)}
                        className={classes.dialoge}
                      />
                    </div>
                    <Button variant="contained" className={classes.Button}>
                      Add Product
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Layout>
  );
}

