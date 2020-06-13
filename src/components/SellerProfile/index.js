import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import SchoolIcon from "@material-ui/icons/School";
import ProductCard from "../ProductCard";
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from "./styles";
import { getProducts } from "../../apis/global-api";

const useStyles = makeStyles((theme) => ({
  ...commonStyles,
  [theme.breakpoints.up("sm")]: desktopStyles,
  [theme.breakpoints.between("xs", "sm")]: TabStyles,
  [theme.breakpoints.down("xs")]: mobileStyles,
}));

const sellerProfile = ({ user }) => {
  const [data, setdata] = useState();
  console.log(user)
  useEffect(() => {
    const fetchData = () => {
      getProducts(`?seller_id=${user.id}`).then((data) => setdata(data));
    };
    fetchData();
  }, [user]);

  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography className={classes.editTitle} variant="h3">
              {user.first_name} {user.last_name}
            </Typography>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Box className={classes.ProfileContainer}>
              <div className={classes.ProfileImage}>
                <img
                  src={
                    user.profile_img
                      ? user.profile_img
                      : "/static/images/placeholder.jpg"
                  }
                />
              </div>
              <div className={classes.ProfileDetails}>
                <Typography variant="h6">
                  <PersonIcon />
                  {user.first_name} {user.last_name}
                </Typography>
                <Typography variant="h6">
                  <MailOutlineIcon />
                  <a href="mailto:ankittara15@gmail.com">{user.email}</a>
                </Typography>
                <Typography variant="h6">
                  <PhoneIphoneIcon />
                  <a href="tell:9803254362">{user.phone_number}</a>
                </Typography>
                <Typography variant="h6">
                  <SchoolIcon />
                  {user.university ? user.university.name : ""}
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Card className={classes.card}>
              <CardContent className={classes.cardBody}>
                <Box className={classes.productsHeader}>
                  <Typography variant="h5">Published Ads</Typography>
                </Box>
                <Box className={classes.ProductsGridWrapper}>
                  {data &&
                    data.data.map((data) => (
                      <div key={data.id}>
                        <ProductCard data={data} />
                      </div>
                    ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default sellerProfile;
