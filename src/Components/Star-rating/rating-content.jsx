import './rating.css'



export default function RatingContent({data, starsNo}){

    return(
        <>
            <div className="rating-profile">
                <div className="img-con">
                    <img src={data.source} alt={data.title} />
                </div>
                <div className="card-lower">
                    <div className="detail-con">
                        <p className="name">{data.name}</p>
                        <p className="title">{data.title}</p>
                    </div>
                    <button>Click</button>
                </div>
            </div>
        </>
    )

}