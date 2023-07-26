import React, { useState } from "react";
import data from "./data";
import Tours from './Components/Tours';
import Refresh from './Components/Refresh';

const App = () => {
  const [tour, setTour] = useState(data);

  function removeTour(id) {
    // means filter krdia jo jo given id ke alava wali id hai usko new id me daal dia 
    const newTour = tour.filter(tour => tour.id !== id)
    console.log(id);
    setTour(newTour);
  }


  // Let's say sb delete , so referesh wala page will renger 
  if (tour.length === 0) {
    return <Refresh setTour={setTour} data={data} />
  }

  return (
    <Tours tours={tour} removeTour={removeTour} />
  )
};

export default App;
