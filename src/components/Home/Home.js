import React from 'react'

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import closeButton from "react-bootstrap/CloseButton"

import { useState, useEffect } from "react";
import axios from "axios";

import Card from '../Card';
import NavbarMain from '../Navbar/Navbar';

const Home = () => {

    const [show, setShow] = useState(false);

    const [allUser, setAllUser] = useState([]); 
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [deleted, setDeleted] = useState('');
    const [register, setRegister] = useState('');
  
  
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
  
    const [userId, setUserId] = useState('')
  
  
  
   
  
    useEffect(() => {
      getAllUser();
     console.log("use effect")
    }, [deleted, register])
  
    
  
    console.log('I am not from use effect')
  
    const onChangeData = (data) => {
      setName(data);
    };
    const onChangeData2 = (data) => {
      setEmail(data);
    };
  
    const getAllUser = async () => {
      await axios.get('/getusers')
        .then(user => {
           setAllUser(user.data)  
           console.log(user.data)
        })
    }
  
    
  
    const submitData = async (e) => {
      e.preventDefault();
  
      const data = {
        name : name, 
        email : email
      }
  
      const config = {
        headers: {
          'Content-Type' : 'application/json'
        }
      }
  
      const sendData = await axios.post('/register', data, config)
        .then(res => setRegister(res.data))
        .catch(err => console.log(err.response))
                              
      
      
    };
  
    // const getData = () => {
    //   const getData = axios.get('/getAlluser')
    //     .then(res => console.log(res.data))
    // }
  
    // getData();
  
    const deleteFunc = async (item) => {
      console.log(item)
  
        await axios.delete(`/userDelete/${item}`)
      .then(res => setDeleted(res.data))
  
    }
  
    const handleShow = async (xxx) => {
  
      await axios.get(`/getuser/${xxx}`)
      .then(user => {
        setName(user.data.name)
        setEmail(user.data.email)
        setUserId(user.data._id)
      })
  
      setShow(true)
  
    }
    const handleClose = () => setShow(false)
  
    const saveChange = async () => {
      
      setShow(false)
  
      const data = {
        name : name, 
        email : email
      }
  
      const config = {
        headers: {
          'Content-Type' : 'application/json'
        }
      }
  
      await axios.put(`/userupdate/${userId}`, data, config)
      .then(user => {
        const index = allUser.findIndex(user => user._id === userId)
  
        let update = allUser(index)
  
        update.name = userName; 
        update.email = userEmail;
  
        setAllUser([ ...allUser, ...update])
      })
  
    }
  
    return (
      <>
      <NavbarMain />
      <div className="container mt-4">
        
        <div className="row">
          <div className="col-md-6 bgs text-center p-3">
            <h2>Section one</h2>
            <p>
              lorem loerem lorem loeremlorem loeremlorem loeremlorem loeremlorem
              loeremlorem loerem
            </p>
          </div>
          <div className="col-md-6 bg text-center p-3">
            <h2>Register form</h2>
            <form className="dd" onSubmit={submitData}>
              <div className="form-group">
                <label className="left">Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={(e) => onChangeData(e.target.value)}
                  value={name}
                  placeholder="name"
                 
                />
              </div>
              <div className="form-group">
                <label className="left">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="name"
                  onChange={(e) => onChangeData2(e.target.value)}
                  placeholder="Email"
                  value={email}
                  
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2">Register</button>
            </form>
          </div>
        </div>
        <div className="row mt-5 p-3">
          All users
  
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody>
              
  
              {allUser.map( xx => (
            <tr key={xx._id}>
            <th scope="row">{xx._id}</th>
            <td>{xx.name}</td>
            <td>{xx.email}</td>
            <td>
              <button className="btn btn-info" onClick={() => handleShow(xx._id)}>Edit</button>
              <button onClick={()=>deleteFunc(xx._id)} className="btn btn-danger">Delete</button>
            </td>
          </tr>
          ))}
              
            </tbody>
          </table>
  
         
         
        </div>
  
        <h2>Props Example from here</h2>
  
        
        {allUser.map(dd => (<Card {...dd} text="Bangladesh" />))}
        
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                  <label for="">Name</label>
                  <input className="form-control" onClick={(e) => setName(e.target.value)} type="text" name="" value={name} />
                </div>
  
                <div className="form-group">
                  <label for="">Email</label>
                  <input className="form-control" onClick={(e) => setEmail(e.target.value)} type="email" name="" value={email} />
                </div>
             
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={saveChange}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      </>
    );
}

export default Home
