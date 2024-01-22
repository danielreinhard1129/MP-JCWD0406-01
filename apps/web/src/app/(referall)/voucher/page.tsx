'use client'

import React, { useState } from 'react'
import VoucherAdd from './components/Voucher'
import { baseUrl } from '@/app/utils/database';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';

const VoucherPage = () => {
  const router = useRouter()
  const [userId, setUser] = useState();
  const [eventId, setEvent] = useState();
  const [nameVoucher, setVoucher] = useState();
  const [discountPercentage, setDicount] = useState();


  const handleSubmit = async () => {
    try {
      await axios.post(`${baseUrl}/users/voucher`, {
        userId: Number(userId), eventId, nameVoucher, discountPercentage
      });
      alert('register succes');
      router.push('/voucher');
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data || error.message;
        alert(errorMsg);
      }
    }
  }

  return (
    <div className='flex flex-col justify-center m-10'>
      <h1>Create Voucher</h1>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput id="email2" type="number" placeholder="name@flowbite.com" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput id="password2" type="password" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput id="repeat-password" type="password" required shadow />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
              terms and conditions
            </Link>
          </Label>
        </div>
        <Button type="submit">Register new account</Button>
      </form>
    </div>
  )
}

export default VoucherPage