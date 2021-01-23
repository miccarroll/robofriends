import React from 'react'

const SearchBox= ({searchChange}) => {
  return (
    <div>
    <input className="searchBox" onChange={searchChange} type="search" placeholder="search robots"/>
    </div>
  );
}

export default SearchBox