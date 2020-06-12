import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../Layout";
import { Box, Card, CardContent, TextField, Button, Container, Grid, Typography } from '@material-ui/core';
import { DropzoneDialog } from 'material-ui-dropzone'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import DetailsIcon from '@material-ui/icons/Details';
import SchoolIcon from '@material-ui/icons/School';
import Autocomplete from "@material-ui/lab/Autocomplete";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { searchUniversities, searchCategories } from "../apis/global-api";
import { AddProduct } from "../apis/auth-api";
import CategoryIcon from '@material-ui/icons/Category';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch } from "react-redux";
import { authenticated } from "../redux/actions/auth";
import { useRouter } from "next/router";

const useStyles = makeStyles(theme => ({
  section: {
    padding: '5rem 0',
    position: 'relative',
    overflow: 'hidden'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  pdTitle: {
    marginBottom: '2rem'
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
    [theme.breakpoints.down('sm')]: {
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
  formControl:{
    width: '100%'
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
  Images: {
    display: 'flex',
    flexWrap: 'wrap',
    '& img': {
      width: '80px',
      height: '80px',
      objectFit: 'contain',
      marginRight: '10px',
      marginBottom: '10px',
      border: 'solid 1px #333 '
    }
  },
  AddBtn: {
    border: 'solid 1px #333',
    width: '80px',
    height: '80px',
    display: 'grid'
  },
  dialogeCustom: {
    '& .MuiGrid-spacing-xs-8': {
      width: '100%',
      margin: '0'
    }
  }
}))

export default function Post({user}) {

  const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  const [files, setfiles] = React.useState([])
  const [title, settitle] = useState("");
  const [type, settype] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [university, setuniversity] = useState({ name: "" });
  const [category, setcategory] = useState({ name: "" });
  const [errs, seterrs] = useState({});
  const [universities, setuniversities] = useState([]);
  const [categories, setcategories] = useState([]);
  const [loading, setloading] = useState(false);
  const [backdrop, setbackdrop] = useState(true);
  const [formerrs, setformerrs] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClose = () => {
    setOpen(false)
  }

  const handleSave = (files) => {
    setfiles(files)
    setOpen(false)
    console.log(files)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const updateformData = (e, type) => {
    e.preventDefault();
    eval("set" + type + "('" + e.target.value + "')");
  };

  const handleUniSearch = (e) => {
    let value = e.target.value;
    if (!value) return;
    setloading(true);
    searchUniversities(value).then((response) => {
      setloading(false);
      setuniversities(response);
    });
  };

  const handleCatSearch = (e) => {
    let value = e.target.value;
    if (!value) return;
    setloading(true);
    searchCategories(value).then((response) => {
      setloading(false);
      setcategories(response.data);
    });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault()
    let university_id = universities.find(
      (item) => item.name == university.name
    );
    let category_id = categories.find(
      (item) => item.name == category.name
    );
    let data = {
      title: title,
      description: description,
      price: price,
      university_id: university_id.id,
      category_id: category_id.id,
      seller_id: user.id,
      active:true,
      type: type
    };
    console.log(data)
    AddProduct(data).then((response) => {
      if (response.error) {
        alert('error')
      } else {
        alert('added')
      }
    });
  };

  return (
    <Layout>
      <section className={classes.section}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item lg={9} md={9} sm={8} xs={12} style={{ margin: 'auto' }}>
              <Card className={classes.card}>
                <CardContent className={classes.cardBody}>
                  <Typography variant="h4" style={{ marginBottom: '1rem' }}>Add Product Details</Typography>
                  <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <div className={classes.formInput}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <SubtitlesIcon />
                        </Grid>
                        <Grid item className={classes.formInputField}>
                          <TextField id="fname" label="Title" value={title} onChange={(e) => updateformData(e, "title")} />
                        </Grid>
                      </Grid>
                    </div>
                    <div className={classes.formInput}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <LocalOfferIcon />
                        </Grid>
                        <Grid item className={classes.formInputField}>
                          <TextField id="lname" label="Price" value={price} onChange={(e) => updateformData(e, "price")} />
                        </Grid>
                      </Grid>
                    </div>
                    <div className={classes.formInput}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <CategoryIcon />
                        </Grid>
                        <Grid item className={classes.formInputField}>
                          <Autocomplete
                            required
                            options={categories}
                            getOptionLabel={(option) => {
                              return option.name;
                            }}
                            getOptionSelected={(option, value) => option.name === value.name}
                            loading={loading}
                            value={category}
                            onInputChange={handleCatSearch}
                            // onChange={(e) => updateformData(e, "university")}
                            onSelect={(e) => setcategory({ name: e.target.value })}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label="Search Categories"
                                InputProps={{
                                  ...params.InputProps,
                                  endAdornment: (
                                    <React.Fragment>
                                      {loading ? (
                                        <CircularProgress color="primary" size={20} />
                                      ) : null}
                                      {params.InputProps.endAdornment}
                                    </React.Fragment>
                                  ),
                                }}
                              />
                            )}
                          />
                          {errs["category"] && (
                            <Typography color="error">Please select a category.</Typography>
                          )}
                        </Grid>
                      </Grid>
                    </div>
                    <div className={classes.formInput}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <SchoolIcon />
                        </Grid>
                        <Grid item className={classes.formInputField}>
                          <Autocomplete
                            required
                            options={universities}
                            getOptionLabel={(option) => {
                              return option.name;
                            }}
                            getOptionSelected={(option, value) => option.name === value.name}
                            loading={loading}
                            value={university}
                            onInputChange={handleUniSearch}
                            // onChange={(e) => updateformData(e, "university")}
                            onSelect={(e) => setuniversity({ name: e.target.value })}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label="Search University"
                                InputProps={{
                                  ...params.InputProps,
                                  endAdornment: (
                                    <React.Fragment>
                                      {loading ? (
                                        <CircularProgress color="primary" size={20} />
                                      ) : null}
                                      {params.InputProps.endAdornment}
                                    </React.Fragment>
                                  ),
                                }}
                              />
                            )}
                          />
                          {errs["university"] && (
                            <Typography color="error">Please select a university.</Typography>
                          )}
                        </Grid>
                      </Grid>
                    </div>
                    <div className={`${classes.formInput}`}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <DetailsIcon />
                        </Grid>
                        <Grid item className={`${classes.formInputField} `}>
                          <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">type</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={type}
                              onChange={(e) => updateformData(e, "type")}
                            >
                              <MenuItem value="Buy">Buy</MenuItem>
                              <MenuItem value="Rental">Rental</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </div>
                    <div className={`${classes.formInput}`}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <DetailsIcon />
                        </Grid>
                        <Grid item className={`${classes.formInputField} `}>
                          <TextField id="about" label="Description" value={description} onChange={(e) => updateformData(e, "description")} />
                        </Grid>
                      </Grid>
                    </div>
                    <div className={`${classes.formInput} ${classes.formInputFullWidth} `}>
                      <Typography variant="h6" style={{ marginBottom: '1rem' }}>Add images</Typography>
                      <div className={classes.Images}>
                        <img src="/static/images/culture.png" />
                        <img src="/static/images/technical.png" />
                        <img src="/static/images/library.png" />
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
                        className="dialogeCustom"
                      />
                    </div>
                    <Button type="submit" variant="contained" className={classes.Button}>
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

