import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="container text-center">
                    <br/>
                    <h1 >Task1: Basic Banking System</h1>
                    <p>Task 1 of Web Development Intership at <b className="text-danger">The Spark Foundation</b></p>
                    <br /><br /><br /><br />
                    <h4>This is Basic Banking System. Here customer can transfer money from one account to another and also can see transfer history of transaction along with date and time. </h4>
                    <br /><br /><br />
                    <h4>Customer can also send message through client so, developer will get that message and will contact a customer soon.</h4>
                    <br /><br /><br />
                    <button className="btn btn-primary"><NavLink className="nav-link text-light homeBtn" to="/customers">Start Banking</NavLink></button>
                </div>
            </div> 
        </>
    )
}

export default Home
