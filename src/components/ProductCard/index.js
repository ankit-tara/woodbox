import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography, Link } from '@material-ui/core'
import StarRatings from 'react-star-ratings'
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('sm')]: desktopStyles,
  [theme.breakpoints.between('xs', 'sm')]: TabStyles,
  [theme.breakpoints.down('xs')]: mobileStyles
}))

  function ProductCard ({ data }){

  const [isSaved, setisSaved] = React.useState(data.saved)
  const [productStar, setproductStar] = React.useState(isSaved ? 1 : 0)


  const classes = useStyles()

  const changeRating = () => {
      if (!isSaved && productStar == 0){
        setproductStar(1)
        setisSaved(!isSaved)
      }
      else{
        setproductStar(0)
        setisSaved(!isSaved)
      }
  }

  return (
    <Card className={isSaved ? `${classes.card} ${classes.Orangecard} `: `${classes.card}`}>
      <CardContent className={classes.cardInner}>
        <div className={classes.cardHead}>
          <Typography variant="h6" className={classes.title}><Link href={`/products/${data.id}`}>{data.title}</Link></Typography>
          <StarRatings
            rating={productStar}
            starRatedColor='#FC821A'
            starHoverColor='#FC821A'
            changeRating={changeRating}
            starDimension='24px'
            numberOfStars={1}
            id={data.id}
          />
        </div>
        <div className={classes.cardBody}>
          {data.images && <img src={data.images[0].link} alt="" className={classes.image} /> }
        </div>
        <div className={classes.cardFooter}>
          <div className={classes.left}>
            <Typography className={classes.excerpt}>{data.description.substring(0, 35) + '...'} </Typography>
            <Typography className={classes.college}>Gulzar College of Arts</Typography>
          </div>
          <div className={classes.right}>
            <Typography className={isSaved ? `${classes.price} ${classes.Orangeprice} ` : `${classes.price}`}>$212</Typography>
            <Typography className={classes.date}>April 14</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard