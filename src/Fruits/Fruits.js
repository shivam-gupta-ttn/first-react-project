import React from 'react';

const fruits = (props) => {
    return (
    <div>
        <table>
            {/* <tr>
                <th>Fruit</th>
                <th>Qty</th>
                <th>Delete</th>
            </tr> */}
            <tr>
                <td>{props.fname}</td>
                <td>{props.qty}</td>
                <td><button onClick={props.deleted}>Delete</button></td>
            </tr>
        </table>
    </div>
    )};

export default fruits;