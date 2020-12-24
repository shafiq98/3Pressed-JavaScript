import React from 'react';
import ReactDom from 'react-dom';

// import CSS
import './/CSS/main.css';

// import icons and images from Images folder
import navIcon from './Images/navigation.png'


// individual elements
// array of choices user can choose
const listingArray = [
  {
    id: 1,
    title: "Academic Tuition"
    // TODO : learn how to link this to a new page, academicTuition.html or smth
    // might be linked to React Router, watch tutorial to proceed
  }, 
  {
    id: 2,
    title: "Other Enrichment"
  },
  {
    id: 3,
    title: "Arts&IT"
  },
  {
    id: 4,
    title: "Personal Care"
  },
  {
    id: 5,
    title: "Property"
  },
  {
    id: 6,
    title: "Home Services"
  },
  {
    id: 7,
    title: "Medical"
  },
  {
    id: 8,
    title: "Transport"
  }
];

// header for company name
const myHeader = "3-Pressed"

// LHS navigation menu
const navigationArray = [
  {
    id: 1,
    title: 'Home'
    // TODO : learn how to link this Home option to index.html, or the first page
  },
  {
    id: 2,
    title: 'Profile'
  },
  {
    id: 3,
    title: 'Inbox'
  },
  {
    id: 4,
    title: 'Past Bookings'
  },
  {
    id: 5,
    title: 'Contact Us'
  },
  {
    id: 6,
    title: 'Log-Out'
  },
  {
    id: 7,
    title: 'Privacy Policy'
  },
];

// JS for navigationMenu element
const NavElement = (props) => {
  const {title} = props;
  const clickHandler = () => {
    alert("You clicked into the navigation Menu!!")
  }

  return (
    <article className = "navElement" onClick= {clickHandler}>
      <span><h4>{title}</h4></span>
    </article>
  )
}


// JS for listingArray element
const Element = (props) => {
  const {title} = props;
  const clickHandler = () => {
    alert("You Clicked in the grid of choices!")
  }

  return (
    <article className = "element" onClick= {clickHandler}>
      <span><h1>{title}</h1></span>
    </article>
  )
}

// function that returns the whole page
function ElementList() {

  //opens when you click on the hamburger icon
  const openButton = () => {
    document.getElementById("navigationMenu").style.width = "200px";
    // TODO : toggle an overlay that prevents user from clicking anything 
    // like the grid of options that should be conceptually "behind" the navMenu
    document.getElementById("overlay").style.display = "block";
  }
  // closes when you click on the black overlay outside the navMenu
  const closeButton = () => {
    if (document.getElementById("navigationMenu").style.width === "200px")
    {
      document.getElementById("navigationMenu").style.width = "0px";
      document.getElementById("overlay").style.display = "none";
    }
  }

  return (
    <div className= 'main'>
      
      <section className = 'header'>
        <h1>{myHeader}</h1>
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
      
      <section id = "overlay" className="overlay" onClick = {closeButton}>

      </section>
      <section id = 'navButton' className= 'navButton' onClick= {openButton}>
        <img src={navIcon} alt=""/>
      </section>


      <section id = 'ElementList' className = 'ElementList' onClick = {closeButton}>
        {listingArray.map((element) => {
          return <Element 
          key = {element.id}
          {...element}>
          </Element>
        })}
      </section>
    </div>
    
  )
}


// include opening and closing tag when passing in a function inside React.render()

ReactDom.render(<ElementList></ElementList>, document.getElementById('root'));