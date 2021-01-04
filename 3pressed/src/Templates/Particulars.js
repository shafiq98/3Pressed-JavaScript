import React from 'react'
import {useState, useContext} from 'react';
import {ChoiceContext} from '..//GlobalElements/ChoiceContext';


// this template will be used for listing of individual people, with more detail like a list of tutors
const Particulars = (props) => {
    const {title, age, sex, distance, rate, avatar} = props;
    const {choice, setChoice} = useContext(ChoiceContext);
    const clickHandler = () => {
        setChoice(title);
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
    const {particularsArray, ToDisplay} = props;
    return (
        <section id = 'particularsListing' className="particularsListing">
            {(ToDisplay === 2) && particularsArray.map((element) => {
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