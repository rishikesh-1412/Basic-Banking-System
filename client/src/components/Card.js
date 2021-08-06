import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = (props) => {

    const url = "/customers/" + props.id;

    return( 
        <>
            
                <tr>
                    <td>
                        {props.index}
                    </td>
                    <td>
                        {props.name}
                    </td>
                    <td>
                        {props.email}
                    </td>
                    <td>
                        {props.phone}
                    </td>
                    <td>
                        {props.account}
                    </td>
                    <td>
                        <b>₹ </b>{props.balance}<b> /-</b>
                    </td>
                    <td>
                    <button style={{marginBottom:"5px", height: "40px" }} className="btn btn-primary">
                            <NavLink className="nav-link text-light" to={url}>
                                Click
                            </NavLink>
                        </button>
                    </td>
                </tr> 
        </>
    )
}

export default Card