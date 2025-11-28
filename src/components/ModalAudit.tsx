'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { X } from 'lucide-react';

const ModalAudit = ({ onClose }: { onClose: () => void }) => {
  const validationSchema = Yup.object({
    fullName: Yup.string().required('This field is mandatory'),
    email: Yup.string()
      .email('Email is invalid')
      .required('This field is mandatory'),
    phone: Yup.string().required('This field is mandatory'),
    storeLink: Yup.string().required('This field is mandatory'),
    preferredAsin: Yup.string().required('This field is mandatory'),
    message: Yup.string().required('This field is mandatory'),
  });

  const handleSubmit = (values: {
    fullName: string;
    email: string;
    phone: string;
    storeLink: string;
    preferredAsin: string;
    message: string;
  }) => {
    console.log('Form submitted:', values);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-start  z-50">
      <div className="relative w-full max-w-xl xl:mx-50 md:mx-20 mx-8 bg-transparent py-12 text-white">
        <button
          onClick={onClose}
          className="fixed top-5 right-5 text-gray-400 hover:text-white"
        >
          <X size={44} />
        </button>

        <div className="text-left">
          <h2 className="text-5xl font-bold mb-2">Let’s talk!</h2>
          <p className="text-xl text-white mb-8">
            Fill out the following to get your project started
          </p>

          <Formik
            initialValues={{
              fullName: '',
              email: '',
              phone: '',
              storeLink: '',
              preferredAsin: '',
              message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="space-y-6">
                <div>
                  <Field
                    id="fullName"
                    name="fullName"
                    placeholder="Your full name*"
                    className="w-full bg-transparent border-b border-white text-white py-2 px-1 placeholder-white focus:outline-none"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address*"
                    className="w-full bg-transparent border-b border-white text-white py-2 px-1 placeholder-white focus:outline-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <Field
                    id="phone"
                    name="phone"
                    placeholder="Your phone number*"
                    className="w-full bg-transparent border-b border-white text-white py-2 px-1 placeholder-white focus:outline-none"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <Field
                    id="storeLink"
                    name="storeLink"
                    placeholder="Store Link*"
                    className="w-full bg-transparent border-b border-white text-white py-2 px-1 placeholder-white focus:outline-none"
                  />
                  <ErrorMessage
                    name="storeLink"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                    </div>
                    <div>
                        <Field  
                            id="preferredAsin"
                            name="preferredAsin"
                            placeholder="Preferred ASIN*"
                            className="w-full bg-transparent border-b border-white text-white py-2 px-1 placeholder-white focus:outline-none"
                        />
                        <ErrorMessage
                            name="preferredAsin"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>
                <div>
                  <Field
                    id="message"
                    name="message"
                    placeholder="Your message*"
                    className="w-full bg-transparent border-b border-white text-white py-2 px-1 placeholder-white focus:outline-none"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>


                <div className="flex justify-end">
                <button
  type="submit"
  className="bg-indigo-600 hover:bg-indigo-500 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 5l7 7-7 7"
    />
  </svg>
</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ModalAudit;
