import React from "react";
import { useState, useEffect } from 'react'


const DisplayPromo = () => {
  const [promos, setPromos] = useState([])
  console.log('************', promos)

  const getPromos = () => {
      fetch('/promotions', {
      method:'GET',
      // headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify(body)
      }).then(res => {
      if( res.status != 200){
        return {
          message: 'bad request'
        }
      } else {
        return res.json()
      }
    }).then(res => {
      console.log('JSON!!!', res)
      const allPromos = res
      for (let i = 0; i < allPromos.length; i++){
        console.log(allPromos[i])
        promos.push(allPromos[i])
      }

      setPromos(promos)
      console.log(promos[1])
    })
    
  }

  // When page renders it will call getPromos to access the DB
  console.log('ALL PROMOOOO', promos)
  useEffect(() => {
    getPromos();
  }, [])
 

  return (
    <>
        { promos.description }
    </>
  )
}

export default DisplayPromo;