import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Img_page() {
    const [img,setimg]=useState([])
    const params=useParams()
    useEffect(()=>{
        // fetch('https://dummyjson.com/products/1')
        fetch(`https://dummyjson.com/products/${params.id}`)
        .then(response=>response.json())
        .then(json=>setimg(json))
    })
  return (
    <>
        <img src={img.images} alt="" width={480} className='item_sec'/>
        {/* <h1>Title:{img.title}</h1> */}
    </>
  )
}

export default Img_page
