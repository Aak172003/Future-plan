import React from 'react'
import Card from './Card.jsx';

const Tours = (props) => {

    function getId(id) {
        // yaha se id milega 
        props.removeTour(id);
    }

    return (
        <div className='container'>
            <div>
                <h2 className="title">Future Plans</h2>
            </div>

            <div className="cardsContainer">
                {
                    props.tours.map((tour) => {

                        // Copy individual Objects 
                        // console.log(tour);
                        // Kyuki hr ek Individual ka ek khud ka tourid hota hai 
                        return <Card key={tour.id} tour={tour} getRemoveId={getId} />
                    })
                }
            </div>
        </div>
    )
}

export default Tours
