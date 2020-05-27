import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Card, CardContent, Typography, Link } from '@material-ui/core'
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('sm')]: desktopStyles,
  [theme.breakpoints.between('xs', 'sm')]: TabStyles,
  [theme.breakpoints.down('xs')]: mobileStyles
}))

const CardHorizontal = ({ data}) => {

  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent className="cardBody">
        <div className={classes.Media}>
          <img src={data.image.url} alt="" className="image" />
        </div>
        <div className="content" >
          <Typography variant="h4" className={classes.title}>{data.title}</Typography>
          <Typography className={classes.excerpt}>{data.excerpt}</Typography>
          <Button variant="contained" component={Link} to="data.link.url" className={classes.Button}>
            {data.link.name}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardHorizontal
