import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const Render = () => { 

        return (
            <>
                <li className="nav-item  active">
                    <NavLink exact activeClassName="active-class" className="nav-link text-light" to="/"><b>Home</b> </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink exact activeClassName="active-class" className="nav-link text-light" to="/customers"><b>Customers</b> </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink exact activeClassName="active-class" className="nav-link text-light" to="/history"><b>Transaction-History</b> </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink exact activeClassName="active-class" className="nav-link text-light" to="/contact-us"><b>Contact-Us</b> </NavLink>
                </li>
            </>
        )
    }

    return (
        <>
            <div className="bg-dark">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark container">
                    <spam className="navbar-brand text-danger"><i class="fas fa-university"></i> Basic Banking System </spam>
                    <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navbar-left ml-auto text-center">
                            <Render />
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar