import { UNAUTHENTICATED, AUTHENTICATED } from "../actionTypes/auth";

const initialState = {
  user: {},
  accessToken: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATED:
      const { user, accessToken ,userFavEvents, userFavProducts } = action.payload;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userFavEvents", userFavEvents);
      localStorage.setItem("userFavProducts", userFavProducts);

      return {
        ...state,
        user: user,
        accessToken: accessToken,
      };

    case UNAUTHENTICATED:
      localStorage.setItem("user", "");
      localStorage.setItem("accessToken", "");
      localStorage.setItem("userFavEvents", "");
      localStorage.setItem("userFavProducts", "");
      return initialState;

    default:
      let data = "";

      if (typeof window !== "undefined") {
        let userData = window.localStorage.getItem("user");
        userData = userData ? JSON.parse(userData) : "";
        let accessTokenData = window.localStorage.getItem("accessToken");
        let userFavEvents = window.localStorage.getItem("userFavEvents");
        let userFavProducts = window.localStorage.getItem("userFavProducts");
        accessTokenData =
          accessTokenData && accessTokenData != "undefined"
            ? accessTokenData
            : "";
        if (userData && accessTokenData) {
          data = {
            user: userData,
            accessToken: accessTokenData,
            userFavEvents:userFavEvents,
            userFavProducts:userFavProducts

          };
        }
      }

      return data ? data : initialState;
  }
}
