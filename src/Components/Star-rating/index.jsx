import './rating.css'
import { useState } from 'react'



function RatingContent({ data, starsNo }) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    console.log(starsNo)

    return (
        <>
            <div className="rating-profile">
                <div className="img-con">
                    <img src={"./src/assets/images/" + data.source} alt={data.title} className='card-img' />
                </div>
                <div className="card-lower">
                    <div className="detail-con">
                        <p className="name">{data.name}</p>
                        <p className="title">{data.title}</p>
                    </div>
                    <div className="rating">
                        {[...Array(starsNo)].map((_, index) => {
                            index += 1
                            return(
                                <span className={index <= (hover || rating) ? "rate active" : "rate"}
                                    key={index}
                                    onMouseEnter={() => setHover(index)}
                                    onMouseLeave={() => setHover(0)}
                                    onClick={() => setRating(index)}
                                ></span>
                            )
                        })}
                    </div>
                    <button>Click</button>
                </div>
            </div>
        </>
    )

}


export default function RatingComponent({ ratingData, noOfStars = 5 }) {
    return (
        <div className="rating-con">
            {ratingData.slice(0, 5).map((data, index) => (
                <RatingContent key={index} data={data} starsNo={noOfStars} />
            ))}
        </div>
    )
}

