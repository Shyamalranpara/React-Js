import React from 'react'
import SeriesData from '../Api/SeriesData.json'
const Method = () => {
  return (
    <div>
        {
          SeriesData.map((el)=>{
            return(
              <>
              
                <li key={el.id}>
                  <div>
                    <p><img src={el.img_url} alt="" width={"300px"}/></p>
                  <p>Name:{el.name}</p>
                  <p>Rating:{el.rating}</p>
                  </div>
                  </li>
              
              </>
            )
          })
        }
    </div>
  )
}

export default Method