import { makeStyles } from '@material-ui/core/styles';
import Header from "./Header";
import Footer from "./Footer";
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from './styles';


const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('sm')]: desktopStyles,
  [theme.breakpoints.between('xs', 'sm')]: TabStyles,
  [theme.breakpoints.down('xs')]: mobileStyles
}))

export default function Layout (props) {
  const classes = useStyles()

  return (
    <div className={classes.Wrapper}>
      <Header />
      <div className={classes.Main}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
};

