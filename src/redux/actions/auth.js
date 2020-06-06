import { UNAUTHENTICATED, AUTHENTICATED } from "../actionTypes/auth";

export const authenticated = (user, accessToken) => ({
  type: AUTHENTICATED,
  payload: { user, accessToken },
});

export const unauthenticated = () => ({
  type: UNAUTHENTICATED,
});
