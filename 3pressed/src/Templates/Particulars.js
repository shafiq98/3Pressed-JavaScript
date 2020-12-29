import React from 'react'
import {useState} from 'react';

// this template will be used for listing of inidivdual people, with more detail like a list of tutors
let userChoice = "None";
const Particulars = (props) => {
    const {title, age, sex, distance, rate, avatar} = props;
    const clickHandler = () => {
        userChoice = title;
    }
    return (
        <article id = "element" className = "element" onClick = {clickHandler}>
            <div className="information">
                <span><h1>{title}</h1></span>
                <h4>Age : {age}</h4>
                <h4>Sex : {sex}</h4>
                <h4>Distance : {distance}km</h4>
                <h4>Rate : ${rate}/hr</h4>
            </div>
            <div className="image-container">
                <img src={avatar} alt=""/>
            </div>         
            
        </article>
    )
}

export const ParticularsListing = (props) => {
    const {particularsArray} = props;
    const clickHandler = () => {
        console.log(userChoice);
    }
    const [showListing, setShowListing] = useState(false);
    return (
        <section id = 'particularsListing' className="particularsListing" onClick = {clickHandler}>
            {!showListing && particularsArray.map((element) => {
                return <Particulars
                // key is the unique id for an element inside the array, need this to avoid error inside console
                key = {element.id}
                // the spread operator below returns everything inside element, 
                // so we dont have to name every possible item that can exist inside element
                {...element}>
                </Particulars>
            })}
        </section>
    )
}