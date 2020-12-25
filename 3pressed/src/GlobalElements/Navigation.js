import React from 'react'
import {navigationArray} from './navArray';
import {useState} from 'react';
import navIcon from '../Images/navigation.png';

// JS for navigationMenu element


let userChoice = "Nothing";
// when an option in the navMenu is chosen, we record that choice using clickHandler
const NavElement = (props) => {
    const {title} = props;
    const clickHandler = () => {
        userChoice = title;
        console.log(`userChoice = ${userChoice}`);
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


    // this useState and handler handles the opening and closing of navMenu
    const [isOpen, setIsOpen] = useState(true);
    const clickHandler = () => {
        if (isOpen){
            document.getElementById("navigationMenu").style.width = "200px";
            document.getElementById("overlay").style.display = "block";
        }
        else{
            document.getElementById("navigationMenu").style.width = "0px";
            document.getElementById("overlay").style.display = "none";
        }
        setIsOpen(!isOpen);
    }

    // since the navMenu will be hidden once the menu opens up, the user will very likely be unable to click that again
    // so we dont have to worry about what happens if user clicks navMenu twice in succession
    return (
        <section className="navigation">
            {/* clicking on navButton triggers first change in state */}
            <section id = 'navButton' className= 'navButton' onClick = {clickHandler}>
                <img src={navIcon} alt=""/>
            </section>

            {/* clicking on overlay triggers second change in state */}
            <section id = "overlay" className="overlay" onClick = {clickHandler}>

            </section>

            <section id = 'navigationMenu' className="navigationMenu">
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

