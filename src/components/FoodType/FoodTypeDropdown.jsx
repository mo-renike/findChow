import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';

const foodTypes = [
    { label: 'Amala Joints', value: 'amala' },
    { label: 'Chinese restaurants', value: 'chinese' },
    { label: 'Calabar Kitchen', value: 'calabar%2Ckitchen' },
    //{ label: 'Cakes and More', value: 'cakes' },
    // { label: 'Pizza', value: 'pizza' },
];

const FoodTypeDropdown = ({ setToggle }) => {
    const { foodType, setFoodType } = useContext(AppContext);

    const handleChange = (e) => {
        setFoodType(e.target.value);
        // setToggle(false); 
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
