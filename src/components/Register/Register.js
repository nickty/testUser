import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import NavbarMain from '../Navbar/Navbar'

const Register = () => {


    const [gender, setGender] = useState('')
    const [country, setOption] = useState('')

    let genders = ["male", "female", "Guy"]

    let options = ['USA', 'UK', 'EU', 'AU']

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
                    <select className="form-control" onChange={e=> setOption(e.target.value)}>
                        <option disabled>Your country</option>
                       {options.map( xx => (<option value={xx}>{xx}</option>))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Genter: </label><br />

                    {genders.map(result => ( <Form.Check
                        type="radio"
                        label={result}
                        name="formHorizontalRadios"
                        onChange={e => setGender(e.target.value)}
                        value={result}
                        />))}
                    
                                         
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
            {country}
        </div>
        </>
    )
}

export default Register
