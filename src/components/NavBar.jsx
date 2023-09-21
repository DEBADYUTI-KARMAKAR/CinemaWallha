import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className='flex border items-center 
    py-4 pl-4 space-x-10
    '>
        <Link to={'/'}><img  src={logo} className='object-cover h-10 w-30'></img></Link>
        <Link to='/' className='font-bold text-blue-950
        text-xl
        '>Movies</Link>
        <Link to={'/Fevourites'} className='font-bold text-blue-950
        text-xl'>Fevourites</Link>
      
    </div>
  )
}

export default NavBar
