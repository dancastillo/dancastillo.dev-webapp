import Link from 'next/link'
import React from 'react'
import { FaFloppyDisk } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <div className="navbar_container font-work-sans shaow-sm">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex items-center justify-center px-1">
          <FaFloppyDisk />
          <span className="pl-2 font-semibold">Dan Castillo</span>
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/contributions">
            <span>Contributions</span>
          </Link>
          <Link href="/blog">
            <span>Blog</span>
          </Link>
          <Link href="/contact">
            <span>Contact</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
