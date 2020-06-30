const API_URL = process.env.api_url;

export function searchUniversities(q) {
  let url = API_URL + "/universities/global/search/" + q;
  console.log(url);

  return fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch((error) => console.warn(error));
}

export function searchCategories(q) {
  let url = API_URL + `/product-categories-search/${q}`;
  console.log(url);

  return fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch((error) => console.warn(error));
}

export function searchCities(q) {
  let url = API_URL + `/cities/search/${q}`;
  console.log(url);

  return fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch((error) => console.warn(error));
}

export async function getProducts(q) {
  let url = API_URL + "/products";
  if (q) {
    url = url + q;
  }
  console.log(url);

  return fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch((error) => console.warn(error));
}

export async function getProduct(id) {
  let url = API_URL + "/product/" + id;

  console.log(url);

  return fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch((error) => console.warn(error));
}

export async function getSeller(id) {
  let url = API_URL + "/user/" + id;

  console.log(url);

  return fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch((error) => console.warn(error));
}

export async function getCategories() {
  let url = API_URL + "/product-categories";

  console.log(url);

  return fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
  })
    .catch((error) => console.warn(error));
}


export async function getCities() {
  let url = API_URL + "/cities";

  console.log(url);

  return fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
      console.log('responseData', responseData);
      return responseData;
  })
    .catch((error) => console.warn(error));
}


