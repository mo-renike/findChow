// import React, { useState, useEffect, useContext } from "react";
// import { FetchData, tweetOptions } from "../../FetchData";
// import { AppContext } from "../../AppContext";
// import "./Tweetss.scss";
// import Loader from "../../components/Loader";
// import { SubHeading } from "../../components/Headings/Headings";
// import SingleTweet from "./SingleTweet";

// const Tweet = () => {
//   const [tweets, setTweets] = useState([]);

//   const { foodType } = useContext(AppContext);

//   useEffect(() => {
//     const fetchData = async () => {
//       //fetching tweets data
//       const tweetsData = await FetchData(
//         `https://twitter135.p.rapidapi.com/Search/?q=${foodType}%20in%20nigeria&count=20`,
//         tweetOptions
//       );
//       const tweetsObj = tweetsData.globalObjects.tweets;
//       const tweetsArr = Object.entries(tweetsObj);
//       // console.log(tweetsArr);
//       setTweets(tweetsArr);
//     };
//     fetchData();
//   }, [foodType]);
//   return (
//     <div id="tweets" className="tweets">
//       <SubHeading title={`Some tweets about ${foodType} food`} />
//       <div className="tweets__wrapper">
//         {tweets.length ? tweets.map((tweet) => <SingleTweet key={tweet[0]} tweet={tweet} />)
//           : <Loader />}
//       </div>
//     </div>
//   );
// };



// export default Tweet;
