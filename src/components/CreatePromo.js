import React from "react";
import { useState } from 'react'

function CreatePromo() {

  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [active, setActive] = useState(false)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  function handleSubmit(event){
    event.preventDefault()
    fetch('/promotions', {
      method:'POST',
      headers: {'Content-Type': 'applications/json'},
      body: JSON.stringiify({
        description, price, active, date, time
      })
    }).then(res => {
      if( res.status != 200){
        return {
          message: 'bad request'
        }
      } else {
        return res.json()
      }
    }).then(res => {
      console.log(res)
    })
  }

  if (description === undefined) {
    return null
  }

  return (
    <form onSubmit={ handleSubmit }>
        <label htmlFor="">Description:</label>
        <input 
        // if someone types incorrect format 
          required
          type="text"
          name="description"
          onChange={(event) => {setDescription(event.target.value)}}
          value={ description }  
          />  
      </form>
  )
}

export default CreatePromo;