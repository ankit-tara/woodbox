import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../src/Layout";
import { Box, Button, Container, Grid, Card, CardContent, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import EditProfile from '../src/components/EditProfile'
import SellerProfile from '../src/components/SellerProfile'
import Modal from '../src/components/Modal'
import { ProductCardsData, OurConceptData, TestimonialData } from '../src/utils';
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from '../src/styles';

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('md')]: desktopStyles,
  [theme.breakpoints.between('sm', 'md')]: TabStyles,
  [theme.breakpoints.down('sm')]: mobileStyles
}))

export default function ProfilePage() {

  const classes = useStyles()

  const matches = useMediaQuery(theme => theme.breakpoints.down('sm'))

  return (
    <Layout>

      {/* <EditProfile/> */}
      <Modal/>
      <SellerProfile/>

    </Layout>
  );
}

