import React, { useState, useEffect } from "react";
import { FetchData, tweetOptions } from "../../FetchData";

import "./Tweetss.scss";
import Loader from "../../components/Loader";
import { SubHeading } from "../../components/Headings/Headings";
import SingleTweet from "./SingleTweet";

const Tweet = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //fetching tweets data
      const tweetsData = await FetchData(
        "https://twitter135.p.rapidapi.com/Search/?q=amala%20in%20nigeria&count=20",
        tweetOptions
      );
      const tweetsObj = tweetsData.globalObjects.tweets;
      const tweetsArr = Object.entries(tweetsObj);
      //console.log(tweetsArr);
      setTweets(tweetsArr);
    };
    fetchData();
  }, []);


  return (
    <div id="tweets" className="tweets">
      <SubHeading title="Some Amala conversations on twitter" />
      <div className="tweets__wrapper">
        {tweets.length ? tweets.map(tweet => <SingleTweet key={tweet.id} tweet={tweet} />)
          : <Loader />}
      </div>
    </div>
  );
};



export default Tweet;
