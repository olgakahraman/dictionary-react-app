import React from "react";
import "./Phonetic.css";

export default function Phonetic (props) {
  console.log(props.phonetic.audio);
   const audio = new Audio(props.phonetic.audio);
   function playSound() {
     audio.play();
   }
    return (
      <div className="Phonetic">
        <i className="fas fa-volume-up" onClick={playSound}></i>
        <span className="text"> {props.phonetic.text} </span>
      </div>
    );
} 