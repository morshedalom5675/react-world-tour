import React, {useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries}) => {
  
    // console.log(handleVisitedCountries)

    const [Visited, setVisited] = useState(false)
    const handleVisit = () =>{
        // if(Visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }
        Visited? setVisited (false) : setVisited(true)
        handleVisitedCountries(country)
    }
    return (
        <div className={`country ${Visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country":"Small Country"} </p>
            <button onClick={handleVisit}>{Visited? "Visited":"Not Visited"}</button>
        </div>
    );
};

export default Country;