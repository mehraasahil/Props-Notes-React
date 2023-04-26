import React from 'react'
import axiox from 'axios'
import { useEffect } from 'react'
const Api = () => {
    useEffect(()=>{
        axiox.get('https://api.themoviedb.org/3/tv/top_rated?api_key=3ad96fdc72036f2fe4d7aa4074d78a95language=en-US&page=1')
        .then(({data})=>{
        console.log(data.results)
        })
    },[])
  return (
    <div>Api</div>
  )
}

export default Api