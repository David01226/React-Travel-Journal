import React from 'react'

// Search Bar Component 

export default function Search ({onSearch}) {

    return (
        <div className="search--container">
            <div className="search--wrapper">
                <label htmlFor="search">Search</label>
                <input id="search" type="search" onChange={onSearch} placeholder="Filter by destination... (country/state/city/town)"/>
            </div>
        </div>
    )
};