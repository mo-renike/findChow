import React, { useContext, useNavigate } from 'react';
import { AppContext } from '../../AppContext';

const foodTypes = [
    { label: 'Amala Joints', value: 'amala' },
    { label: 'Chinese restaurants', value: 'chinese' },
    { label: 'Calabar Kitchen', value: 'calabar' },
    // { label: 'Mexican', value: 'mexican' },
    // { label: 'Pizza', value: 'pizza' },
];

const FoodTypeDropdown = ({ setToggle }) => {
    const { foodType, setFoodType } = useContext(AppContext);
    const navigate = useNavigate

    const handleChange = (e) => {
        setFoodType(e.target.value);
        setToggle(false); // call setToggle with a value of true
        navigate('/#spots')
    };

    return (
        <select className="app__navbar-button" value={foodType} onChange={handleChange}>
            {foodTypes.map(({ label, value }) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </select>
    );
};

export default FoodTypeDropdown;
