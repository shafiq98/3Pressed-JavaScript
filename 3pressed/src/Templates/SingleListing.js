import React from 'react'
import {useState} from 'react';

import {contactArray} from '../fixedInformationArray/contactArray';


const SingleListing = (props) => {
    const {title, age, sex, distance, rate, avatar} = props;
    const clickHandler = () => {
        console.log(`User Choice : ${title}`);
    }
    return (
        <article id = "SingleListing" className = "SingleListing" onClick = {clickHandler}>
            <div className="information">
                <img src={avatar} alt=""/>
                <h2>{title}</h2>
                <p>Age : {age}</p>
                <p>Sex : {sex}</p>
                <p>Distance : {distance}km</p>
                <p>Rate : ${rate}/hr</p>
            </div>

            <div className="contact">
                <img src="https://www.flaticon.com/svg/static/icons/svg/1384/1384023.svg" alt=""/>
                <img src="https://www.flaticon.com/svg/static/icons/svg/725/725643.svg" alt=""/>
                <img src="https://www.flaticon.com/svg/static/icons/svg/151/151804.svg" alt=""/>
                <img src="https://www.flaticon.com/svg/static/icons/svg/151/151876.svg" alt=""/>
                <img src="https://www.flaticon.com/svg/static/icons/svg/151/151949.svg" alt=""/>
            </div>

            <input type="submit" value = "Apply Now"/>
            
        </article>
    )
}

export const DisplayListing = (props) => {
    const {person} = props;
    // create an array of just one element so i can reuse code from other Templates

    return (
        <section id = "Listing" className="Listing" >
            {person.map((element) => {
                return <SingleListing
                // key is the unique id for an element inside the array, need this to avoid error inside console
                key = {element.id}
                // the spread operator below returns everything inside element, 
                // so we dont have to name every possible item that can exist inside element
                {...element}>
                </SingleListing>
            }
            
            )}
        </section>
    )
}