import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries,setVisitedCountries] = useState([])

  const handleVisitedCountries = (country) => {
    const newCountryVisit = [...visitedCountries,country]
    setVisitedCountries(newCountryVisit)
  }

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  // console.log(countries)
  return (
    <>
      <h1>World Countries: {countries.length}</h1>
      <h2>Total Country Visited: {visitedCountries.length}</h2>
      <ol>
        {
          visitedCountries.map((country,index) =><li key= {index} >{country.name.common}</li>)
        }
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
