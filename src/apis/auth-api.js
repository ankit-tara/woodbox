const API_URL = process.env.api_url;

export function signup(data) {
  let url = API_URL + "/user/sign-up";
  console.log(url);

  return generalPostRequest(url, data);
}

export function login(data) {
  let url = API_URL + "/user/login";
  console.log(url);
  return generalPostRequest(url, data);
}

function generalPostRequest(url, data) {
  return fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(`Request rejected with status ${response.status}`);
      }
    })
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch((error) => console.log(error));
}
