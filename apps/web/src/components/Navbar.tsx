'use client';
import { loginAction, logoutAction } from '@/lib/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
// import { loginAction, logoutAction } from '@/lib/features/userSlice';
import axios from 'axios';
import {
  Avatar,
  Button,
  Dropdown,
  Label,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  Select,
} from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const NavBarCom = () => {
  const user = useAppSelector((state) => state.user);

  const router = useRouter();
  const dispatch = useAppDispatch();

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
    <main>
      <div className="sticky  ">
        <Navbar fluid className="container mx-auto max-w-7xl px-4">
          <NavbarBrand as={Link} href="/">
            <span className="self-center text-xl font-semibold">logo</span>
          </NavbarBrand>
          {user.id ? (
            <NavbarCollapse className="">
              <div className="flex flex-wrap gap-5 items-center">
                <NavbarLink href="" active className="text-[15px]">
                  <text className="text-secondary">Home</text>
                </NavbarLink>
                <NavbarLink href="" active className="text-[15px]">
                  <text className="text-secondary">Find Events</text>
                </NavbarLink>
                <NavbarLink href="" active className="text-[15px]">
                  <text className="text-secondary">Create Events</text>
                </NavbarLink>
                <NavbarLink href="" active className="text-[15px]">
                  <text className="text-secondary">Category</text>
                </NavbarLink>
                <hr className="divide-x border border-gray-950 h-[35px]" />
              </div>
              <div className="flex flex-wrap">
                <Avatar rounded />
                <div className="ml-2">
                  <text className="text-[15px]">{user.username}</text>
                  <br />
                  <text>{user.email}</text>
                </div>
                <div className="ml-5 max-w-md bg-primary rounded-lg">
                  <Dropdown label={user.username} dismissOnClick={false}>
                    <Dropdown.Item href="/reset-password">
                      Reset Password
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>
                      Log Out
                    </Dropdown.Item>
                  </Dropdown>
                </div>
              </div>
            </NavbarCollapse>
          ) : (
            <NavbarCollapse className="">
              <div className="flex flex-wrap gap-5 items-center">
                <NavbarLink href="" active className="text-[15px]">
                  <text className="text-secondary">Home</text>
                </NavbarLink>
                <NavbarLink href="" active className="text-[15px]">
                  <text className="text-secondary">Find Events</text>
                </NavbarLink>
                <NavbarLink href="" active className="text-[15px]">
                  <text className="text-secondary">Create Events</text>
                </NavbarLink>
                <NavbarLink href="" active className="text-[15px]">
                  <text className="text-secondary">Category</text>
                </NavbarLink>
                <hr className="divide-x border border-gray-950 h-[35px]" />

                <NavbarLink href="/login" active className="text-[15px]">
                  <Button className="bg-primary text-white">Login</Button>
                </NavbarLink>
                <NavbarLink
                  href="/register"
                  active
                  className="text-[15px] mx-5"
                >
                  <Button className="bg-primary text-white">Register</Button>
                </NavbarLink>
              </div>
            </NavbarCollapse>
          )}
        </Navbar>
      </div>
    </main>
  );
};
