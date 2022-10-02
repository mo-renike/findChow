import React from 'react'
import { SubHeading } from '../../components/Headings/Headings'
import './Others.scss'
import Fitness from '../../images/fitness.png'
import Movie from '../../images/movie.png'
const OtherApps = () => {
    return (
        <div className='others'>
            <SubHeading title="Other Apps You might be interested in" />
            <div className="others__wrapper">
                <a rel="noreferrer" target="_blank" href="https://mo-renike.github.io/Movie-App/" className="others__wrapper_card">
                    <img src={Movie} alt="movie" />
                    <h3>Movie App</h3>
                </a>
                <a rel="noreferrer" target="_blank" href="https://fitnessexercises.netlify.app/" className="others__wrapper_card">
                    <img src={Fitness} alt="fitness" />
                    <h3>Fitness App</h3>
                </a>

            </div>
        </div>
    )
}

export default OtherApps;