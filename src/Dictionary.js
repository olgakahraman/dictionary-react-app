import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1 className="text-center m-5">DICTIONARY</h1>
      <section>
      <h3>What word would you like to look up?</h3>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <div className="hint">suggested words: sunset, wine, yoga, plant...</div>
      </section>
      <Results results={results} />
    </div>
  );
}
