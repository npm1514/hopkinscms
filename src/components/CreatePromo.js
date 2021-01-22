import React from "react";
import { useState } from 'react'

function CreatePromo() {

  const [description, setDescription] = useState('')
  const [price, setPrice] = useState()
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
          type="textarea"
          name="description"
          onChange={(event) => {setDescription(event.target.value)}}
          value={ description }  
          /> 
      <label htmlFor="">Price</label>
      <input 
        required
        type="text"
        name="price"
        onChange={(event) => {setPrice(event.target.value)}}
        value = { price }
      />
      <label htmlFor="">Go live</label>
      <input 
        required
        type="checkbox"
        name="active"
        onChange={(event) => {setActive(event.target.value)}}
        value = { active }
      />
      <label htmlFor="">Date</label>
      <input 
        required
        type="date"
        name="date"
        onChange={(event) => {setDate(event.target.value)}}
        value = { date }
      />
      <label htmlFor="">Time</label>
      <input 
        required
        type="time"
        name="time"
        onChange={(event) => {setTime(event.target.value)}}
        value = { time }
      />
      <input type="submit"></input>
      </form>
  )
}

export default CreatePromo;