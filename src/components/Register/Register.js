import React from 'react'
import { Form } from 'react-bootstrap'
import NavbarMain from '../Navbar/Navbar'

const Register = () => {

    return (
        <>
        <NavbarMain />
        <div className="container">
            
            <h2>Register</h2>

            <form>
                <div className="form-group">
                    <labe for="names">Name</labe>
                    <input className="form-control" type="text" id="names" name="name" value="" placeholder="Enter your name" />
                </div>
                
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" type="email" name="email" value="" placeholder="Enter your Email" />
                </div>

                <div className="form-group">
                    <label for="password">Password</label>
                    <input className="form-control" id="password" type="password" name="email" value="" placeholder="Enter your Password" />
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input className="form-control" type="text" name="address" value="" placeholder="Enter your address" />
                </div>

                <div className="form-group">
                    <label for="country">Select your Country</label>
                    <select className="form-control">
                        <option disabled>Your country</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>EU</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Genter: </label><br />
                    
                    <Form.Check
                        type="radio"
                        label="Male"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        />
                        <Form.Check
                        type="radio"
                        label="Female"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        />
                        <Form.Check
                        type="radio"
                        label="Not wish to answer"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        />
                </div>
                <br />
                <div className="form-group">
                    <label for="textar">About You</label>
                <Form.Control
                    as="textarea"
                    id="textar"
                    placeholder="Leave a comment here"
                    style={{ height: '200px' }}
                    />
                </div>

                <br />
                <button type="submit" className="btn btn-info">Register</button>
                

            </form>
        </div>
        </>
    )
}

export default Register
