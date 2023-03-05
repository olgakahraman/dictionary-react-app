import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
    <em>{props.meaning.definition}</em>
    <p>{props.meaning.example}</p>
          </div>
   
   
  );
}
