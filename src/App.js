import { useState } from 'react';
import './App.css';
import Debounce from './Debounce';
import Throattle from './Throattle';
import HandleMousemove from './Throattle';

function App() {
  const [inputlist, setInputlist] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputlist(e.target.value);
  }

  // const handleClick = () => {
  //   console.log("Adding Items");
  //   setItems((previousData) => {
  //     return [...previousData, inputlist];
  //   });
  //   setInputlist("")
  // };

  const handleClick = () => {
    // Check if inputlist is not empty
    if (inputlist.trim() !== "") {
      console.log("Adding Items");
      setItems((previousData) => {
        return [...previousData, inputlist];
      });
      setInputlist("");
    }
  };

  const handleKeyPress = (e) =>{
    if(e.key === 'Enter'){
      handleClick();
    }
  }
  

  const handleRemove = (index) => {
    setItems((previousData) => {
      return previousData.filter((_, i) => i !== index);
    });
  }

  // const [data, setData] = useState("")


  return (
    <div className="App">
      <div className='centre_div'>
        <br />
        <h1> Todo List - akshaay01 </h1>
        <br />
        <input 
           type="text" 
           placeholder='Add an Item'
           value={inputlist}
            onChange={itemEvent}
            onKeyPress={handleKeyPress} />
        <button onClick={handleClick}> + </button>
        <ol>
          {items.map((itemvalue, index) => (
            <li key={index}>
              {itemvalue}
              <button className='red' onClick={() => handleRemove(index)}>x</button>
            </li>
          ))}
        </ol>

      </div>
      {/* <Debounce /> */}
      {/* <Throattle /> */}
    </div>
  );
}

export default App;