import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definitions[0].definition}</p>
      <div className="example">{props.meaning.definitions[0].example}</div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
