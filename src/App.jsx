import * as React from 'react';
import Header from "./components/Header"
import Search from "./components/Search"
import Item from "./components/Item"
import ItemData from './components/ItemData';

function App() {

  const [searchTerm, setSearchTerm] = React.useState ('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = ItemData.filter(remaining => {
    let country = remaining.Country.toLocaleLowerCase().includes(searchTerm.toLowerCase())
    let destination = remaining.Destination.toLocaleLowerCase().includes(searchTerm.toLowerCase())
    return (country || destination) 
  });
    

  const items = filteredItems.map(item => {
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
