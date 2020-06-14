import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'
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
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('sm')]: desktopStyles,
  [theme.breakpoints.between('xs', 'sm')]: TabStyles,
  [theme.breakpoints.down('xs')]: mobileStyles
}))

  function Sidebar(){

  const [state, setState] = React.useState({
    mobile: true,
    sports: false,
    cars: false,
    // chandigarh: false,
    // ludhiana: true,
    // patiala: false,
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

  return (
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
        <ExpansionPanelDetails>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={mobile} onChange={handleChange} color="primary" name="mobile" />}
                label="Mobile"
              />
              <FormControlLabel
                control={<Checkbox checked={sports} onChange={handleChange} color="primary" name="sports" />}
                label="Sports &amp; Gym"
              />
              <FormControlLabel
                control={<Checkbox checked={cars} onChange={handleChange} color="primary" name="cars" />}
                label="Cars"
              />
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
        <ExpansionPanelDetails>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onChange={handleChange} color="primary" name="ludhiana" />}
                label="Ludhiana"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} color="primary" name="patiala" />}
                label="Patiala"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} color="primary" name="chandigarh" />}
                label="Chandigarh"
              />
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
        <ExpansionPanelDetails>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onChange={handleChange} color="primary" name="ptu" />}
                label="Punjab Technical University"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} color="primary" name="nit" />}
                label="NIT Jalandhar"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} color="primary" name="iit" />}
                label="IIT Delhi"
              />
            </FormGroup>
          </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default Sidebar
