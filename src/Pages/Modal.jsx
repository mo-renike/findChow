import React, { useEffect } from "react";
import { SubHeading } from "../components/Headings/Headings";
import "./Modal.scss";
import { FaAngleLeft, FaCheckCircle, FaStar, FaRegStar } from "react-icons/fa";
import Loader from "../components/Loader";

const Modal = ({ spot, toggleModal }) => {
    const [details, setDetails] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        const fetchExtraData = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    `https://findchow.onrender.com/api/maps/place/details?place_id=${spot.place_id}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                if (res.status === 200) {
                    const data = await res.json();
                    setDetails(data.result);
                    setLoading(false);
                } else {
                    console.log("error");
                }
            } catch (error) {
                console.log(error);
            }
        }; fetchExtraData();

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
            {loading ? <Loader /> :
                (<div className="modal__dets">
                    <span className="close" onClick={toggleModal}>
                        <FaAngleLeft />
                    </span>{" "}
                    <br />
                    <SubHeading title="Description:" />
                    <div className="modal__dets-flex">
                        <div>
                            <p>
                                <span className="title">{spot.name}</span> is a restaurant
                                in your area that has an average rating of{" "}
                                <strong>{spot.rating ? spot.rating : 0}/5</strong> from
                                {"  "}
                                <strong>{spot.user_ratings_total} </strong> total ratings.
                            </p>{" "}
                            <p>
                                They are located at <strong>{spot.vicinity}</strong> and is
                                currently{" "}
                                <strong>
                                    {spot.opening_hours?.open_now === true ? "Open" : "Closed"}.
                                </strong>{" "}
                            </p>
                            <p>
                                <strong>{spot.name}</strong> can be contacted on
                                <strong>
                                    {" "}
                                    {details.formatted_phone_number
                                        ? details.formatted_phone_number
                                        : "No Number provided"}
                                </strong>{" "}
                                and their website is{" "}
                                <a
                                    style={{
                                        color: "#ECD444",
                                        textDecoration: "underline",
                                        whiteSpace: "nowrap",
                                    }}
                                    href={spot.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {details.website ? details.website : "Not Available"}
                                </a>
                                <br />
                            </p>
                            <br />
                            <div className="options">
                                <h4>Atmosphere: </h4>
                                {spot.about && spot.about.details["Atmosphere"]
                                    ? Object.keys(spot.about.details["Atmosphere"]).map((opt) => (
                                        <p>
                                            <FaCheckCircle /> {opt}
                                        </p>
                                    ))
                                    : "Atmosphere not specified"}
                            </div>
                            <div className="options">
                                <h4>Amenities: </h4>
                                {details.wheelchair_accessible_entrance &&
                                    details.wheelchair_accessible_entrance === true ? (
                                    <p>
                                        <FaCheckCircle /> Wheel Chair Accessible Entrance
                                    </p>
                                ) : (
                                    "No Wheel Chair Accessible Entrance"
                                )}
                            </div>
                            <div className="options">
                                <h4>Service Options: </h4>
                                {spot.about && spot.about.details["Service options"]
                                    ? Object.keys(spot.about.details["Service options"]).map(
                                        (opt) => (
                                            <p>
                                                <FaCheckCircle /> {opt}
                                            </p>
                                        )
                                    )
                                    : "No Options Provided"}
                            </div>
                            <div className="options">
                                <h4>Dining Options: </h4>
                                {details.delivery && details.delivery === true ? (
                                    <p>
                                        <FaCheckCircle /> Delivery
                                    </p>
                                ) : (
                                    "No Delivery"
                                )}{" "}
                                {details.dine_in && details.dine_in === true ? (
                                    <p>
                                        <FaCheckCircle /> Dine In
                                    </p>
                                ) : (
                                    "No dining in"
                                )}{" "}
                                {details.dine_in && details.dine_in === true ? (
                                    <p>
                                        <FaCheckCircle /> Take Out
                                    </p>
                                ) : (
                                    "No take out"
                                )}
                            </div>
                            <div className="options">
                                <h4>Offerings: </h4>
                                {details.wheelchair_accessible_entrance &&
                                    details.wheelchair_accessible_entrance === true ? (
                                    <p>
                                        <FaCheckCircle /> Delivery
                                    </p>
                                ) : (
                                    "No Delivery"
                                )}
                            </div>
                            <br />
                            <a
                                className="button"
                                href={details.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on Google Maps
                            </a>
                        </div>
                        <span className="line"></span>
                        <aside>
                            <SubHeading title="Opening hours:" />
                            <div className="modal__dets-hours">
                                {details.opening_hours && details.opening_hours.weekday_text
                                    ? details.opening_hours.weekday_text.map((day, idx) => (
                                        <p key={idx}>{day}</p>
                                    ))
                                    : "No opening hours provided"}
                            </div>

                        </aside>
                    </div>
                    <br />
                    <div className="modal__dets-wrapper">
                        {" "}
                        <SubHeading title="Reviews:" />
                        <div className="modal__dets_reviews">
                            {details.reviews
                                ? details.reviews.map((review) => (
                                    <div
                                        key={review.author_name}
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
                                            {review.relative_time_description}
                                        </p>
                                        <q>
                                            <i>
                                                {review.text && review.text.length > 200 ? (
                                                    <span>
                                                        {review.text.slice(0, 200)}
                                                        <br />
                                                        <button onClick={showMore}>Read more</button>
                                                        <span style={{ display: "none" }}>
                                                            {review.text.slice(200)}
                                                        </span>
                                                        <button
                                                            style={{ display: "none" }}
                                                            onClick={showMore}
                                                        >
                                                            Show less
                                                        </button>
                                                    </span>
                                                ) : review.text.length === 0 ? (
                                                    "No Review Added"
                                                ) : (
                                                    review.text
                                                )}
                                            </i>
                                        </q>
                                    </div>
                                ))
                                : "No Reviews yet"}
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Modal;
