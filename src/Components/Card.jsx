import React, { useState } from 'react'

// App se tours aaya or Tours se tour aaya as a props
const Card = (props) => {
    // Initial me false 
    const [readmore, setReadmore] = useState(false)

    // If jb setReadmore se hamara readmore true hota hai means poora text dikaho , 
    // Otherwise substring dikaho 0 to 200 length ka 
    let description = readmore ? props.tour.info : `${props.tour.info.substring(0, 200)}....`;


    console.log(description)

    return (
        <div className="card">

            <img className='cityImage' src={props.tour.image} alt="cityImage" />

            {/* Info */}
            <div className="tourInfo">

                {/* Money or place  */}
                <div className="tourDetails">
                    <h4 className="tourPrice">Price : {props.tour.price}</h4>
                    <h4 className="tourCityName">Location : {props.tour.name}</h4>
                </div>


                {/* Description */}
                <div className="description">

                    {/* Jitna upr se description aaega utna mai dikahunga  */}
                    {description}

                    {/* Make Readmore */}
                    {/* Click hone pr readmore true ka false or false ka true  */}
                    <span className='readMore' onClick={() => { setReadmore(!readmore) }}>

                        {/* if click means condtion true so first staement execute , 
                        otherwise false means second statement execute */}

                        {/* Agr readmore click hai means true hai , to show less ka dikaega otherwise show More ko dikhaega */}
                        {readmore ? " Show Less" : " Read More"}
                    </span>
                </div>


            </div>
            <button className='notIntrestedBtn' onClick={() => props.getRemoveId(props.tour.id)}>Not Intrested</button>
        </div>
    )
}

export default Card