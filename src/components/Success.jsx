import  { useEffect, useState  } from 'react'
import {PacmanLoader } from "react-spinners"

const Success = () => {
    const [loading, setloading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 3500);
    }, [])
    
  return (
    <>
        <div className=' w-full h-screen flex justify-center items-center'>
            {
                loading ? <PacmanLoader color='#36D7B7' /> :
            <div className="text">
                <h1 className=' text-center font-bold text-3xl text-green-400'>Order Successful!</h1>
                <p className=' text-center text-xl max-sm:text-sm'>Your order have been Successful placed</p>
            </div>
            }
        </div>
    </>
  )
}

export default Success