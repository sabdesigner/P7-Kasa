import React from 'react'

// style
import pinkstar from '../assets/images/pinkStar.svg'
import greystar from '../assets/images/greyStar.svg'

const Rating = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5]

    return (
        <div className="rating">
            {/* Loop to display star by rating */}
            {stars.map((star) =>
                rating >= star ? (
                    <img
                        key={star.toString()}
                        className="rating__icon"
                        src={pinkstar}
                        alt="Etoile rose"
                    />
                ) : (
                    <img
                        key={star.toString()}
                        className="rating__icon"
                        src={greystar}
                        alt="Etoile grise"
                    />
                )
            )}
        </div>
    )
}

export default Rating
