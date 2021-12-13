import React from 'react'
import { Container } from 'react-bootstrap'
import spaceShip from '../assets/404.png'
import Nav from './nav'
import { Link } from 'react-router-dom'
export default function Error() {
    return (
        <>
            <div className="error">
                <Container>
                <Nav />
                <div className="text" >
                    <div className="details">
                        <h4>Don't cry</h4>
                        <Link to="/">back to Home</Link>
                    </div>
                    <div className="verticalLine"></div>
                    <div className="details">
                        <h5>its just a 404 error!</h5>
                        <span>the page you are looking is not found.</span>
                    </div>
                </div>
                <div className="Container">
                    <img src={spaceShip} alt="404" />
                </div>
                <div className="responsiveMsg">
                    <h5>oops!!! page not found</h5>
                    <Link to="/">back to home</Link>
                </div>
                </Container>
            </div>
        </>
    )
}
