"use client"
import React from 'react'
import { HoverBorderButton } from '../buttons/hoverborderbutton'
import Link from 'next/link'

export default function Nav() {
  return (
<nav className="hidden md:block fixed w-full top-0 z-30 bg-[#18181A] backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-700">
  <div className="max-w-7xl mx-auto px-4 text-white">
    <div className="flex items-center justify-between h-16">
      <Link href="/#top" className="text-xl font-semibold">BecomeYourOwnBarber</Link>
      <div className="flex gap-8 ">
        <Link href="/#about">About</Link>
        <Link href="/#what-you-will-learn">What you&apos;ll learn</Link>
        <Link href="/#reviews">Reviews</Link>
        <Link href="/#faq">FAQ</Link>
        <Link href="/#contact">Contact</Link>
      </div>
      <HoverBorderButton />
    </div>
  </div>
</nav>
  )
}
