import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { Button } from "@mui/material"
import { useNavigate } from 'react-router-dom'
const Possition = () => {
  let nav=useNavigate()
    let Logout=()=>{
        localStorage.clear()
        nav("/")
      }
  const [auth, setAuth] = React.useState(true);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  return (
      <div className='h-[100vh] w-[100%] bg-white font-serif'>
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <div className='h-[10%] flex justify-start items-center'>
            <div className='w-[75%] ml-10'><img src='https://octopi.health/static/media/logo.6fac51ee1861351c1d9a.jpg'></img></div>
            <div className='w-[25%]'>
                <Button variant="contained" onClick={Logout}>Logout</Button>   
            </div>
        </div>
        <div className='relative z-10 bg-white h-[60%] w-[75%] mx-auto mt-24 p-4 rounded-md'>
          <div className='flex h-[10%] w-[100%]'>
            <h1 className='text-[rgb(42,161,223)] font-bold text-xl'>Select Position</h1>
            <h1 className='text-[rgb(166,166,166)] ml-[800px] mt-2'>Left</h1>
            <Box sx={{ flexGrow: 1 }} >
              <FormGroup>
              <FormControlLabel
                control={
                <Switch
                checked={auth}
                onChange={handleChange}
                aria-label="login switch"
              />
              }
             />
            </FormGroup>
            </Box>
            <h1 className='text-[rgb(166,166,166)] mt-2 relative right-14'>Right</h1>
          </div>
          <div className='flex h-[60%] w-[100%] justify-evenly'>
            <div className='h-[300px] w-[250px] bg-black rounded-md overflow-hidden'>
              <img src="https://www.marattmd.com/learn/images/rehab/HamstringCurl1Export.jpg" alt="" className='w-full h-full object-cover'/>
            </div>
             <div className='h-[300px] w-[250px] bg-black rounded-md overflow-hidden'>
              <img src="https://www.marattmd.com/learn/images/rehab/SeatedKneeExtension1.jpg" alt="" className='w-full h-full object-cover'/>
            </div>
            <div className='h-[300px] w-[250px] bg-black rounded-md overflow-hidden'>
              <img src="https://www.marattmd.com/learn/images/rehab/SupineKneeHang1.jpg" alt="" className='w-full h-full object-cover'/>
            </div>
          </div>
          <div className='flex w-[100%] h-[10%]  mt-16 justify-evenly'>
              <div className='text-[rgb(166,166,166)] w-[250px]  text-center'>Standing</div>
              <div className='text-[rgb(166,166,166)] w-[250px]  text-center'>Sitting</div>
              <div className='text-[rgb(166,166,166)] w-[250px]  text-center'>Lying</div>
        </div>
        </div>        
    </div>
  )
}

export default Possition
