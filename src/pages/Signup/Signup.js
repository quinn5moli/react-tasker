import { useState } from 'react'

// styles
import './Signup.css'

export default function Signup(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)

  return (
    <div className="auth-form">
        <h2>Sign Up</h2>
        <label>
          <span>email:</span>
          <input 
            required
            type="email" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input 
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <label>
          <span>display name:</span>
          <input 
            required
            type="password"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
        <label>
          <span>profile thumbnail:</span>
          <input 
            required
            type="file"
          />
        </label>
        <button className="btn">Sign Up</button>
    </div>
  )
}