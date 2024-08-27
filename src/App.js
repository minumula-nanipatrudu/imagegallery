import React from "react";
import { useState } from "react";
import axios from "axios";
import Gallery from "./Gallery";
let apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
function App() {
  let [search, setSearch] = useState("");
  let [data, setData] = useState([]);
  let changeHandler = (e) => {
    setSearch(e.target.value);
  };

  let submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => setData(response.data.photos.photo));
    console.log(search);
  };
  return (
    <div>
      <center>
        <h2>Gallery snapshots</h2>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={changeHandler} />
          <br />
          <br />
          <button>Sumbit</button>
          <br />
          <br />
        </form>
        {data.length >= 1 ? <Gallery data={data} /> : <h4>No data Loaded</h4>}
      </center>
    </div>
  );
}

export default App;
