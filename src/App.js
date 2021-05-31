import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
   getAllUser();
  }, [])

  console.log('I am not from use effect')

  const onChangeData = (data) => {
    setName(data);
  };
  const onChangeData2 = (data) => {
    setEmail(data);
  };

  const getAllUser = async () => {
    const getData = await axios.get('/getusers')
      .then(user => {
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
      .then(res => console.log(res))
                            
    
    
  };

  // const getData = () => {
  //   const getData = axios.get('/getAlluser')
  //     .then(res => console.log(res.data))
  // }

  // getData();

  return (
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

       
      </div>
    </div>
  );
}
