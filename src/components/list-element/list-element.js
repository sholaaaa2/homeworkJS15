import React from 'react';
import './list-element.css';

const ListItems = (props) => {
    const { list } = props

    const element = list.map((elements) => {
        return (
          <li className="list"><a href={elements.linkAdress}>{elements.name}</a></li>
        )
    })

    return (
        <ul>{element}</ul>
    )
}
export default ListItems;
