import React, { useState } from 'react'
import { Button,TextField,Alert,Box } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  let [name,setName]=useState("")
  let [password,setPassword]=useState("")
  let nav=useNavigate()
  let [error, setError] = useState(null)
  let formHandle=(e)=>{
    e.preventDefault()
    let payload={name,password}
    axios.post("http://localhost:333/login",payload)
    .then((res)=>{
      if(res.data.status=="success"){
        localStorage.setItem("login",true)
        nav(`/assesment/${res.data.userId}`);
      }
      else if(res.data=="failure"){
        console.log("incorrect password");
        setError("Incorrect password");
      }
      else if(res.data=="wrong userName"){
        console.log("wrong userName");
        setError("Wrong username");
      }
    })
    .catch(()=>{console.log("error");
      setError("An error occurred. Please try again.")
    })

  }
  return (
    <div className='h-[100vh] w-[100%] bg-black flex justify-center items-center'>
      <form action="" className='h-[35%] w-[25%] bg-white flex flex-col items-center justify-evenly rounded-xl'>
         <h1>Login</h1>
        <TextField size='small' id="outlined-basic" label="UserName" variant="outlined" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <TextField size='small'  id="outlined-basic" label="Password" type='password' variant="outlined" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <h1>New user? <Link to='/register' className='text-blue-400 underline'>register</Link></h1>
        <Button variant="contained" onClick={formHandle}>Submit</Button>
        </form>
        {error && (
        <Alert severity="error" className="absolute bottom-10">
          {error}
        </Alert>
      )}
    </div>
  )
}

export default Login
