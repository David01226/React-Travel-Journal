import * as React from 'react';
import Header from "./components/Header"
import Search from "./components/Search"
import Item from "./components/Item"
import ItemData from './components/ItemData';

function App() {

  const items = ItemData.map(item => {
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

  const [searchTerm, setSearchTerm] = React.useState ('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  


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
