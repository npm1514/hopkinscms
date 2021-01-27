import React from "react";
import { useState, useEffect } from 'react'


const DisplayPromo = () => {
  let [promos, setPromos] = useState([])
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
      setPromos(res)
      
    })
    
  }

  // When page renders it will call getPromos to access the DB
  console.log('ALL PROMOOOO', promos)
  useEffect(() => {
    getPromos();
  }, [])
 

  return (
    <>
        { promos.map((promo,index) => {
        return (
          <div> {promo.description}</div>
        )

        }) }
    </>
  )
}

export default DisplayPromo;