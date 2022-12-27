import React, { useState, useEffect } from "react";
import { SubHeading } from "../components/Headings/Headings";
import "./Modal.scss";
import { FetchData, extraOptions } from "../FetchData";
import { FaTimes } from "react-icons/fa";
//import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
//import Loader from "../components/Loader";

//name, business_status, geometry.location{}, opening_hours{open_now}, rating, user_ratings_total, vicinity, photos[0].html_attributions
const Modal = ({ spot, toggleModal }) => {
    // fetch additional data

    // const [extraData, setExtraData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const spotData = await FetchData(`https://local-business-data.p.rapidapi.com/business-details?business_id=${spot.business_id}&extract_emails_and_contacts=true&language=en`,
                extraOptions
            );
            console.log(spotData.data);
            // setExtraData(spotData.data);
        };
        fetchData();
    }, [spot.business_id]);

    return (
        <h1>hi</h1>
        // <div className="modal">
        //     <div className="modal__dets">
        //         <SubHeading title={spot.name} />
        //         <div className="modal__photos">
        //             {/* {extraData.photos &&
        //                 extraData.photos
        //                     .slice(0, 9)
        //                     .map((photo) => (
        //                         <img
        //                             src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo.photo_reference}&key=AIzaSyBiVr3N5E4oa0pBJ8Q8m64UFBk5M0JtdXw`}
        //                             alt="img"
        //                         />
        //                     ))} */}
        //         </div>
        //         <SubHeading title="Description:" />
        //         <p>
        //             <strong>{spot.name}</strong> is an amala {spot.types[0]} in your area
        //             that is currently {spot.business_status} and has an average rating of{" "}
        //             <strong>{spot.rating}</strong> out of{" "}
        //             <strong>{spot.user_ratings_total} </strong> total ratings. <br />{" "}
        //             <br />
        //             They are located at <strong>{extraData.formatted_address}</strong> and
        //             is currently{" "}
        //             <strong>
        //                 {spot.opening_hours.open_now === true ? "Open Now" : "Not Open"}
        //             </strong>
        //             . <br /> <br />
        //             <strong>{spot.name}</strong> can be contacted on <br />
        //             <strong> {extraData.international_phone_number}</strong> and can be
        //             found on{" "}
        //             <strong>
        //                 <a
        //                     style={{ color: "blue", textDecoration: "underline" }}
        //                     href={extraData.website}
        //                     target="_blank"
        //                     rel="noopener noreferrer"
        //                 >
        //                     their website
        //                 </a>
        //             </strong>{" "}
        //             <br />
        //         </p>{" "}
        //         <br />
        //         <SubHeading title="Opening hours:" />
        //         {extraData.opening_hours &&
        //             extraData.opening_hours.weekday_text.map((day) => (
        //                 <p className="hours">{day}</p>
        //             ))}
        //         <SubHeading title="Reviews:" />
        //         <div className="modal__dets_reviews">
        //             {extraData.reviews
        //                 ? extraData.reviews.map((review) => (
        //                     <div
        //                         key={review.place_id}
        //                         className="modal__dets_reviews-review"
        //                     >
        //                         <p className="rating"> {review.rating}-star rating</p>
        //                         <p className="reviewer">
        //                             <strong>{review.author_name}</strong> -{" "}
        //                             {review.relative_time_description}
        //                         </p>
        //                         <q>
        //                             <i>{review.text}</i>
        //                         </q>
        //                     </div>
        //                 ))
        //                 : "No reviews yet"}
        //         </div>
        //         <a
        //             className="button"
        //             href={`https://www.google.com/maps/search/?api=1&query=${spot.name}&query_place_id=${spot.place_id}`}
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             View on Google Maps
        //         </a>
        //         <span className="close" onClick={toggleModal}>
        //             <FaTimes />
        //         </span>
        //     </div>
        // </div>
    );
};

export default Modal;
