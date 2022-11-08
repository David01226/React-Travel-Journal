import React from 'react'

export default function Search ({onSearch}) {

    return (
        <div className="search--container">
            <div className="search--wrapper">
                <label htmlFor="search">Search</label>
                <input id="search" type="text" onChange={onSearch} placeholder="Filter by destination... (country/state/city/town)"/>
            </div>
        </div>
    )
};