import { UNAUTHENTICATED, AUTHENTICATED } from "../actionTypes/auth";

export const authenticated = (user, accessToken,userFavEvents,userFavProducts) => ({
  type: AUTHENTICATED,
  payload: { user, accessToken, userFavEvents , userFavProducts },
});

export const unauthenticated = () => ({
  type: UNAUTHENTICATED,
});
