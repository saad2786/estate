import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="h-[100px] max-md:h-[20vh] bg-gray-700 py-10 text-[10px] flex max-md:flex-col justify-between items-center px-5 text-slate-300">
        <div className=" space-x-2">
          <Link href='#home' className="hover:text-blue-300">Home</Link>
          <Link href='#about' className="hover:text-blue-300">About Us</Link>
          <Link href='#contact' className="hover:text-blue-300">Contact Us</Link>
        </div>
        <div>
          <Link href='#home'>
          <p className="hover:text-blue-300">Brand Name</p>
          </Link>
        </div>
        <div>
          <p>Copyright © 2025 Reiborn. All rights reserveds</p>
        </div>
      </footer>
  )
}
