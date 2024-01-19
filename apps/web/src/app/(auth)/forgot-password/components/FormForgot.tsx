import React from 'react';
import { baseUrl } from '@/app/utils/database';
import axios, { AxiosError } from 'axios';
import { Button, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';

const FormForgot = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: async (values) => {
      // TODO: Implement forgot password functionality.
      try {
        const { email } = values;

        console.log(values);

        const { data } = await axios.post(`${baseUrl}/users/forgot`, {
          email,
        });
        console.log(data);

        alert('Forgot succes, Please Check your email');
        // router.push('/login');
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
          Input your Email Eventerss
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
        </div>

        <Button
          type="submit"
          className="flex hover:transition-all  animate-bounce w-full bg-primary hover:bg-yellow-800 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
        >
          Forgot Password
        </Button>
      </form>
    </div>
  );
};

export default FormForgot;
