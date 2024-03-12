import axios from "axios"
import { useEffect, useState } from "react"

function Show() {
const[show,setShow]=useState([])

useEffect(()=>{
axios.get('http://localhost:5000/users').then(res=> setShow(res.show)).catch(err => console.log(err);)
},[])

  return (
   
  )
}

export default Show