import React, { useContext, useEffect } from "react";
import { SubHeading } from "../../components/Headings/Headings.jsx";
import "./Details.scss";
import { FaAngleLeft, FaCheckCircle, FaStar, FaRegStar } from "react-icons/fa";
import Loader from "../../components/Loader.jsx";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DetailsSeo from "../../components/SEO/DetailsSeo.jsx";
import { AppContext } from "../../AppContext.js";

const Details = () => {
    const { placeId } = useParams();
    const [details, setDetails] = React.useState([]);

    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();
    const { selectedSpot } = useContext(AppContext);

    useEffect(() => {
        const fetchExtraData = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    `https://findchow.onrender.com/api/details?place_id=${placeId}`,
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
        };
        fetchExtraData();
    }, [placeId]);

    if (!selectedSpot) {
        return null;
    }
    // show the rest of the review text when read more button is clicked
    const showMore = (e) => {
        e.target.previousSibling.style.display = "none";
        e.target.style.display = "none";
        e.target.nextSibling.style.display = "block";
    };


    return (
        <div className="details">
            <DetailsSeo spot={selectedSpot} />
            {loading ? (
                <Loader />
            ) : (
                <>
                    {selectedSpot && (
                        <div className="details__dets">
                            <button className="close" onClick={() => navigate(`/`)}>
                                <FaAngleLeft />
                            </button>{" "}
                            <br />
                            <SubHeading title="Description:" />
                            <div className="details__dets-flex">
                                <div>
                                    <p>
                                        <span className="title">{selectedSpot.name}</span> is a
                                        restaurant in your area that has an average rating of{" "}
                                        <strong>
                                            {selectedSpot.rating ? selectedSpot.rating : 0}/5
                                        </strong>{" "}
                                        from
                                        {"  "}
                                        <strong>{selectedSpot.user_ratings_total} </strong> total
                                        ratings.
                                    </p>{" "}
                                    <p>
                                        They are located at <strong>{selectedSpot.vicinity}</strong>{" "}
                                        and is currently{" "}
                                        <strong>
                                            {selectedSpot.opening_hours?.open_now === true
                                                ? "Open"
                                                : "Closed"}
                                            .
                                        </strong>{" "}
                                    </p>
                                    <p>
                                        <strong>{selectedSpot.name}</strong> can be contacted on {" "}
                                        <strong>
                                            {details?.formatted_phone_number ?? "No Number provided"}
                                        </strong>{" "}
                                        and their website is{" "}
                                        <a
                                            style={{
                                                color: "#af1b3f",
                                                textDecoration: "underline",
                                                whiteSpace: "nowrap",
                                            }}
                                            href={selectedSpot?.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {details?.website ?? "Not Available"}
                                        </a>
                                        <br />
                                    </p>
                                    <br />
                                    <div className="options">
                                        <h4>Atmosphere: </h4>
                                        {selectedSpot.about &&
                                            selectedSpot.about.details["Atmosphere"]
                                            ? Object.keys(
                                                selectedSpot.about.details["Atmosphere"]
                                            ).map((opt) => (
                                                <p>
                                                    <FaCheckCircle /> {opt}
                                                </p>
                                            ))
                                            : "Atmosphere not specified"}
                                    </div>
                                    <div className="options">
                                        <h4>Amenities: </h4>
                                        {details?.wheelchair_accessible_entrance &&
                                            details?.wheelchair_accessible_entrance === true ? (
                                            <p>
                                                <FaCheckCircle /> Wheel Chair Accessible Entrance
                                            </p>
                                        ) : (
                                            "No Wheel Chair Accessible Entrance"
                                        )}
                                    </div>
                                    <div className="options">
                                        <h4>Service Options: </h4>
                                        {selectedSpot.about &&
                                            selectedSpot.about.details["Service options"]
                                            ? Object.keys(
                                                selectedSpot.about.details["Service options"]
                                            ).map((opt) => (
                                                <p>
                                                    <FaCheckCircle /> {opt}
                                                </p>
                                            ))
                                            : "No Options Provided"}
                                    </div>
                                    <div className="options">
                                        <h4>Dining Options: </h4>
                                        {details?.delivery && details?.delivery === true ? (
                                            <p>
                                                <FaCheckCircle /> Delivery
                                            </p>
                                        ) : (
                                            "No Delivery"
                                        )}{" "}
                                        {details?.dine_in && details?.dine_in === true ? (
                                            <p>
                                                <FaCheckCircle /> Dine In
                                            </p>
                                        ) : (
                                            "No dining in"
                                        )}{" "}
                                        {details?.dine_in && details?.dine_in === true ? (
                                            <p>
                                                <FaCheckCircle /> Take Out
                                            </p>
                                        ) : (
                                            "No take out"
                                        )}
                                    </div>
                                    <div className="options">
                                        <h4>Offerings: </h4>
                                        {details?.wheelchair_accessible_entrance &&
                                            details?.wheelchair_accessible_entrance === true ? (
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
                                        href={details?.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View on Google Maps
                                    </a>
                                </div>
                                <span className="line"></span>
                                <aside>
                                    <SubHeading title="Opening hours:" />
                                    <div className="details__dets-hours">
                                        {details?.opening_hours && details?.opening_hours.weekday_text
                                            ? details?.opening_hours.weekday_text.map((day, idx) => (
                                                <p key={idx}>{day}</p>
                                            ))
                                            : "No opening hours provided"}
                                    </div>
                                </aside>
                            </div>
                            <br />
                            <div className="details__dets-wrapper">
                                {" "}
                                <SubHeading title="Reviews:" />
                                <div className="details__dets_reviews">
                                    {details?.reviews
                                        ? details?.reviews.map((review) => (
                                            <div
                                                key={review.author_name}
                                                className="details__dets_reviews-review"
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
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Details;
