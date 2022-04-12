import React from 'react';
import './parag.css';

const Parag = (props) => {
    const { text } = props

    const element = text.map((elements) => {
        return (
          <p>{elements}</p>
        )
    })

    return (
        <div className="parContainer">{element}</div>
    )
}
export default Parag
