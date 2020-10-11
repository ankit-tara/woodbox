import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../src/Layout";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import {
  commonStyles,
  desktopStyles,
  mobileStyles,
  TabStyles,
} from "../src/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  ...commonStyles,
  [theme.breakpoints.up("md")]: desktopStyles,
  [theme.breakpoints.between("sm", "md")]: TabStyles,
  [theme.breakpoints.down("sm")]: mobileStyles,
}));

export default function NotVerifyEmail() {
  const classes = useStyles();

  return (
    <Layout>
      <section style={{ textAlign: "center", minWidth: 275 }}>
        <Card>
          <CardContent>
           
            <Typography variant="h5" component="h2">
              Email Not Verified
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
             Go to your inbox and click on verification link to ativate your account
            </Typography>
            <Typography variant="body2" component="p">
             Get a new verification link by clicking <Button size="small" variant="primary">Here</Button>
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
      </section>
    </Layout>
  );
}
