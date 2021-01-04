import React from 'react'

// this template will be used to display the user's information when they click on profile in the nav menu
const PersonalInfo = (props) => {
    const {username, age, email, avatar, address} = props;

    const clickHandler = () => {
        console.log(`Username : ${username}`);
    }

    return (
        <article id = "SingleListing" className="SingleListing" onClick = {clickHandler}>
            <div className="information">
                <img src={avatar} alt=""/>
                <h1>{username}</h1>
                <p>Email : {email}</p>
                <p>Age : {age}</p>
                <p>Address : {address}</p>
            </div>
        </article>
    )
}

export const InfoListing = (props) => {
    const {informationArray, ToDisplay} = props;
    return (
        <section id = 'Listing' className="Listing">
            {(ToDisplay === 4) && informationArray.map((element) => {
                return <PersonalInfo
                // key is the unique id for an element inside the array, need this to avoid error inside console
                key = {element.id}
                // the spread operator below returns everything inside element, 
                // so we dont have to name every possible item that can exist inside element
                {...element}>
                </PersonalInfo>
            })}
        </section>
    )
}