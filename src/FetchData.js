export const spotOptions = {
  method: "get",
  // prevent cors error
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};

export const tweetOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8b6089ebddmshc744444415dfccbp158bf5jsnc56929b628e8",
    "X-RapidAPI-Host": "twitter135.p.rapidapi.com",
  },
};
export const extraOptions = {
  method: "GET",
  // mode: "no-cors",
  headers: {
    "X-RapidAPI-Key": "AIzaSyBiVr3N5E4oa0pBJ8Q8m64UFBk5M0JtdXw",
    "X-RapidAPI-Host": "maps.googleapis.com",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};

export const FetchData = async (url, options) => {
  const res = await fetch(url, options);

  const data = await res.json();
  console.log(data );
  return data;
};
