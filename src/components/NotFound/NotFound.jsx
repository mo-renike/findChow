import React from "react";
import { Link } from "react-router-dom";
import error from "./R.png";
// import { Helmet } from "react-helmet-async";

const NotFound = () => {
    const containerStle = {

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        flexDirection: "column",
    }
    const imgStyle = {
        width: "30%",
    }

    return (
        <div
            style={containerStle}
        >
            {/* <Helmet>
                <title>Page Not Found</title>
            </Helmet> */}
            <img src={error} style={imgStyle} alt="Not found" />
            <h2>Are you lost?</h2> <br />
            <Link className="button-yellow" to="/" >Go back home</Link>
        </div>
    );
};

export default NotFound;