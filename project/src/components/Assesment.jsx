import React, { useEffect, useState } from 'react'
import { Button } from "@mui/material"
import { Link } from 'react-router-dom'
import { useNavigate , useParams} from 'react-router-dom'
import axios from 'axios'
const Assesment = () => {
    let [data,setData]=useState([])
    let nav=useNavigate()
    const id = useParams();
    let Logout=()=>{
        localStorage.clear()
        nav("/")
      }
    
      useEffect(()=>{
        axios.get(`http://localhost:333/user/${id.id}`)
        .then((res)=>{setData(res.data)
            console.log(res.data);
        })
        .catch(()=>{console.log("error");})
    },[id])
  return (
    <div className='h-[100vh] w-[100%] bg-white font-serif'>
        <div className='h-[10%] flex justify-start items-center'>
            <div className='w-[25%] ml-10'><img src='https://octopi.health/static/media/logo.6fac51ee1861351c1d9a.jpg'></img></div>
            <div className='w-[50%] text-center'><h1 className='text-[rgb(42,161,223)] font-bold text-2xl '>AROM Assesment</h1></div>
            <div className='w-[25%]'>
                <Button variant="contained" onClick={Logout}>Logout</Button>   
            </div>
        </div>
        <h1 className='text-[rgb(42,161,223)] ml-10 mt-3 text-xl'>Patient Name: {data.name}</h1>
        <div className='h-[40%] w-[100%] flex justify-evenly mt-3'>
            <div className='relative h-[350px] w-[330px] border-solid border-[rgb(42,161,223)] border-2 rounded-xl overflow-hidden'>
                <img src="https://liftersdigest.com/wp-content/uploads/2023/11/big-arm-workout-mistakes-to-avoid.jpg" className='w-full h-full object-cover' alt=""/>
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <h1 className='absolute top-0 left-0 p-2 text-white text-2xl font-bold'>Shoulder</h1>
             <Link to='/position'><div className='absolute bottom-[20px] h-[50px] w-[260px] left-[40px] p-2 border-[rgb(95,134,123)] border-2 border-solid rounded-xl text-white text-center cursor-pointer'>Start Assessment</div></Link>   
            </div>
            <div className=' relative h-[350px] w-[330px] border-solid border-[rgb(42,161,223)] border-2 rounded-xl overflow-hidden'>
                <img src="https://reliva.in/wp-content/uploads/2023/12/pc-sports-spec-arm-pain-768x512.webp" className='w-full h-full object-cover' alt="" />
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <h1 className='absolute top-0 left-0 p-2 text-white text-2xl font-bold'>Elbow</h1>
                <Link to='/position'><div className='absolute bottom-[20px] h-[50px] w-[260px] left-[40px] p-2 border-[rgb(95,134,123)] border-2 border-solid rounded-xl text-white text-center cursor-pointer'>Start Assessment</div></Link>
            </div>
            <div className='relative h-[350px] w-[330px] border-solid border-[rgb(42,161,223)] border-2 rounded-xl overflow-hidden'>
                <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/9c08c34e-891c-44f9-8373-04d4bbd2c5f0.__CR0,0,220,220_PT0_SX220_V1___.jpg" className='w-full h-full object-cover' alt="" />
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <h1 className='absolute top-0 left-0 p-2 text-white text-2xl font-bold'>Ankle</h1>
                <Link to='/position'><div className='absolute bottom-[20px] h-[50px] w-[260px] left-[40px] p-2 border-[rgb(95,134,123)] border-2 border-solid rounded-xl text-white text-center cursor-pointer'>Start Assessment</div></Link>
            </div>
            <div className='relative h-[350px] w-[330px] border-solid border-[rgb(42,161,223)] border-2 rounded-xl overflow-hidden'>
                <img src="https://lh3.googleusercontent.com/proxy/yDRbqoey4aUqhqHpf3tov6PuykKncZ4FoHFVKtBg6cQRMSHIyQ1xqvdCpwnuBxhcmgndSSUCtOcpKhTbP4jYa-JdgI9L8guSWRQ" className='w-full h-full object-cover' alt="" />
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <h1 className='absolute top-0 left-0 p-2 text-white text-2xl font-bold'>Hip</h1>
                <Link to='/position'><div className='absolute bottom-[20px] h-[50px] w-[260px] left-[40px] p-2 border-[rgb(95,134,123)] border-2 border-solid rounded-xl text-white text-center cursor-pointer'>Start Assessment</div></Link>
            </div>
            
        </div> 
        <div className='h-[40%] w-[100%] flex justify-evenly mt-20'>
            <div className='relative h-[350px] w-[330px] border-solid border-[rgb(42,161,223)] border-2 rounded-xl overflow-hidden'>
                <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/f32eaead-3e97-49ac-a0c8-b1c947515152.__CR0,0,220,220_PT0_SX220_V1___.png" className='w-full h-full object-cover' alt="" />
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <h1 className='absolute top-0 left-0 p-2 text-white text-2xl font-bold'>Knee</h1>
                <Link to='/position'><div className='absolute bottom-[20px] h-[50px] w-[260px] left-[40px] p-2 border-[rgb(95,134,123)] border-2 border-solid rounded-xl text-white text-center cursor-pointer'>Start Assessment</div></Link>
            </div>
            <div className='relative h-[350px] w-[330px] border-solid border-[rgb(42,161,223)] border-2 rounded-xl overflow-hidden'>
                <img src="https://files.namnak.com/size/180x110/bi/users/nh/aup/202106/2082.jpg" className='w-full h-full object-cover' alt="" />
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <h1 className='absolute top-0 left-0 p-2 text-white text-2xl font-bold'>Wrist</h1>
                <Link to='/position'><div className='absolute bottom-[20px] h-[50px] w-[260px] left-[40px] p-2 border-[rgb(95,134,123)] border-2 border-solid rounded-xl text-white text-center cursor-pointer'>Start Assessment</div></Link>
            </div>
            <div className='relative h-[350px] w-[330px] border-solid border-[rgb(42,161,223)] border-2 rounded-xl overflow-hidden'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZ1M_qKUt_6ti5_-kcnge3Rlam5g3YbIgNtbpGsOnZPFzFPRyqLMx62PlWKkargl3DGE&usqp=CAU" className='w-full h-50 object-cover' alt="" />
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <h1 className='absolute top-0 left-0 p-2 text-white text-2xl font-bold'>Hands</h1>
                <Link to='/position'><div className='absolute bottom-[20px] h-[50px] w-[260px] left-[40px] p-2 border-[rgb(95,134,123)] border-2 border-solid rounded-xl text-white text-center cursor-pointer'>Start Assessment</div></Link>
            </div>
                <div className='relative h-[350px] w-[330px] border-solid border-[rgb(42,161,223)] border-2 rounded-xl overflow-hidden'>
                    <img src="https://mednyur.ru/ru/wp-content/uploads/cherez-skolko-proxodyat-voldiri-ot-ozhoga-1.jpg" className='w-full h-full object-cover' alt="" />
                    <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                    <h1 className='absolute top-0 left-0 p-2 text-white text-2xl font-bold'>Toes</h1>
                    <Link to='/position'><div className='absolute bottom-[20px] h-[50px] w-[260px] left-[40px] p-2 border-[rgb(95,134,123)] border-2 border-solid rounded-xl text-white text-center cursor-pointer'>Start Assessment</div></Link>
                </div>
            
        </div> 
    </div> 
  )
}

export default Assesment
