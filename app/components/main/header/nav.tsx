"use client"
import React from 'react'
import { HoverBorderButton } from '../buttons/hoverborderbutton'

export default function Nav() {
  return (
<nav className="hidden md:block fixed w-full top-0 z-30 bg-[#18181A] backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-700">
  <div className="max-w-7xl mx-auto px-4 text-white">
    <div className="flex items-center justify-between h-16">
      <span className="text-xl font-semibold">BecomeYourOwnBarber</span>
      <div className="flex gap-8 ">
        <a href="#">About</a>
        <a href="#">What you&apos;ll learn</a>
        <a href="#">Reviews</a>
        <a href="#">FAQ</a>
        <a href="#">Contact</a>
      </div>
      <HoverBorderButton />
    </div>
  </div>
</nav>
  )
}
