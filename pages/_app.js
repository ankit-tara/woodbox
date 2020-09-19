import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import "swiper/css/swiper.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css";
import "../src/styles/global.css";
import "cropperjs/dist/cropper.css";
// import "~/node_modules/connectycube/dist/connectycube.min.js";

import Router from "next/router";
import { useRouter } from "next/router";
import { CreateVisit } from "../src/apis/global-api";
import { VALID_ROUTES } from "../src/constants";
import { firebaseCloudMessaging } from "../utils/webPush";

Router.events.on("routeChangeStart", () => {

  NProgress.start()
});
Router.events.on("routeChangeComplete", () => {
  isuserProfileComplete();
  NProgress.done()
});
Router.events.on("routeChangeError", () => NProgress.done());

const setUserVisit = (userData) => {
  let route = Router.router.route.replace('/', '')

  if (!route)
    return

  if (route == 'products') {
    let { type, s } = Router.router.query
    if (type == 'buy') {
      route = 'products-buy'
    }
    if (type == 'sell') {
      route = 'products-sell'
    }
    if (s) {
      route = "products-search"
    }
  }

  var routeExist = VALID_ROUTES.find(obj => obj.route === route);
  console.log('routetest', Router.router, route, routeExist)
  if (!routeExist)
    return


  let data = {
    user_id: userData.id,
    feature: routeExist.title
  }
  CreateVisit(data).then((data) => {
    console.log(data)
  });
}

const isuserProfileComplete = () => {

  let userData = window.localStorage.getItem("user");
  userData = userData ? JSON.parse(userData) : "";
  let accessTokenData = window.localStorage.getItem("accessToken");
  if (accessTokenData && accessTokenData != "undefined" && userData) {
    if (!userData.is_complete && Router.router.asPath != '/profile/edit') {
      Router.push("/profile/edit");
    } else {
      setUserVisit(userData)
    }


  }

}

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const router = useRouter();

  React.useEffect(() => {
    firebaseCloudMessaging.init()

    isuserProfileComplete()
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);



  return (
    <Provider store={store}>
      <React.Fragment>
        <Head>
          <title>HomePage</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
