export const spotOptions = {
  method: "get",
  headers: {},
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
  headers: {
    "X-RapidAPI-Key": "AIzaSyBiVr3N5E4oa0pBJ8Q8m64UFBk5M0JtdXw",
    "X-RapidAPI-Host": "maps.googleapis.com",
  },
};
export const FetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
