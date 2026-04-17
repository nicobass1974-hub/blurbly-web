import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Blurbly</h1>
      <p>Connect authors, influencers, and readers.</p>
      <p><Link href="/login">Login</Link> | <Link href="/signup">Sign Up</Link></p>
      <p><Link href="/terms">Terms</Link> | <Link href="/privacy">Privacy</Link> | <Link href="/refunds">Refunds</Link></p>
    </div>
  )
}
