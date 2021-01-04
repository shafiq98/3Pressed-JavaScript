import React from 'react'
import {navigationArray} from './navArray';
import {useState, useContext} from 'react';
import navIcon from '..//Images//navigation.png';
import { ChoiceContext } from './ChoiceContext';

const openNav = () => {
    document.getElementById("navigationMenu").style.width = "200px";
    document.getElementById("overlay").style.display = "block";
}

const closeNav = () => {
    document.getElementById("navigationMenu").style.width = "0px";
    document.getElementById("overlay").style.display = "none";
}

// when an option in the navMenu is chosen, we record that choice using clickHandler
const NavElement = (props) => {
    const {title} = props;
    const {choice, setChoice} = useContext(ChoiceContext);
    const clickHandler = () => {
        setChoice(title);
        closeNav();
    }

    // this return statement defines how each individual grid looks like
    // modify this to add icons, etc in the future
    return (
        <article id = "navElement" className = "navElement" onClick= {clickHandler}>
            <span><h4>{title}</h4></span>
        </article>
    )
}

export const NavMenu = (props) => {

    const {informationArray} = props;
    let username = informationArray[0].username;
    // bring in open and close nav functions from index.js
    // better than declaring inline since we need to use closeNav in multiple places onClick

    // since the navMenu will be hidden once the menu opens up, the user will very likely be unable to click that again
    // so we dont have to worry about what happens if user clicks navMenu twice in succession
    return (
        <section className="navigation">
            {/* clicking on navButton triggers first change in state */}
            <section id = 'navButton' className= 'navButton' onClick = {openNav}>
                <img src={navIcon} alt=""/>
            </section>

            {/* clicking on overlay triggers second change in state */}
            <section id = "overlay" className="overlay" onClick = {closeNav}>

            </section>

            <section id = 'navigationMenu' className="navigationMenu">
                <section className="welcomeMessage">
                    <p>Welcome</p>
                    <h2>{username}</h2>
                </section>
                
                {navigationArray.map((element) => {
                    return <NavElement
                    // key is the unique id for an element inside the array, need this to avoid error inside console
                    key = {element.id}
                    // the spread operator below returns everything inside element, 
                    // so we dont have to name every possible item that can exist inside element
                    {...element}>
                    </NavElement>
                })}
            </section>
        </section>
    )
}

