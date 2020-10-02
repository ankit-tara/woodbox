import React, { useState } from "react";
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
import firebase from 'firebase/app'
import { updateDeviceToken } from "../src/apis/auth-api";
// import OneSignal, { useOneSignalSetup } from 'react-onesignal';

Router.events.on("routeChangeStart", () => {

  NProgress.start()
});
Router.events.on("routeChangeComplete", () => {
  isuserProfileComplete();
  NProgress.done()
});
Router.events.on("routeChangeError", () => NProgress.done());
const isuserProfileComplete = () => {

  let userData = window.localStorage.getItem("user");
  userData = userData ? JSON.parse(userData) : "";
  let accessTokenData = window.localStorage.getItem("accessToken");
  if (accessTokenData && accessTokenData != "undefined" && userData) {
    // setToken(userData);
    // firebaseCloudMessaging.init(userData)
    if (!userData.is_complete && Router.router.asPath != '/profile/edit') {
      Router.push("/profile/edit");
    } else {
      setUserVisit(userData)
    }


  }

}
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

// const setToken = async (userData) => {
//   try {
//     const token = await firebaseCloudMessaging.init(userData);
//     if (token) {
//       getMessage();
//     }
//   } catch (error) {
//     console.log(error);
//   }

// }
const getMessage = () => {
  const messaging = firebase.messaging();
  messaging.onMessage((message) => console.log('foreground', message));
}


export default function MyApp(props) {
  const { Component, pageProps } = props;
  const router = useRouter();
  const [onesignalinit, setonesignalinit] = useState(false)

  // useOneSignalSetup(() => {
  // let userData = window.localStorage.getItem("user");
  // userData = userData ? JSON.parse(userData) : "";

  // if (userData) {
  //   OneSignal.setEmail(userData.email);
  //   OneSignal.setExternalUserId(userData.id);
  // }

  // });


  React.useEffect(() => {

    var OneSignal = window.OneSignal || [];
    var initConfig = {
      appId: "442ccc52-d5fb-4521-a46c-a5320cff49ae",
      notifyButton: {
        enable: true
      },
    };
    let userData = window.localStorage.getItem("user");
    userData = userData ? JSON.parse(userData) : "";


    OneSignal.push(function () {


      OneSignal.SERVICE_WORKER_PARAM = { scope: '/subdirectory/' };
      OneSignal.SERVICE_WORKER_PATH = 'subdirectory/OneSignalSDKWorker.js'
      OneSignal.SERVICE_WORKER_UPDATER_PATH = 'subdirectory/OneSignalSDKUpdaterWorker.js'
      if (!onesignalinit) {
        OneSignal.init(initConfig);
        setonesignalinit(true)
      }
      if (userData) {
        OneSignal.getUserId(function (userId) {
          if (userId != userData.device_token) {
            updateDeviceToken(userData.id, userId).then(result => {
              userData.device_token = userId
              window.localStorage.setItem("user", JSON.stringify(userData));
            })
          }
          console.log(userData, userId);
        });
        OneSignal.sendTag("user", userData.id);
      }


    });

    isuserProfileComplete()
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

  

  }, []);

  // const setToken = async (userData) => {

  //   // try {
  //   //   const token = await firebaseCloudMessaging.init(userData);
  //   //   if (token) {
  //   //     getMessage();
  //   //   }
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }

  // }


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
