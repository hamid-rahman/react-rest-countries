import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setCountries(data))
    },[])
    return (
        <div>
            <div className='title-countries'>
            <h2>Load countries</h2>
            <h3>Countries length: {countries.length}</h3>
            </div>
            <div className='countries'>
            {
                countries.map(country => <Country country={country}></Country>)
            }

            </div>
           
        </div>
    );
};

export default Countries;