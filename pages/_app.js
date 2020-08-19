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

Router.events.on("routeChangeStart", () => {

  NProgress.start()
});
Router.events.on("routeChangeComplete", () => { isuserProfileComplete(); NProgress.done() });
Router.events.on("routeChangeError", () => NProgress.done());

const isuserProfileComplete = () => {
  
  let userData = window.localStorage.getItem("user");
  userData = userData ? JSON.parse(userData) : "";
  let accessTokenData = window.localStorage.getItem("accessToken");
  if (accessTokenData && accessTokenData != "undefined" && userData && !userData.is_complete) {
    if (Router.router.asPath != '/profile/edit') {
      Router.push("/profile/edit");
    }
  }

}

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const router = useRouter();

  React.useEffect(() => {
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
