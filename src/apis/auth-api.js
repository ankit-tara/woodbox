const API_URL = process.env.api_url;

export function signup(data) {
  let url = API_URL + "/user/sign-up";
  console.log(url);

  return generalPostRequest(url, data);
}

export function simpleSignup(data) {
  let url = API_URL + "/user/simple-sign-up";
  console.log(url);

  return generalPostRequest(url, data);
}

export function googleSignup(data) {
  let url = API_URL + "/user/google-sign-up";
  console.log(url);

  return generalPostRequest(url, data);
}

export function login(data) {
  let url = API_URL + "/user/login";
  console.log(url);
  return generalPostRequest(url, data);
}

export function editProfile(data, id) {
  let url = API_URL + "/user/update/" + id;
  console.log(url);
  return generalPostRequest(url, data);
}

export function updateProfileImg(data) {
  let url = API_URL + "/profile-img/update";
  console.log(url);
  return generalPostRequest(url, data);
}
export function AddProduct(data) {
  let url = API_URL + "/product";
  console.log(url);
  return generalPostRequest(url, data);
}
export function UpdateProduct(data, id) {
  let url = API_URL + "/product/" + id;
  console.log(url);
  return generalPostRequest(url, data);
}

export function DeleteProduct(data, id) {
  let url = API_URL + "/product/delete/" + id;
  console.log(url);
  return generalPostRequest(url, data);
}

export function AddEvent(data) {
  let url = API_URL + "/event";
  console.log(url);
  return generalPostRequest(url, data);
}
export function UpdateEvent(data, id) {
  let url = API_URL + "/event/" + id;
  console.log(url);
  return generalPostRequest(url, data);
}

export function DeleteEvent(data, id) {
  let url = API_URL + "/event/delete/" + id;
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
