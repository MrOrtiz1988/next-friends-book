import Link from 'next/link'

export default function Menu() {
    return (
      <div className='text-blue-700'>
        <Link href="/">Landing </Link>-
        <Link href="/home"> Home </Link>-
        <Link href="/about"> About</Link>
      </div>
    )
  }