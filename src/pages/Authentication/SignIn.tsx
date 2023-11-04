import { useState,useEffect  } from "react";
import { Link, useNavigate  } from 'react-router-dom';
import Logo from '../../images/logo/logo.svg';
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import { Select, Option } from "@material-tailwind/react";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux'
import { signUpUser } from "../../services/redux/authSlice"
import { useSelector } from 'react-redux';

const SignIn = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English (UK)");
  const navigate = useNavigate();
  const token = useSelector((state: any) => state?.user?.token);

  useEffect(() => {
    if (token) {
     return navigate("/");
    }
  }, [token]);
  

  const dispatch: any = useDispatch()
  const handleChange = (event: any) => {
    setSelectedLanguage(event.target.value);
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Please enter a valid email address.'),
    password: Yup.string().required('Password is required'),
  });
  const handleSubmit = (values: any) => {
    // Handle form submission here
    console.log(values);
    dispatch(
      signUpUser({
        email: `${values?.email}`,
        password: `${values?.password}`,
      })
    );
  };
  return (
    <>
      <div className="rounded-sm border px-2 lg:px-8 border-stroke  bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap justify-center  h-[100vh]">


          <div className="w-full border-stroke justify-between dark:border-strokedark ">
            <div className='flex justify-between pt-[15px]'>
              <Link className="mb-2 inline-block" to="/">
                <img className="dark:hidden" src={Logo} alt="Logo" />
              </Link>
              <div className="w-72 class_custom">
                <Select className="rounded-[20px] px-[35px] bg-[#f0f5fa] border-none" value={selectedLanguage} onChange={handleChange}>
                  <Option value="English (UK)">English (UK)</Option>
                  <Option value="Bangla">Bangla</Option>
                </Select>
              </div>
            </div>
          </div>
          <div className="w-full border-stroke justify-between   dark:border-strokedark xl:w-6/12 ">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="text-2xl font-bold text-black text-center dark:text-white sm:text-title-xl2"> Sign In </h2>
              <span className="py-4 block font-medium text-center text-[#8A94A6] text-[18px]">Welcome back, you’ve been missed!</span>


              <div className="flex  lg:flex-row md:flex-row sm:flex-row flex-row mt-3">
                <div className="lg:w-6/12 md:w-6/12 mr-4 sm:w-6/12 xm:w-6/12   lg:mb-0 lg:mr-4" >
                  <div className="mb-6 flex  pt-[20px] pr-[25px] pb-[20px] pl-[28px] rounded-[61px] w-full items-center justify-center gap-2 border border-[#f0efef]   hover:cursor-pointer bg-[#F0F5FA] hover:bg-lightPrimary dark:bg-navy-800">
                    <div className="rounded-full text-xl">
                      <FcGoogle />
                    </div>
                    <h5 className="text-sm text-[18px] font-medium text-[#8A94A6] dark:text-white">
                      Sign In with Google
                    </h5>
                  </div>
                </div>
                <div className="lg:w-6/12 md:w-6/12 mr__4 sm:w-6/12  lg:mb-0 smoleDevice">
                  <div className="mb-6 flex w-full pt-[20px] pr-[25px] pb-[20px] pl-[28px] rounded-[61px] items-center justify-center gap-2 border border-[#f0efef] hover:cursor-pointer bg-[#F0F5FA] hover:bg-lightPrimary ">
                    <div className="rounded-full text-xl">
                      <DiApple />
                    </div>
                    <h5 className="text-sm text-[18px] font-medium text-[#8A94A6]  dark:text-white">
                      Sign In with Apple ID
                    </h5>
                  </div>
                </div>
              </div>



              <div className="mb-6 flex items-center  gap-3">
                <div className="h-px w-full bg-[#F0F5FA] dark:bg-navy-700" />
                <p className="text-[20px] text-[#B0B7C3] dark:text-white"> OR </p>
                <div className="h-px w-full  bg-[#F0F5FA] dark:bg-navy-700" />
              </div>


              <Formik
                initialValues={{
                  email: 'eve.holt@reqres.in',
                  password: 'pistol',
                  rememberMe: false,
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form className="justify-left">
                    <div className="mb-4 relative">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className={
                          'w-full rounded-[15px] mb-[10px] border ' +
                          (errors.email && touched.email ? 'border-red-500' : 'border-stroke') +
                          ' bg-transparent py-4 pl-12 pr-10 outline-none focus-border ' +
                          (errors.email && touched.email ? 'focus-border-red-500' : 'focus-border-primary') +
                          ' focus-visible:shadow-none dark:border-form-strokedark placeholder-[#B0B7C3] dark:bg-form-input dark:focus-border-primary'
                        }
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

                      <span className="absolute left-4 top-4 text-[20px] text-[#C5CBD3]">
                        @
                      </span>

                    </div>

                    <div className="mb-6">
                      <div className="relative">
                        <Field
                          type="password"
                          name="password"
                          placeholder="Password"
                          className={
                            'w-full rounded-[15px] mb-[10px] border ' +
                            (errors.password && touched.password ? 'border-red-500' : 'border-stroke') +
                            ' bg-transparent py-4 pl-12 pr-10 outline-none focus-border ' +
                            (errors.password && touched.password ? 'focus-border-red-500' : 'focus-border-primary') +
                            ' focus-visible:shadow-none dark:border-form-strokedark placeholder-[#B0B7C3] dark:bg-form-input dark:focus-border-primary'
                          }
                        />
                        <span className="absolute left-4 top-4 text-[20px] text-[#C5CBD3]">
                          <svg
                            className="fill-current"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.5">
                              <path
                                d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
                                fill=""
                              />
                              <path
                                d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                                fill=""
                              />
                            </g>
                          </svg>
                        </span>
                      </div>
                      <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center">
                        <Field
                          id="rememberMe"
                          type="checkbox"
                          name="rememberMe"
                          className="w-4 h-4 text-blue-600 bg-[#222] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700"
                        />
                        <label htmlFor="rememberMe" className="ml-2 text-sm font-medium text-[#B0B7C3] text-[18px]">
                          Remember Me
                        </label>
                      </div>
                    </div>

                    <div className="mb-5">
                      <button
                        type="submit"
                        className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                      >
                        Sign In
                      </button>
                    </div>

                    <div className="mt-6 text-center">
                      <p>
                        Don’t have an account?{' '}
                        <Link to="/auth/signup" className="text-primary">
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </Form>
                )}
              </Formik>










            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
