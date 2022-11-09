import * as React from 'react';
import Header from "./components/Header"
import Search from "./components/Search"
import Item from "./components/Item"
import ItemData from './components/ItemData';

function App() {

  const [searchTerm, setSearchTerm] = React.useState ('');      //  setting initial state for searchTerm variable

  const handleSearch = (event) => {        // event handler for when user types into search bar. Value stored in searchTerm variable
    setSearchTerm(event.target.value);
  };

  const filteredItems = ItemData.filter(remaining => {
    let country = remaining.Country.toLocaleLowerCase().includes(searchTerm.toLowerCase())              // function which filters through data stored in ItemData
    let destination = remaining.Destination.toLocaleLowerCase().includes(searchTerm.toLowerCase())
    return (country || destination) 
  });
    

  const items = filteredItems.map(item => {        // Rendering out the filtered data into the item component using .map and storing it in the items variable
    return (
      <Item 
          key={item.ID}
          URL={item.URL}
          Country={item.Country}
          Destination={item.Destination}
          Link={item.Link}
          Date={item.Date}
          Description={item.Description}
      />
    )
  })

  

// Main App Output
  
  return (
    <div className="app--container">
      <div className="app--wrapper">
          <Header />
          <Search onSearch={handleSearch}/>
          {items}
      </div>
    </div>
  )
}



export default App
