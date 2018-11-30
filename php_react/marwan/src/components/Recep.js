import React from 'react';
import classes from './Recep.css'
const recep = (props) => {
return (

   
      <div className={[classes.Card, "card"].join(' ')} id={props.id}>
         <img className="card-img-top" src="..." alt="Card image cap"></img>
         <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
      </div>
   

);
}



export default recep;