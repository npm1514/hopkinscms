import React from "react";
import { useState } from 'react'

function NewPromo() {

  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [active, setActive] = useState('')
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
      <label htmlFor="">Event Description</label>
      <input 
        required
        type="text"
        name="description"
        // onChange event 
        onChange={(event) => {setDescription(event.target.value)}}
        value = { email }
      />
      <label htmlFor="">Price</label>
      <label htmlFor="">Go live</label>
      <label htmlFor="">Date</label>
      <label htmlFor="">Time</label>
      <input type="submit"></input>
    </form>
  )
}

export default NewPromo;