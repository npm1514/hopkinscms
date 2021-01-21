import React from "react";
import { useState } from 'react'

function newPromo() {

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

  return (
    <form onSubmit={ handleSubmit }>
      
    </form>
  )
}