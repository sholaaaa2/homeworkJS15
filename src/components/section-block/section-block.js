import React from 'react';
import './section-block.css';
import Parag from "../parag/parag"

const Section = (props) =>{
  return(
    <div>
      <h1>{props.head}</h1>
      <Parag text={props.text}/>
    </div>
  );
}
export default Section
