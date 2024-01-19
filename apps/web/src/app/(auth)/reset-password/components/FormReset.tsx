import React from 'react';
import { baseUrl } from '@/app/utils/database';
import axios, { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button, TextInput } from 'flowbite-react';

const FormReset = () => {
  const router = useRouter();
  const searchToken = useSearchParams();
  const token = searchToken.get('token');
  console.log(token);

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    onSubmit: async (values) => {
      try {
        const { password, confirmPassword } = values;
        console.log(values);

        const { data } = await axios.patch(
          `${baseUrl}/users/reset`,
          {
            password,
            confirmPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        console.log(data);

        alert('reset succes');
        router.push('/login');
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data || error.message;
          alert(errorMsg);
        }
      }
    },
  });
  return (
    <div className=" justify-center p-10 items-center">
      <form
        className="flex  flex-w-full flex-col"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-secondary font-bold text-2xl mb-1">
          Hello Eventerss!
        </h1>
        <p className="text-sm font-normal text-gray-600 mb-7">
          Welcome Back in Events
        </p>

        <div className=" items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <TextInput
            className="pl-2 outline-none border-none"
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Password"
          />
        </div>
        <div className=" items-center border-2 py-2 px-3 rounded-2xl">
          <TextInput
            className="pl-2 outline-none border-none"
            type="password"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Confirm Password"
          />
        </div>
        <Button
          type="submit"
          className="flex hover:transition-all  animate-bounce w-full bg-primary hover:bg-yellow-800 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
        >
          Reset Password
        </Button>
      </form>
    </div>
  );
};

export default FormReset;
