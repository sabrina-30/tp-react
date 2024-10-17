import React from 'react';

const Beer = (props : any) =>{
  return (
    <ul >
        <li key={props.id}>
            {props.name}
        </li>
    </ul>
  );
}

export default Beer;