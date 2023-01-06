import React, { useEffect } from "react";
import { SubHeading } from "../components/Headings/Headings";
import "./Modal.scss";
import { FetchData, reviewOptions } from "../FetchData";
import { FaAngleLeft, FaCheckCircle, FaStar, FaRegStar } from "react-icons/fa";


//name, business_status, geometry.location{}, opening_hours{open_now}, rating, user_ratings_total, vicinity, photos[0].html_attributions
const Modal = ({ spot, toggleModal }) => {
    const [reviews, setReview] = React.useState([]);

    useEffect(() => {
        let url = `https://local-business-data.p.rapidapi.com/business-reviews?business_id=${spot.business_id}&limit=10&region=us&language=en`;
        const fetchExtraData = async () => {
            const data = await FetchData(url, reviewOptions);

            setReview(data.data);
        };
        fetchExtraData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // show the rest of the review text when read more button is clicked
    const showMore = (e) => {
        e.target.previousSibling.style.display = "none";
        e.target.style.display = "none";
        e.target.nextSibling.style.display = "block";
    };

    return (
        <div className="modal">
            <div className="modal__dets">
                <span className="close" onClick={toggleModal}>
                    <FaAngleLeft />
                </span>{" "}
                <br />
                <SubHeading title="Description:" />
                <div className="modal__dets-flex">
                    <div>
                        {" "}
                        <p>
                            <span className="title">{spot.name}</span> is an amala restaurant in your area
                            that has an average rating of <strong>{spot.rating ? spot.rating : 0}/5</strong> from
                            {"  "}<strong>{spot.review_count} </strong> total ratings.
                        </p>{" "}
                        <p>
                            They are located at <strong>{spot.address}</strong> and is
                            currently <strong>{spot.business_status}.</strong>{" "}
                        </p>
                        <p>
                            <strong>{spot.name}</strong> can be contacted on
                            <strong>
                                {" "}
                                {spot.phone_number ? spot.phone_number : "No Number provided"}
                            </strong>{" "}
                            and their website is{" "}
                            <a
                                style={{ color: "#ECD444", textDecoration: "underline", whiteSpace: "nowrap" }}
                                href={spot.website}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {spot.website ? spot.website : "Not Available"}
                            </a>
                            <br />
                        </p>
                        <br />
                        <div className="options">
                            <h4>Atmosphere: </h4>
                            {
                                spot.about
                                    && (spot.about.details["Atmosphere"]) ?
                                    (Object.keys(spot.about.details["Atmosphere"]).map(
                                        (opt) => (
                                            <p>
                                                <FaCheckCircle /> {opt}
                                            </p>
                                        )
                                    )) : "Atmosphere not specified"
                            }
                        </div>
                        <div className="options">
                            <h4>Amenities: </h4>
                            {
                                spot.about
                                    && (spot.about.details["Amenities"]) ?
                                    (Object.keys(spot.about.details["Amenities"]).map(
                                        (opt) => (
                                            <p>
                                                <FaCheckCircle /> {opt}
                                            </p>
                                        )
                                    )) : "Amenities not specified"
                            }
                        </div>
                        <div className="options">
                            <h4>Service Options: </h4>
                            {
                                spot.about
                                    && (spot.about.details["Service options"]) ?
                                    (Object.keys(spot.about.details["Service options"]).map(
                                        (opt) => (
                                            <p>
                                                <FaCheckCircle /> {opt}
                                            </p>
                                        )
                                    )) : "No Options Provided"
                            }
                        </div>
                        <div className="options">
                            <h4>Dining Options: </h4>
                            {
                                spot.about
                                    && spot.about.details["Dining options"] ?
                                    (Object.keys(spot.about.details["Dining options"]).map(
                                        (opt) => (
                                            <p>
                                                <FaCheckCircle /> {opt}
                                            </p>
                                        )
                                    )) : "No Options Provided"
                            }
                        </div>
                        <div className="options">
                            <h4>Offerings: </h4>
                            {
                                spot.about
                                    &&
                                    spot.about.details["Offerings"] ?
                                    (Object.keys(spot.about.details["Offerings"]).map(
                                        (opt) => (
                                            <p>
                                                <FaCheckCircle /> {opt}
                                            </p>
                                        )
                                    )) : "No Offerings Provided"
                            }
                        </div>
                        <br />
                        <a
                            className="button"
                            href={spot.place_link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on Google Maps
                        </a>
                    </div>
                    <span className="line"></span>
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
                <br />
                <div className="modal__dets-wrapper">
                    {" "}
                    <SubHeading title="Reviews:" />
                    <div className="modal__dets_reviews">
                        {reviews
                            ? reviews.map((review) => (
                                <div
                                    key={review.author_id}
                                    className="modal__dets_reviews-review"
                                >
                                    <div className="rating">
                                        {review.rating}.0 {"  "}
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <span key={i}>
                                                {review.rating > i ? <FaStar /> : <FaRegStar />}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="reviewer">
                                        <strong>{review.author_name}</strong> -{" "}
                                        {review.review_datetime_utc.slice(0, 10)}
                                    </p>
                                    <q>
                                        <i>
                                            {review.review_text && review.review_text.length > 200 ? (
                                                <span>
                                                    {review.review_text.slice(0, 200)}
                                                    <br />
                                                    <button onClick={showMore}>Read more</button>
                                                    <span style={{ display: "none" }}>
                                                        {review.review_text.slice(200)}
                                                    </span>
                                                    <button
                                                        style={{ display: "none" }}
                                                        onClick={showMore}
                                                    >
                                                        Show less
                                                    </button>
                                                </span>
                                            ) : (
                                                review.review_text
                                            )}
                                        </i>
                                    </q>
                                </div>
                            ))
                            : "No Reviews yet"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
