export const spotOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "53ef09989fmsh8c5174896d19423p1db036jsn5a01fa26a652",
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
    "X-RapidAPI-Key": "53ef09989fmsh8c5174896d19423p1db036jsn5a01fa26a652”,
    "X-RapidAPI-Host": "local-business-data.p.rapidapi.com",
  },
};

export const FetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
