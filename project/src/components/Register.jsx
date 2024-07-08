import React, { useState } from 'react'
import { Button,TextField , Snackbar,Alert as MuiAlert} from "@mui/material"
import { Link } from 'react-router-dom'
import axios from "axios"
const Register = () => {
    let [name,setName]=useState("")
    let [email,setEmail]=useState("")
    let [Password,setPassword]=useState("")
    let [error, setError] = useState("");
    let [open, setOpen] = useState(false);
    let formHandle=(e)=>{
      e.preventDefault()
      if (!name || !email || !Password) {
        setError('All fields are required');
        console.log("All fields are required");
        setOpen(true);
        return;
      }
      let payload={name,email,Password}
      axios.post("http://localhost:333/register",payload)
      .then((res)=>{
        console.log(res);
        setName("")
        setEmail("")
        setPassword("")
        if(res.data=='user already is there'){
          setError('user already is there')
          setOpen(true)
        }
        else{
          setOpen(false)
        }
      })
      .catch(()=>{console.log("error");
        setError('Please try again');
        setOpen(true)
      })

      
    }
  return (
      <div className='h-[100vh] w-[100%] bg-black flex justify-center items-center '>
        <form action="" className='h-[45%] w-[25%] bg-white flex flex-col items-center justify-evenly rounded-xl'>
            <h1>REGISTER</h1>
            <TextField size='small' id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <TextField size='small' id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <TextField size='small'  id="outlined-basic" label="Password" type='password' variant="outlined" value={Password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <h1>already a user? <Link to='/' className='text-blue-400 underline'>Login</Link></h1>
            <Button variant="contained" onClick={formHandle}>Register</Button>
        </form>
        <Snackbar open={open} autoHideDuration={6000}>
        <MuiAlert severity="error" sx={{ width: '100%' }}>
          {error}
        </MuiAlert>
      </Snackbar>
    </div>
  )
}

export default Register
