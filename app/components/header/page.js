'use client'

import React, { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"


export default function Header() {
    const [isOpen, setisOpen] = useState<Boolean>(false)

  function handleBurger() {
      setisOpen(!isOpen)
  }
    return (
        <div className="flex flex-row justify-between px-10 py-4 pt-8">
          <strong>MARCHILLION</strong>
          <ul className="sm:flex flex-row gap-4 text-sm text-sky-600 hidden">
            <li>Home</li>
            <li>Pricing</li>
            <li>Rent Hotel</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <GiHamburgerMenu className="sm:hidden cursor-pointer" onClick={handleBurger} />
        </div>
    )
}