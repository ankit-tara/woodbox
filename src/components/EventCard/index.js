import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import StarRatings from 'react-star-ratings'

import { commonStyles, desktopStyles, mobileStyles, TabStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('sm')]: desktopStyles,
  [theme.breakpoints.between('xs', 'sm')]: TabStyles,
  [theme.breakpoints.down('xs')]: mobileStyles
}))

function EventCard({ data }) {

  const [isSaved, setisSaved] = React.useState(data.saved)
  const [productStar, setproductStar] = React.useState(isSaved ? 1 : 0)


  const classes = useStyles()

  const changeRating = () => {
    if (!isSaved && productStar == 0) {
      setproductStar(1)
      setisSaved(!isSaved)
    }
    else {
      setproductStar(0)
      setisSaved(!isSaved)
    }
  }

  return (
    <Card className={classes.card}>
      <img src={data.image.url} alt="" className={classes.image} />
      <CardContent className={isSaved ? `${classes.cardInner} ${classes.Orangecard} ` : `${classes.cardInner}`}>
        <div className={classes.flex}>
            <Typography variant="h6" className={classes.title}>{data.title}</Typography>
            <StarRatings
              rating={productStar}
              starRatedColor='#FC821A'
              starHoverColor='#FC821A'
              changeRating={changeRating}
              starDimension='24px'
              numberOfStars={1}
              name={data.id}
            />
        </div>
        <div className={classes.flex}>
          <Typography className={classes.date}>{data.date}</Typography>
          <Typography className={isSaved ? `${classes.price} ${classes.Orangeprice} ` : `${classes.price}`}>{data.price}</Typography>
        </div>
        <div className={classes.cardBody}>
          <Typography className={classes.excerpt}>{data.excerpt}</Typography>
          <Typography className={classes.college}>{data.collegeName}</Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default EventCard