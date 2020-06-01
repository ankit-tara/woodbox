import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import { Button, Card, CardContent, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from './styles'
import styled from "styled-components";


const StyledDialog = styled(Dialog)`
  .MuiBackdrop-root {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;


const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('sm')]: desktopStyles,
  [theme.breakpoints.between('xs', 'sm')]: TabStyles,
  [theme.breakpoints.down('xs')]: mobileStyles
}))

const Modal = () => {

  const [open, setopen] = useState(false);

  const openModal = () => {
    setopen(true);
  };

  const closeModal = () => {
    setopen(false);
  };

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 }
  ]

  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title,
  };

  const flatProps = {
    options: top100Films.map((option) => option.title),
  };

  const [value, setValue] = React.useState(null);

  const classes = useStyles()

  return (
    <>
      <button onClick={openModal} style={{ margin: '1rem auto' }}>Open Modal</button>
      <StyledDialog
        open={open}
        onClose={closeModal}
        aria-labelledby="form-dialog-title"
        className={classes.modal}
      >
        <Card className={classes.card}>
          <CardContent className={classes.cardBody}>
            <CloseIcon onClick={closeModal} className={classes.closeIcon} />
            <img src="/static/images/logo.png" alt="" className={classes.image} />
            <Typography variant="h5" className={classes.title}>Fill Important Details</Typography>
            <Typography >To make Your Search Easy Kindly Please Select Your College Name or Location</Typography>
            <form className={classes.container}>
              <Autocomplete
                {...defaultProps}
                id="debug"
                className={classes.Autocomplete}
                debug
                renderInput={(params) => <TextField {...params} label="Type Your College Name" margin="normal" />}
              />
              <Button variant="contained" className={classes.Button}>
                Done
              </Button>
            </form>
          </CardContent>
        </Card>
      </StyledDialog>
    </>
  );
}

export default Modal
