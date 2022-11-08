import React from 'react'

export default function Search () {

    return (
        <div className="search--container">
            <div className="search--wrapper">
                <label htmlFor="search">Search</label>
                <input id="search" type="text" placeholder="Filter by destination... (country/state/city/town)"/>
            </div>
        </div>
    )
};