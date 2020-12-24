import React from 'react'

// JS for navigationMenu element
const NavElement = (props) => {
    const {title} = props;
    const clickHandler = () => {
        alert("You clicked into the navigation Menu!!")
    }

    return (
        <article id = "navElement" className = "navElement" onClick= {clickHandler}>
        <span><h4>{title}</h4></span>
        </article>
    )
}

export default NavElement
