import React from 'react'
import {useState} from 'react';

import {tutorArray} from './tutorArray';

let userChoice = "None";
const Tutor = (props) => {
    const {title, age, sex, distance, rate, avatar} = props;
    const clickHandler = () => {
        console.log(avatar);
    }
    return (
        <article id = "element" className = "element" onClick = {clickHandler}>
            <div className="information">
                <span><h1>{title}</h1></span>
                <h4>Age : {age}</h4>
                <h4>Sex : {sex}</h4>
                <h4>Distance : {distance}</h4>
                <h4>Rate : {rate}</h4>
            </div>
            <div className="image-container">
                <img src={avatar} alt=""/>
            </div>         
            
        </article>
    )
}

export const TutorListing = () => {
    return (
        <section id = 'tutorListing' className="tutorListing">
            {tutorArray.map((element) => {
                return <Tutor
                // key is the unique id for an element inside the array, need this to avoid error inside console
                key = {element.id}
                // the spread operator below returns everything inside element, 
                // so we dont have to name every possible item that can exist inside element
                {...element}>
                </Tutor>
            })}
        </section>
    )
}