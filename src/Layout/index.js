import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Footer from "./Footer";
import BottomNavigation from "./Footer/BottomNavigation";
import CircularProgress from "@material-ui/core/CircularProgress";
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from "./styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  ...commonStyles,
  [theme.breakpoints.up("md")]: desktopStyles,
  [theme.breakpoints.between("sm", "md")]: TabStyles,
  [theme.breakpoints.down("sm")]: mobileStyles,
}));

export default function Layout(props) {
  const classes = useStyles();

  const [isLoaded, setisLoaded] = React.useState(false);

  const matches = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const BottomNav = matches ? <BottomNavigation /> : null;

  return (
    <div className={classes.Wrapper}>
      <Header />
      <div className={classes.Main}>{props.children}</div>
      {props.nofooter == true ? "" : <Footer />}
      {BottomNav}
      {isLoaded && (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
}
