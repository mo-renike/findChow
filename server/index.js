import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
dotenv.config();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running!");
});


app.get('/api/place', async (req, res) => {
  const { latitude, longitude, name, keyword } = req.query;

  const url = `https://google-map-places.p.rapidapi.com/maps/api/place/nearbysearch/json?location=${latitude}%2C${longitude}&radius=5000&type=restaurant&language=en&name=${name}&rankby=prominence&keyword=${keyword}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_PLACE_API,
      'x-rapidapi-host': 'google-map-places.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    res.json(result)
  } catch (error) {
    console.error(error);
  }

})


app.get("/api/details", async (req, res) => {
  const { place_id } = req.query;

  const url = `https://google-map-places.p.rapidapi.com/maps/api/place/details/json?place_id=${place_id}&region=en&fields=all&language=en&reviews_no_translations=true`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_DETAILS_API,
      'x-rapidapi-host': 'google-map-places.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    res.json(result)
  } catch (error) {
    console.error(error);
  }
});


app.listen(8080, () => {
  console.log(`Server is listening on port 8080`);
});
