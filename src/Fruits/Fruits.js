import React from 'react';
// import Fruit from '../Fruits/Fruit/Fruit';

const fruit = (props) => {
    return (
       
            <tr>
                <td>{props.fname}</td>
                <td>{props.qty}</td>
                <td><button onClick={props.deleted}>X</button></td>
            </tr>
       
    )
};

export default fruit;