import React from 'react'

const Element = (props) => {
    const {title} = props;
    const clickHandler = () => {
      alert(title)
    }
  
    return (
        <article id = "element" className = "element" onClick = {() => clickHandler(title)}>
        <span><h1>{title}</h1></span>
        </article>
    )
}

export default Element
