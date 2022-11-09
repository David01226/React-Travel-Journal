import React from 'react'

// Item component which gets passed data from ItemData.jsx from the App component via props, 
// once the app component has filtered out the data based on the users search input.

export default function Item (props) {
    
    return (
        <div className="item--container">
            <div className="item--wrapper">

                <div className="item--left">
                    <img className="item--img" src={props.URL} alt="" />
                </div>

                <div className="item--right">
                    <div className="item--right--top">
                        <img className="item--location" src="location.png" alt="" />
                        <p className="item--country">{props.Country}</p>
                        <a href={props.Link} target="_blank">View on Google Maps</a>
                    </div>
                    <h1>{props.Destination}</h1>
                    <p><strong>{props.Date}</strong></p>
                    <p>{props.Description}</p>
                </div>

            </div>
        </div>
    )

};