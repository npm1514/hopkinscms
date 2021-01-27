import React from "react";
import { useState, useEffect } from 'react'
import { render } from "react-dom";


const DisplayPromo = () => {
  const [promos, setPromos] = useState([])

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
      console.log('JSON!!!!', res)
      setPromos(res)
    })
  }


  console.log('ALL PROMOOOO', promos)
  // When page renders it will call getPromos to access the DB
  useEffect(() => {
    getPromos();
  }, [])

    return (
      <div>
          { promos.map((promo, index) => {
            return (
              <div> { promo.description } </div>
            )
          })}
      </div>
    )
}

export default DisplayPromo;