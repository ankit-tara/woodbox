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

export async  function getProducts(q) {
  let url = API_URL + "/products";
  if (q) {
    url = url + q;
  }
  console.log(url);

  return  fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch((error) => console.warn(error));
}
