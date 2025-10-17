import React, { Fragment, useState } from 'react'

function Contant() {

    const [name, setname] = useState('kumar');

    function handling(){
        const name =['velu','kumar','Rakul'];
        const int = Math.floor(Math.random()*3);
        setname (name[int])
    }
  return (

    <Fragment>
        <p>Hello {name} </p>
        <button onClick={handling}>click</button>
    </Fragment>
    
  )
}

export default Contant