'use client';
import { loginAction, logoutAction } from '@/lib/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import axios from 'axios';
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink
} from 'flowbite-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const NavBarComp = () => {
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()



  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logoutAction());
  };


  const baseUrl = 'http://localhost:8000/api';

  useEffect(() => {
    const token = localStorage.getItem('token');
    const keepLogin = async () => {
      try {
        const { data } = await axios.get(baseUrl + `/users/keep`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(loginAction(data.data));
      } catch (error) {
        console.log(error);
      }
    };
    keepLogin();
  }, []);

  return (
    <div className="sticky ">
      <Navbar fluid className="container mx-auto max-w-7xl px-4">
        <NavbarBrand as={Link} href="/">
          <span className="self-center text-xl font-semibold">logo</span>
        </NavbarBrand>
        {user.id ? (
          <NavbarCollapse className="">
            <div className="flex flex-wrap gap-5 items-center">
              <NavbarLink href="/" active className="text-[15px]">
                <text className="text-[#416067]">Home</text>
              </NavbarLink>
              <NavbarLink href="" active className="text-[15px]">
                <text className="text-[#416067]">Find Events</text>
              </NavbarLink>
              <NavbarLink href="/addevent" active className="text-[15px]">
                <text className="text-[#416067]">Create Events</text>
              </NavbarLink>
              <div className="text-[15px]">
                <Dropdown
                  label=""
                  dismissOnClick={false}
                  renderTrigger={() => (
                    <div className="flex flex-wrap">
                      <text className="text-black">category</text>
                      <RiArrowDropDownLine size={20} />
                    </div>
                  )}
                >
                  <DropdownItem className="w-[100px]">music</DropdownItem>
                  <DropdownItem>music</DropdownItem>
                  <DropdownItem>music</DropdownItem>
                </Dropdown>
              </div>
              <hr className="divide-x border border-gray-950 h-[35px]" />
            </div>
            <Dropdown
              label=""
              className='bg-primary'
              dismissOnClick={false}
              renderTrigger={() => (
                <div className="flex flex-wrap">
                  <Avatar rounded />
                  <div className="ml-2">
                    <text className="text-[15px]">{user.username}</text>
                    <br />
                    <text>{user.email}</text>
                  </div>
                </div>
              )}
            >
              <DropdownItem href='/profile' className='text-white '>Profile</DropdownItem>
              <DropdownItem href='/reset-password' className='text-white '>Reset Password</DropdownItem>
              <DropdownItem onClick={handleLogout} className='text-white border '>Logout</DropdownItem>
            </Dropdown>
          </NavbarCollapse>
        ) : (
          <NavbarCollapse className="">
            <div className="flex flex-wrap gap-5 items-center">
              <NavbarLink href="" active className="text-[15px]">
                <text className="text-[#416067]">Home</text>
              </NavbarLink>
              <NavbarLink href="" active className="text-[15px]">
                <text className="text-[#416067]">Find Events</text>
              </NavbarLink>
              <NavbarLink href="" active className="text-[15px]">
                <text className="text-[#416067]">Create Events</text>
              </NavbarLink>
              <NavbarLink href="" active className="text-[15px]">
                <text className="text-[#416067]">Category</text>
              </NavbarLink>
              <hr className="divide-x border border-gray-950 h-[35px]" />
              <NavbarLink href="/login" active className="text-[15px]">
                <text className="text-[#416067]" >Login</text>
              </NavbarLink>
              <NavbarLink href="/register" active className="text-[15px]">
                <Button className="bg-[#4C3F3C] " >Register</Button>
              </NavbarLink>
            </div>
          </NavbarCollapse>
        )}
      </Navbar>
    </div>
  );
};

export default NavBarComp;
