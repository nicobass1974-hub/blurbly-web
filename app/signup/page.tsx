'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({ email, password })
    setMsg(error? error.message : 'Check your email to confirm!')
  }

  return (
    <div>
      <h1>Blurbly Sign Up</h1>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }} />
        <button type="submit" style={{ padding: '10px 20px' }}>Sign Up</button>
      </form>
      <p>{msg}</p>
      <p><a href="/login">Already have an account? Login</a></p>
    </div>
  )
}
