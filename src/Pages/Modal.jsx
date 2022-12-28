import React from "react";
import { SubHeading } from "../components/Headings/Headings";
import "./Modal.scss";
//import { FetchData, extraOptions } from "../FetchData";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
//import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
//import Loader from "../components/Loader";

//name, business_status, geometry.location{}, opening_hours{open_now}, rating, user_ratings_total, vicinity, photos[0].html_attributions
const Modal = ({ spot, toggleModal }) => {
    // const [extraData, setExtraData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const spotData = await FetchData(
    //             `https://local-business-data.p.rapidapi.com/business-details?business_id=${spot.business_id}&extract_emails_and_contacts=true&language=en`,
    //             extraOptions
    //         );
    //         console.log(spotData.data);
    //         setExtraData(spotData.data);
    //     };
    //     fetchData();
    // }, [spot.business_id]);

    return (
        <div className="modal">
            <div className="modal__dets">
                <span className="close" onClick={toggleModal}>
                    <FaTimes />
                </span>
                {/* <SubHeading title={spot.name} /> */}
                <div className="modal__photos">
                    {/* {extraData.photos &&
                        extraData.photos
                            .slice(0, 9)
                            .map((photo) => (
                                <img
                                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo.photo_reference}&key=AIzaSyBiVr3N5E4oa0pBJ8Q8m64UFBk5M0JtdXw`}
                                    alt="img"
                                />
                            ))} */}
                </div>
                <SubHeading title="Description:" />
                <div className="modal__dets-flex">
                    <div>
                        {" "}
                        <p>
                            <strong>{spot.name}</strong> is an amala restaurant in your area
                            that has an average rating of <strong>{spot.rating}</strong> out
                            of <strong>{spot.review_count} </strong> total ratings.
                        </p>{" "}
                        <p>
                            They are located at <strong>{spot.address}</strong> and is
                            currently <strong>{spot.business_status}.</strong>{" "}
                            <strong>{spot.name}</strong> can be contacted on <br />
                            <strong>
                                {" "}
                                {spot.phone_number ? spot.phone_number : "No Nunber provided"}
                            </strong>{" "}
                            and can be found on{" "}
                            <a
                                style={{ color: "#ECD444", textDecoration: "underline" }}
                                href={spot.website}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                their website
                            </a>
                            <br />
                        </p>
                        <br />
                        <div className="options">
                            Service Options:
                            {spot.about &&
                                Object.keys(spot.about.details["Service options"]).map(
                                    (opt) => <p><FaCheckCircle /> {opt}</p>
                                )}
                        </div>
                        <p>Atmosphere:   {Object.keys(spot.about.details.Atmosphere)}</p>

                        <a
                            className="button"
                            href={spot.place_link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on Google Maps
                        </a>
                    </div>
                    <aside>
                        <SubHeading title="Opening hours:" />
                        {spot.working_hours &&
                            Object.keys(spot.working_hours).length > 0 ? (
                            <div className="modal__dets-hours">
                                {Object.keys(spot.working_hours).map((day) => (
                                    <div key={day}>
                                        <strong>{day}</strong> - {spot.working_hours[day]}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            "No opening hours available"
                        )}
                    </aside>
                </div>

                <SubHeading title="Reviews:" />
                <div className="modal__dets_reviews">
                    {spot.reviews
                        ? spot.reviews.map((review) => (
                            <div
                                key={review.place_id}
                                className="modal__dets_reviews-review"
                            >
                                <p className="rating"> {review.rating}-star rating</p>
                                <p className="reviewer">
                                    <strong>{review.author_name}</strong> -{" "}
                                    {review.relative_time_description}
                                </p>
                                <q>
                                    <i>{review.text}</i>
                                </q>
                            </div>
                        ))
                        : "No reviews yet"}
                </div>
            </div>
        </div>
    );
};

export default Modal;
