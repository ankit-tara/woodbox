import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../../src/Layout";
import Chat from "../../src/components/Chat";
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from '../../src/styles';

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('md')]: desktopStyles,
  [theme.breakpoints.between('sm', 'md')]: TabStyles,
  [theme.breakpoints.down('sm')]: mobileStyles
}))

export default function ChatPage() {

  const classes = useStyles()

  return (
    <Layout>
        <Chat/>
    </Layout>
  );
}

