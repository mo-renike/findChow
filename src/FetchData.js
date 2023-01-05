export const spotOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b5955c940amsh9ba067ff07dbc5ap17f2abjsn2acd75e2d6af",
    "X-RapidAPI-Host": "local-business-data.p.rapidapi.com",
  },
};

export const tweetOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8b6089ebddmshc744444415dfccbp158bf5jsnc56929b628e8",
    "X-RapidAPI-Host": "twitter135.p.rapidapi.com",
  },
};

export const reviewOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "15dac254c0msh02bccc4a3102f81p1fd011jsn940355ce24a1",
    "X-RapidAPI-Host": "local-business-data.p.rapidapi.com",
  },
};

export const FetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
