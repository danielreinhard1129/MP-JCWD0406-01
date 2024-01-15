'use client'
import { Avatar, Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'
import Link from 'next/link'
import React, { useState } from 'react'


const NavBarComp = () => {
  const [user,promotor] = useState(true)
  return (
    <div className='sticky  '>
    <Navbar fluid className='container mx-auto max-w-7xl px-4'>
      <NavbarBrand as={Link} href='/'>
        <span className='self-center text-xl font-semibold'>
          logo
        </span>
      </NavbarBrand>
     {user ? ( <NavbarCollapse className=''>
        <div className='flex flex-wrap gap-5 items-center'>
        <NavbarLink href='' active className='text-[15px]'>
          <text className='text-[#416067]'>Home</text>
        </NavbarLink>
        <NavbarLink href='' active className='text-[15px]'>
          <text className='text-[#416067]'>Find Events</text>
        </NavbarLink>
        <NavbarLink href='' active className='text-[15px]'>
          <text className='text-[#416067]'>Create Events</text>
        </NavbarLink>
        <NavbarLink href='' active className='text-[15px]'>
          <text className='text-[#416067]'>Category</text>
        </NavbarLink>
        <hr className='divide-x border border-gray-950 h-[35px]'/>
        </div>
        <div className='flex flex-wrap'>
          <Avatar rounded/>
          <div className='ml-2'>
              <text className='text-[15px]'>username</text>
              <br />
              <text>user@gmail.com</text>
          </div>
        </div>
        </NavbarCollapse>
        ) : ( <NavbarCollapse className=''>
        <div className='flex flex-wrap gap-5 items-center'>
        <NavbarLink href='' active className='text-[15px]'>
          <text className='text-[#416067]'>Home</text>
        </NavbarLink>
        <NavbarLink href='' active className='text-[15px]'>
          <text className='text-[#416067]'>Find Events</text>
        </NavbarLink>
        <NavbarLink href='' active className='text-[15px]'>
          <text className='text-[#416067]'>Create Events</text>
        </NavbarLink>
        <NavbarLink href='' active className='text-[15px]'>
          <text className='text-[#416067]'>Category</text>
        </NavbarLink>
        <hr className='divide-x border border-gray-950 h-[35px]'/>
        <NavbarLink href='' active className='text-[15px]'>
          <text className='text-[#416067]'>Login</text>
        </NavbarLink>
        <NavbarLink href='' active className='text-[15px]'>
          <Button className='bg-[#4C3F3C] text-white'>Login</Button>
        </NavbarLink>
        </div>
      </NavbarCollapse>)}
    </Navbar>
    </div>
  )
}

export default NavBarComp