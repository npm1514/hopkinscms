import React from "react";
// import LoginForm from '../styled-components/components/loginform';
import { useState } from 'react'


function LogIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogIn(event){
    event.preventDefault()
    fetch('/api/login', {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email, password:'test'
      })
      // converting the response into JSON 
    }).then(res => {
      // this will send a better browser response
      if( res.status != 200){
        return {
          message: 'bad request'
        }
      } else {
        return res.json()
      }
      // pass response to next function
    }).then(res => {
      console.log(res)
    })
  }

  if (email === undefined) {
    return null
  }
  return(
  
      <form onSubmit={ handleLogIn }>
        <label htmlFor="">Email:</label>
        <input 
        // if someone types incorrect format 
          required
          type="email"
          name="email"
          onChange={(event) => {setEmail(event.target.value)}}
          value={ email }  
          />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          required
        />
        <input type="submit"></input>
      </form>
  )
}

export default LogIn;
  //next steps
  // onchange events for password
  // swap out string for actual value 
  // redirect to promotion page

  // for other page:
  // fetch promomos, create new 
  // create promo page 

  // Notes: 
  // password & required means..