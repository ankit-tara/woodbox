import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  Accordian: {
    boxShadow: "none",
    border: "none",
    marginBottom: "0.5rem",
    position: "relative",
    "&::after": {
      position: "absolute",
      width: "100%",
      height: "1px",
      background: "#d2d2d2",
      bottom: "-0.2rem",
      left: 0,
      content: '""',
    },
    "& .MuiAccordionSummary-content.Mui-expanded": {
      marginBottom: "0",
    },
    "& button": {
      border: "solid 1px #fd8118",
    },
  },
  Flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      //   flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  heading: {
    fontSize: "1.2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  desc: {
    marginBottom: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
  collegeName: {
    color: "#6d6d6d",
    fontStyle: "italic",
    fontSize: "0.91rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  Details: {
    display: "grid",
  },
}));

export default function Accordian(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion className={classes.Accordian}>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        // expandIcon={<ExpandMoreIcon />}
      >
        <div className={classes.Flex}>
          <Typography variant="h6" className={classes.heading}>
            I won't, then!--Bill's to go nearer till she was.
          </Typography>
          <Button color="primary">Chat</Button>
        </div>
      </AccordionSummary>
      <AccordionDetails className={classes.Details}>
        <Typography className={classes.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
        <Typography className={classes.collegeName}>
          Gurn Nanak Dev Engineering College, Ludhiana
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
