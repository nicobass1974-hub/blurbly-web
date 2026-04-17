'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setMsg(error? error.message : 'Logged in!')
  }

  return (
    <div>
      <h1>Blurbly Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }} />
        <button type="submit" style={{ padding: '10px 20px' }}>Login</button>
      </form>
      <p>{msg}</p>
      <p><a href="/signup">Need an account? Sign up</a></p>
    </div>
  )
}
