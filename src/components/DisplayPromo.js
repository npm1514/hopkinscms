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

  function deletePromo(id){
    console.log('############', id)
    fetch(`/promotions/${id}`, {
     method: 'DELETE',
   }).then(id => {
    //  something here to redirect?
     promos.history.push('/promolist')
   })
 }

    useEffect(() => {
      getPromos();
    }, [])
  
    // find a way to add an ID into the data
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