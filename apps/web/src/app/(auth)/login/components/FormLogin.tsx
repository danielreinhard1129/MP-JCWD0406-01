import React from 'react';
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';
import { useAppDispatch } from '@/lib/hooks';
import { loginAction } from '@/lib/features/userSlice';
import { useFormik } from 'formik';
import { baseUrl } from '@/app/utils/database';

import * as yup from 'yup';
import YupPassword from 'yup-password';
import { Button, TextInput } from 'flowbite-react';
YupPassword(yup);

const validationSchema = yup.object().shape({
  email: yup.string().required('name Cannot be Empty').min(6),
  password: yup
    .string()
    .required('length Password minimum  8 character')
    .min(1),
});

const FormLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { email, password } = values;
        const { data } = await axios.post(`${baseUrl}/users/login`, {
          email,
          password,
        });
        console.log(data);

        dispatch(loginAction(data.data));
        console.log(data.data);

        localStorage.setItem('token', data.token);
        console.log(data.token);

        alert('login succes');
        router.push('/');
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

        <div className="items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <TextInput
            className="pl-2 outline-none border-none"
            type="text"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Email Address"
          />
          {formik.errors.email && formik.touched.email && (
            <div>{formik.errors.email}</div>
          )}
        </div>
        <div className=" items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <TextInput
            className="pl-2 outline-none border-none"
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
          />
          {formik.errors.password && formik.touched.password && (
            <div>{formik.errors.password}</div>
          )}
        </div>
        <Button
          type="submit"
          className="flex hover:transition-all  animate-bounce w-full bg-primary hover:bg-yellow-800 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
        >
          Login
        </Button>
        <span className="text-sm ml-2 hover:text-yellow-500 cursor-pointer">
          <a href="/forgot-password"> Forgot Password ?</a>
        </span>
      </form>
    </div>
  );
};

export default FormLogin;