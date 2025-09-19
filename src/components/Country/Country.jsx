import React, {useState } from 'react';
import './Country.css'

const Country = (country) => {
    const [Visited, setVisited] = useState(false)

    // console.log()
    const handleVisit = () =>{
        // if(Visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }
        Visited? setVisited (false) : setVisited(true)
    }
    return (
        <div className={`country ${Visited && 'country-visited'}`}>
            <img src={country.country.flags.flags.png} alt={country.country.flags.flags.alt} />
            <h2>Name: {country.country.name.common}</h2>
            <p>Population: {country.country.population.population}</p>
            <p>Area: {country.country.area.area} {country.country.area.area > 300000 ? "Big Country":"Small Country"} </p>
            <button onClick={handleVisit}>{Visited? "Visited":"Not Visited"}</button>
        </div>
    );
};

export default Country;