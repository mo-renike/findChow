import React, { useState, useEffect } from "react";
import { SubHeading } from "../../components/Headings/Headings";
import { FetchData, tweetOptions, spotOptions } from "../../FetchData";
import TweetEmbed from "react-tweet-embed";
import "./Spots.scss";

const Spots = () => {
  const [spots, setSpots] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [latitude, setLatitude] = useState(6.4522);

  const [longitude, setLongitude] = useState(3.612);

  useEffect(() => {
    //fetching all the data
    const fetchData = async () => {
      //fetching spots data
      const spotsData = await FetchData(
        `https://google-maps28.p.rapidapi.com/maps/api/place/nearbysearch/json?location=${latitude}%2C%20${longitude}&radius=20000&language=en&keyword=amala&name=amala`,
        spotOptions
      );
      setSpots(spotsData.results);

      //fetching tweets data
      const tweetsData = await FetchData(
        "https://twitter135.p.rapidapi.com/Search/?q=amala%20in%20nigeria&count=20",
        tweetOptions
      );
      console.log(tweetsData.globalObjects.tweets);
      setTweets(tweetsData.globalObjects.tweets);
    };
    fetchData();

    // get user location
    const showCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          console.log(latitude, longitude);
        });
      } else {
        window.alert("Current location not available..");
      }
    };
    showCurrentLocation();
  }, []);

  //name, business_status, geometry.location{}, opening_hours{open_now}, rating, user_ratings_total, vicinity, photos[0].html_attributions

  return (
    <div className="spots">
      <SubHeading className="subHeading" title="Showing Amala Spots Near You" />
      <div className="spots__wrapper">
        {spots &&
          spots.map((spot) => (
            <div key={spot.id} className="spots__wrapper_item">
              <img src={spot.icon} alt="" />
              <h2>{spot.name}</h2>
              <div className="spots__wrapper_item-dets">
                <p>{spot.business_status}</p>
                <p>{spot.rating}</p>
              </div>
              View Details button
            </div>
          ))}
      </div>
      {tweets.map((tweet) => (
        <TweetEmbed tweetId={tweet.id_str} />
      ))}
    </div>
  );
};

export default Spots;
