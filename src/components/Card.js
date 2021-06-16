import React from 'react'
import './Card.css'
import Button from 'react-bootstrap/Button';


const Card = (props) => {
    return (
    <div className="card">
        <h2>{props.name}</h2>
        <p>{props.email}</p>
        <p>{props.text}</p>

        <Button variant="warning">Send</Button>
      

    </div>
    )
}

export default Card
