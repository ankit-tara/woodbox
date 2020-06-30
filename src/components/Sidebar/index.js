import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography, Button } from '@material-ui/core'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { searchCategories, searchUniversities, searchCities, getCities, getCategories } from "../../apis/global-api";
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('sm')]: desktopStyles,
  [theme.breakpoints.between('xs', 'sm')]: TabStyles,
  [theme.breakpoints.down('xs')]: mobileStyles
}))

  function Sidebar(){

  const [categories, setcategories] = useState([]);
  const [universities, setuniversities] = useState([]);
  const [Cities, setCities] = useState([]);

  // useEffect(() => {
  //   fetchCategories();
  // }, []);
  
  // useEffect(() => {
  //   fetchCities();
  // }, []);

  // const fetchCategories = async () => {
  //   await getCategories().then((response) => {
  //     console.log(response);
  //     setcategories(response);
  //   });
  // };

  // const fetchCities = async () => {
  //   await getCities().then((response) => {
  //     console.log(response);
  //     setCities(response);
  //   });
  // };

  const handleCatSearch = (e) => {
    let value = e ? e.target.value : "";
    if (!value) return;
    searchCategories(value).then((response) => {
      setcategories(response.data);
    });
  };

  const handleUniSearch = (e) => {
    let value = e ? e.target.value : "";
    if (!value) return;
    searchUniversities(value).then((response) => {
      setuniversities(response);
    });
  };

  const handleCitySearch = (e) => {
    let value = e ? e.target.value : "";
    if (!value) return;
    searchCities(value).then((response) => {
      console.log('college', response)
      setCities(response.data);
    });
  };

  const [state, setState] = useState({
    mobile: true,
    sports: false,
    cars: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [expanded, setExpanded] = React.useState('panel1');
  const handlePanelChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  const { mobile, sports, cars } = state;
  const classes = useStyles()

  console.log('categories', categories)

  return (
    <>
      <div className={classes.root}>
        <Typography variant="h6" className={classes.heading}>Filter</Typography>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handlePanelChange('panel1')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" className={classes.title}>Category</Typography>
          </ExpansionPanelSummary>
          <input className={classes.searchField} type="text" placeholder="search Categoty" onKeyUp={handleCatSearch} />
          <ExpansionPanelDetails>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                {categories && categories.map((cat)=>(
                  <FormControlLabel
                  control={<Checkbox  onChange={handleChange} color="primary" name="mobile" />}
                  label={cat.name}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={handlePanelChange('panel2')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" className={classes.title}>City</Typography>
          </ExpansionPanelSummary>
          <input className={classes.searchField} type="text" placeholder="search City" onKeyUp={handleCitySearch} />
          <ExpansionPanelDetails>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                {Cities && Cities.map((cat) => (
                  <FormControlLabel
                    control={<Checkbox onChange={handleChange} color="primary" name="mobile" />}
                    label={cat.name}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={handlePanelChange('panel3')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" className={classes.title}>College</Typography>
          </ExpansionPanelSummary>
          <input className={classes.searchField} type="text" placeholder="search College" onKeyUp={handleUniSearch} />
          <ExpansionPanelDetails>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                {universities && universities.map((cat) => (
                  <FormControlLabel
                    control={<Checkbox onChange={handleChange} color="primary" name="mobile" />}
                    label={cat.name}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <Button className={classes.filterBtn}>Filter</Button>
    </>
  )
}

export default Sidebar
