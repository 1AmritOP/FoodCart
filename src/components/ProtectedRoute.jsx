
import { useSelector } from 'react-redux'
// import App from '../App';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({element}) => {
    const cartItem=useSelector((state)=> state.cart.value)
    
  return cartItem.length >0 ? element : <Navigate to={"/"} />
}

export default ProtectedRoute