import { UNAUTHENTICATED, AUTHENTICATED } from "../actionTypes/auth";

const initialState = {
  user: {},
  accessToken: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATED:
      const { user, accessToken } = action.payload;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("accessToken", accessToken);

      return {
        ...state,
        user: { ...state.user, user },
        accessToken: accessToken,
      };

    case UNAUTHENTICATED:
      return initialState;

    default:
      let data = "";

      if (typeof window !== "undefined") {
        let userData = window.localStorage.getItem("user");
        userData = userData ? JSON.parse(userData) : "";
        let accessTokenData = window.localStorage.getItem("accessToken");
        if (userData && accessTokenData) {
          data = {
            user: userData,
            accessToken: accessTokenData,
          };
        }
      }

      return data ? data : initialState;
  }
}
