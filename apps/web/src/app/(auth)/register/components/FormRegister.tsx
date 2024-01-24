import { baseUrl } from '@/app/utils/database';
import { useAppSelector } from '@/lib/hooks';
import axios, { AxiosError } from 'axios';
import { Button, Label, Select, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const validationSchema = yup.object().shape({
  first_name: yup.string().required('First Name is required'),
  last_name: yup.string().required('Last Name is required'),
  contact: yup.string().required('Address is required'),
  address: yup.string().required('Contact is required'),
  username: yup.string().required('username Cannot be Empty').min(6),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 8 characters'),
});



const FormRegister = () => {
  const router = useRouter();
  const selector = useAppSelector((state) => state.user)
  console.log(selector);


  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      contact: '',
      address: '',
      username: '',
      email: '',
      password: '',
      role: '',
      codeReferall: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        console.log(values);
        let roleId;
        if (values.role == 'admin') {
          roleId = 2;
        } else {
          roleId = 1;
        }

        await axios.post(`${baseUrl}/users/register`, {
          first_name: values.first_name,
          last_name: values.last_name,
          contact: values.contact,
          address: values.address,
          username: values.username,
          email: values.email,
          password: values.password,
          roleId,
          codeReferall: values.codeReferall,
        });
        toast.success('register succes');
        router.push('/login');
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data || error.message;
          alert(errorMsg);
        }
      }
    },
  });

  const handleReferral = async () => {
    try {
      if (!formik.values.codeReferall) {
        toast.error('code referal harus diisi')
        return
      }
      const data = await axios.post(`${baseUrl}/reward/check-referral`, {
        codeReferall: formik.values.codeReferall
      })
      toast.success(data.data.message);
    } catch (error: any) {
      alert(error.response.data.message);
    }

  }


  useEffect(() => {
    if (selector.roleId === 1) {
      router.push('/');
    }
    if (selector.roleId === 2) {
      router.push('/admin');
    }
  }, [selector]);
  return (
    <div className="justify-center p-10 md:p-10 items-center">
      <Toaster />
      <form onSubmit={formik.handleSubmit}>
        <h1 className="text-secondary font-bold text-2xl mb-1">
          Hello Eventerss!
        </h1>
        <p className="text-sm font-normal text-gray-600 mb-7">
          Register for join in Events
        </p>
        {/* ==== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className=" items-center border-2 py-2 px-3 rounded-2xl mb-4">
            {' '}
            <TextInput
              className="pl-2 outline-none border-none flex"
              type="text"
              name="first_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
              placeholder="First Name"
            />
            {formik.errors.first_name && formik.touched.first_name && (
              <div>
                <p>{formik.errors.first_name}</p>
              </div>
            )}
          </div>
          <div className=" items-center border-2 py-2 px-3 rounded-2xl mb-4">
            {' '}
            <TextInput
              className="pl-2 outline-none border-none flex"
              type="text"
              name="last_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
              placeholder="Last Name"
            />
            {formik.errors.last_name && formik.touched.last_name && (
              <div>{formik.errors.last_name}</div>
            )}
          </div>
        </div>
        {/* ==== */}
        <div className="grid grid-cols-1 items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <PhoneInput
            international
            defaultCountry="ID"
            value={formik.values.contact}
            onChange={(value) => formik.setFieldValue('contact', value)}
            onBlur={formik.handleBlur}
            id="contact"
            name="contact"
          />
          {formik.errors.contact && formik.touched.contact && (
            <div>{formik.errors.contact}</div>
          )}
        </div>

        {/* ==== */}
        <div className=" items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <TextInput
            className="pl-2 outline-none border-none flex"
            type="text"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            placeholder="Address"
          />
          {formik.errors.address && formik.touched.address && (
            <div>{formik.errors.address}</div>
          )}
        </div>
        {/* ==== */}
        <div className="items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <TextInput
            className="pl-2 outline-none border-none flex"
            type="text"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            placeholder="Username"
          />
          {formik.errors.username && formik.touched.username && (
            <div>{formik.errors.username}</div>
          )}
        </div>
        {/* ==== */}
        <div className="items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <TextInput
            className="pl-2 outline-none border-none flex"
            type="text"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Email Address"
          />
          {formik.errors.email && formik.touched.email && (
            <div>{formik.errors.email}</div>
          )}
        </div>
        {/* ==== */}
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
        {/* ==== */}
        <div className=" items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <TextInput
            className="pl-2 outline-none border-none"
            type="text"
            name="codeReferall"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.codeReferall}
            placeholder="Input your code Referall"
          />
          <Button className=' bg-primary m-3' onClick={handleReferral}>Cek Referral Code</Button>
        </div>
        {/* ==== */}
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="role" value="Eventerss as" />
            </div>
            <Select
              name="role"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.role}
            >
              <option value="user">Eventerss</option>
              <option value="admin">Admin Eventerss</option>
            </Select>
          </div>
        </div>
        <Button
          type="submit"
          className="flex hover:transition-all  animate-bounce w-full bg-primary hover:bg-yellow-800 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
        >
          Register
        </Button>
      </form >
    </div >
  );
};

export default FormRegister;
