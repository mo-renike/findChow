import React from 'react';
import { SubHeading } from '../components/Headings/Headings';
import './Modal.scss';

const Modal = ({ spot, toggleModal }) => {
    return (
        <div className="modal">
            <div className="modal__map"></div>
            <div className="modal__dets">
                <SubHeading title={spot.name} />
                <p>Business Status: <strong>{spot.business_status}</strong> </p>
                <p>Average Rating: <strong> {spot.rating} out of {spot.user_ratings_total} total Ratings</strong> </p>
                <p>Address: <strong> {spot.vicinity}</strong></p>
                <span className="close" onClick={toggleModal}>X</span>
            </div>
        </div>
    )
}

export default Modal;

