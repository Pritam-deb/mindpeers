import './App.css';
import Api from './component/Api';
import Search from './component/Search';
import { useState } from 'react';



function App() {

  const [query, setQuery] = useState();
  
  return (
    <div className="App">
    <div>
      <input type="text" onChange={(event) => setQuery(event.target.value)}/>
      {/* {console.log(query)} */}
    </div>
      {query ? <Search keyword = {query}/> : <Api/>}
    </div>
  );
}

export default App;
