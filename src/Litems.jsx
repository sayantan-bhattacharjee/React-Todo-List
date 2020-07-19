import React from 'react';
import './Litems.css';

function Litems(props){
 return (
    <div>
       {props.notes.map((n,i)=> (
             <h1 key={n.key}>{n.text}</h1>
          )
       )}
    </div>
 )
}


export default Litems;