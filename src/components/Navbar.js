import { Link } from 'react-router-dom'

// styles & images
import './Navbar.css'
import Temple from '../assets/temple.svg'



export default function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            <li className='logo'>
                <img src={Temple} alt="tasker logo" />
                    <span>Tasker</span>
            </li>

            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li>
                <button className='btn'>Logout</button>
            </li>
        </ul>
    </div>
  )
}
