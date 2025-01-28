"use client"
import React from 'react'
import { HoverBorderButton } from '../buttons/hoverborderbutton'

export default function Nav() {
  return (
<nav className="fixed w-full top-0 z-30 bg-[#18181A] backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-700">
  <div className="max-w-7xl mx-auto px-4 text-white">
    <div className="flex items-center justify-between h-16">
      <span className="text-2xl  font-semibold">SelvKlip</span>
      <div className="flex space-x-4 ">
        <a href="#">About</a>
        <a href="#">What you&apos;ll learn</a>
        <a href="#">Reviews</a>
        <a href="#">FAQ</a>
      </div>
      <HoverBorderButton />
    </div>
  </div>
</nav>
  )
}
