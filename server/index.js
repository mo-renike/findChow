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

// app.get("/api/maps/place", async (req, res) => {
//   const { latitude, longitude, radius, type, keyword } = req.query;
//   const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude}%2C${longitude}&radius=${radius}&type=${type}&keyword=${keyword}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

// app.get("/api/maps/place/details", async (req, res) => {
//   const { place_id } = req.query;
//   const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=address_components,business_status,formatted_address,icon,icon_mask_base_uri,delivery,dine_in,icon_background_color,name,photo,place_id,plus_code,type,url,utc_offset,vicinity,reviews,formatted_phone_number,opening_hours,website,curbside_pickup,reservable,serves_brunch,serves_dinner,serves_lunch,wheelchair_accessible_entrance&key=${process.env.GOOGLE_MAPS_API_KEY}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     // console.log(url);
//     res.json(data);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

// // get photos from google maps
// app.get("/api/maps/place/photo", async (req, res) => {
//   const { photo_reference } = req.query;
//   const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo_reference}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

//   try {
//     const response = await fetch(url);
//     const buffer = await response.arrayBuffer();
//     res.setHeader("Content-Type", response.headers.get("content-type"));
//     res.end(buffer);
//     console.log(url);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });


app.get('/api/place', async (req, res) => {
  const { latitude, longitude, name, keyword } = req.query;

  const url = `https://google-map-places.p.rapidapi.com/maps/api/place/nearbysearch/json?location=${latitude}%2C${longitude}&radius=5000&type=restaurant&language=en&name=${name}&rankby=prominence&keyword=${keyword}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'b5955c940amsh9ba067ff07dbc5ap17f2abjsn2acd75e2d6af',
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
      'x-rapidapi-key': 'b5955c940amsh9ba067ff07dbc5ap17f2abjsn2acd75e2d6af',
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
