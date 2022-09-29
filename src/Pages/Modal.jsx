import React from "react";
import { SubHeading } from "../components/Headings/Headings";
import "./Modal.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Loader from "../components/Loader";

//name, business_status, geometry.location{}, opening_hours{open_now}, rating, user_ratings_total, vicinity, photos[0].html_attributions
const Modal = ({ spot, toggleModal }) => {
    // console.log(spot.geometry.location.lat, spot.geometry.location.lng);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) {
        return <Loader />;
    }
    // const center = { lat: 44, lng: -80 };
    const center = {
        lat: spot.geometry.location.lat,
        lng: spot.geometry.location.lng,
    };


    return (
        <div className="modal">
            <div className="modal__dets">
                <GoogleMap
                    zoom={10}
                    center={center}
                    mapContainerClassName="modal__dets-map"
                >
                    <Marker position={center} />
                </GoogleMap>

                <SubHeading title={spot.name} />
                <p>
                    Business Status: <strong>{spot.business_status}</strong>
                </p>
                <p>
                    Average Rating:
                    <strong>
                        {spot.rating} out of {spot.user_ratings_total} total Ratings
                    </strong>
                </p>
                <p>
                    Address: <strong> {spot.vicinity}</strong>
                </p>
                <span className="close" onClick={toggleModal}>
                    <AiOutlineCloseCircle />
                </span>
            </div>
        </div>
    );
};

export default Modal;
