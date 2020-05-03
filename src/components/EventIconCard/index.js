import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('sm')]: desktopStyles,
  [theme.breakpoints.between('xs', 'sm')]: TabStyles,
  [theme.breakpoints.down('xs')]: mobileStyles
}))

const EventIconCard = ({data}) => {

  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardBody}>
        <img src={data.image.url} alt="" className={classes.image} />
        <Typography variant="h5" className={classes.eventName}>{data.title}</Typography>
      </CardContent>
    </Card>
  )
}

export default EventIconCard
