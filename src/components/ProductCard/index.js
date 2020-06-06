import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Link } from "@material-ui/core";
import StarRatings from "react-star-ratings";
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from "./styles";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  ...commonStyles,
  [theme.breakpoints.up("sm")]: desktopStyles,
  [theme.breakpoints.between("xs", "sm")]: TabStyles,
  [theme.breakpoints.down("xs")]: mobileStyles,
}));

function ProductCard({ data }) {
  const [isSaved, setisSaved] = React.useState(data.saved);
  const [productStar, setproductStar] = React.useState(isSaved ? 1 : 0);

  const classes = useStyles();

  const changeRating = () => {
    if (!isSaved && productStar == 0) {
      setproductStar(1);
      setisSaved(!isSaved);
    } else {
      setproductStar(0);
      setisSaved(!isSaved);
    }
  };

  return (
    <Card
      className={
        isSaved ? `${classes.card} ${classes.Orangecard} ` : `${classes.card}`
      }
    >
      <CardContent className={classes.cardInner}>
        <div className={classes.cardHead}>
          <Typography variant="h6" className={classes.title}>
            {data.title.length >= 25 && (
              <Link href={`/products/item/${data.id}`}>
                {data.title.substring(0, 25) + "..."}{" "}
              </Link>
            )}
            {data.title.length < 25 && (
              <Link href={`/products/item/${data.id}`}>{data.title}</Link>
            )}
          </Typography>
          <StarRatings
            rating={productStar}
            starRatedColor="#FC821A"
            starHoverColor="#FC821A"
            changeRating={changeRating}
            starDimension="24px"
            numberOfStars={1}
            id={data.id}
          />
        </div>
        <div className={classes.cardBody}>
          {data.images.length > 0 && (
            <img
              src={data.images[0].thumbnail_link}
              alt=""
              className={classes.image}
            />
          )}
        </div>
        <div className={classes.cardFooter}>
          <div className={classes.left}>
            <Typography className={classes.excerpt}>
              {data.description.substring(0, 35) + "..."}{" "}
            </Typography>
            {data.university.name.length >= 25 && (
              <Typography className={classes.college}>
                {data.university.name.substring(0, 25) + "..."}{" "}
              </Typography>
            )}
            {data.university.name.length < 25 && (
              <Typography className={classes.college}>
                {data.university.name}
              </Typography>
            )}
          </div>
          <div className={classes.right}>
            <Typography
              className={
                isSaved
                  ? `${classes.price} ${classes.Orangeprice} `
                  : `${classes.price}`
              }
            >
              &#8377;{data.price}
            </Typography>
            <Typography className={classes.date}>
              {moment(data.created_at).format("MMMM D ")}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
