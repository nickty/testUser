import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onChangeData = (data) => {
    setName(data);
  };
  const onChangeData2 = (data) => {
    setEmail(data);
  };

  const submitData = (e) => {
    e.preventDefault();

    const data = {
      name, email
    }

    const config = {
      headers: {
        'Content-Type' : 'application/json'
      }
    }

    const sendData = axios.post('/register', data, config)
      .then(res => console.log(res.data))
                      
    
    
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
            <button className="btn btn-primary mt-2">Register</button>
          </form>
        </div>
      </div>
      <div className="row">
        {/* <button onClick={getData} className="btn btn-info mt-5">Get Data</button>

       if(allUser){
         allUser
       } */}
      </div>
    </div>
  );
}
