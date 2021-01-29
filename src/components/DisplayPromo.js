import React from "react";
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import { render } from "react-dom";


const DisplayPromo = (props) => {
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
  
  function deletePromo(id){
    console.log('############', id)
    fetch(`/promotions/${id}`, {
     method: 'DELETE',
   }).then((deletedPromo) => {
    console.log('###################', deletedPromo)
    props.history.push('/promolist')
   })
  }

  useEffect(() => {
    getPromos();
  }, [])

  return (
    <div>
        { promos.map((promo, index) => {
          return (
            <div key={promo._id}>{ promo.description } 
            <button type="submit" onClick={() => deletePromo(promo._id)} >Delete</button>
            </div>
            
          )
        })}
    </div>
  )
}

  


 
export default DisplayPromo;