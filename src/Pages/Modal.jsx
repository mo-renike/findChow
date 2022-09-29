import React from "react";
import { SubHeading } from "../components/Headings/Headings";
import "./Modal.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Loader from "../components/Loader";

//name, business_status, geometry.location{}, opening_hours{open_now}, rating, user_ratings_total, vicinity, photos[0].html_attributions
const Modal = ({ spot, toggleModal }) => {
    console.log(spot);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDCtHM9zzEmpTMx-fS9h6JviXPwyEUNq4c",
    });

    if (!isLoaded) {
        return <Loader />;
    }
    const center = {
        lat: spot.geometry.location.lat,
        lng: spot.geometry.location.lng,
    };


    return (
        <div className="modal">
            <div className="modal__dets">

                {isLoaded ? <GoogleMap
                    zoom={15}
                    center={center}
                    mapContainerClassName="modal__dets-map"
                >
                    <Marker position={center} />
                </GoogleMap> : <Loader />}

                <SubHeading title={spot.name} />
                <p>
                    <strong>{spot.name}</strong>  is an amala {spot.types[0]} in your area that is currently  {spot.business_status} and has an average rating of <strong>{spot.rating}</strong>  out of <strong>{spot.user_ratings_total} </strong> total ratings. <br />
                    <strong> {spot.name}</strong>    is located at <strong>{spot.vicinity}</strong>  and is currently <strong> {spot.opening_hours.open_now === true ? "Open Now" : "Not Open Now"}</strong>. <br /> <br />
                    <strong>Click the button below to view {spot.name} on Google Maps</strong>
                </p>

                <span className="close" onClick={toggleModal}>
                    <AiOutlineCloseCircle />
                </span>
            </div>
        </div>
    );
};

export default Modal;
