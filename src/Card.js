import React from 'react';



const Card  = (props) =>{
    return (
        <div>
        <div className="bg-cyan-200 rounded-xl hover:bg-red-100 hover:scale-95">
            <img src={"https://robohash.org/"+props.id}></img>
            <div className="font-bold">
                <h1 >{props.name}</h1>
                <p>{props.mail}</p>
               
            </div>
        </div>
        </div>
    );
}

export default Card;

