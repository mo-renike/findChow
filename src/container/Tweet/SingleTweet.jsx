import React from 'react';
import { TwitterTweetEmbed } from "react-twitter-embed";
import './Tweetss.scss';

const SingleTweet = ({ tweet }) => {

    return (
        <div className="tweets__wrapper_item">
            <TwitterTweetEmbed onLoad={function noRefCheck() { }}
                options={{
                    cards: 'hidden',
                }} tweetId={tweet[0]} />
        </div>
    )
}

export default SingleTweet;