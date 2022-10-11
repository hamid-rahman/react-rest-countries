import React from 'react';
import "./Country.css"

const Country = (props) => {
    const {name, flags, area, population, borders} = props.country;
    console.log(props.country);
    return (
        <div>
            <div className='Country bg-success'>
            <h4>Country details</h4>
            <p>Name: {name.common}</p>
            <img src={flags.png} alt="" />
            <p>population: {population}</p>
            </div>
            

        </div>
    );
};

export default Country;