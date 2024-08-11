import React from 'react'
import { Helmet } from "react-helmet";

const DetailsSeo = ({ spot }) => {
    return (
        <Helmet>
            <title>{spot.name} - {spot.vicinity}</title>
            <meta
                name="description"
                content={`Learn more about ${spot.name}, a popular restaurant located at ${spot.vicinity}. Currently ${spot.opening_hours?.open_now === true ? "Open" : "Closed"}, with a rating of ${spot.rating}/5 from ${spot.user_ratings_total} reviews.`}
            />
            <meta
                name="keywords"
                content={`restaurant, ${spot.name}, ${spot.vicinity}, food, reviews, chinese cuisine`}
            />
            <link rel="canonical" href={`https://find-chow.vercel.app/place/${spot.place_id}`} />
            <meta property="og:title" content={`${spot.name} - ${spot.vicinity}`} />
            <meta
                property="og:description"
                content={`Explore ${spot.name}, located at ${spot.vicinity}. This spot has a rating of ${spot.rating}/5 from ${spot.user_ratings_total} reviews. Check out more details and reviews.`}
            />
            <meta property="og:url" content={`https://find-chow.vercel.app/place/${spot.place_id}`} />
            <meta
                property="og:image"
                content={spot.icon ? spot.icon : "https://find-chow.vercel.app/default-image.jpg"}
            />
        </Helmet>
    )
}

export default DetailsSeo