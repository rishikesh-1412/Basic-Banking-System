import React from 'react'

const Card2 = (props) => {

    return ( 
        <>

            <tr>
                <td>
                    {props.index}
                </td>
                <td>
                    {props.id}
                </td>
                <td>
                    {props.from}
                </td>
                <td>
                    {props.to}
                </td>
                <td>
                    <b>₹ </b>{props.amount}<b> /-</b>
                </td>
                <td>
                    {props.date}
                </td>
                <td>
                    {props.time}
                </td>
            </tr>
        </>
    )
}

export default Card2