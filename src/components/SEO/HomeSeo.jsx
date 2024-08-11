import React from 'react'
import { Helmet } from "react-helmet";

const HomeSeo = () => {
    return (
        <Helmet>
            <title>Discover Local Restaurants Near You - FindChow</title>
            <meta
                name="description"
                content="Discover the best local amala spots, chinese restaurants, calabar kitchen and dining spots near you with our web app. Enter your location to get a curated list of top-rated places with reviews and distance from your location."
            />
            <meta name="keywords" content="best amala spot, chinese restaurants near me, calabar restaurant close to me, restaurant in Lagos, nearby places,food reviews, amala spots, chinese restaurant" />
            <meta name="robots" content="index,follow" />
            <link rel="canonical" href="https://find-chow.vercel.app/" />
            <meta property="og:title" content="Discover Local Restaurants Near You - [Your Web App Name]" />
            <meta property="og:description" content="Find top-rated local dining spots, read reviews, and get the distance to each place from your current location with our web app. Explore amala spots near you today!" />
            <meta property="og:url" content="https://find-chow.vercel.app/" />
            <meta property="og:type" content="website" />
            {/* <meta property="og:image" content="https://find-chow.vercel.app//path-to-image.jpg" /> */}
        </Helmet>
    )
}

export default HomeSeo