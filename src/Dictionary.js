import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] =useState(false);

  function handleResponse(response) {
    
    setResults(response.data[0]);
  }

  function search() {
    

    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
function handleSubmit(event){
  event.preventDefault();
  search();
}


  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

function load() {
  setLoaded(true);
  search();
}

if (loaded){
   return (
    <div className="Dictionary">
      <h1 className="text-center m-5">DICTIONARY</h1>
      <section>
      <h3>What word would you like to look up?</h3>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
      </form>
      <div className="hint">suggested words: sunset, wine, yoga, plant...</div>
      </section>
      <Results results={results} />
    </div>
  );
}else{
  load();
  return "Loading";
}
 
}
