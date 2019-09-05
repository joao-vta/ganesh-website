import React from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

const Fronts = () => (
  <React.Fragment>
    <Head
      title="Ganesh - Areas"
      description='Extracurricular group focused on information security.'
    />
    <Navbar />
    <main>
    <div className='flex justify-center items-center bg-fixed bg-cover bg-center container-top shadow-md'>
        <h1 className='text-4xl text-center text-white'>Areas</h1>
      </div>
      <div className='container mx-auto px-4 py-8'>
        <ul className='flex flex-row flex-wrap my-4'>
          <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
            <div className='rounded shadow-md bg-white mx-4'>
              <div className='border-gray-700 border-4 rounded-t h-64' />
              <div className='flex flex-col my-2 mx-4'>
                <span className='text-gray-800 text-lg'>Cryptography</span>
                <span className='text-gray-800 text-base'>DESCREVA AQUI</span>
              </div>
            </div>
          </li>
          <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
            <div className='rounded shadow-md bg-white mx-4'>
              <div className='border-gray-700 border-4 rounded-t h-64' />
              <div className='flex flex-col my-2 mx-4'>
                <span className='text-gray-800 text-lg'>Network Security</span>
                <span className='text-gray-800 text-base'>DESCREVA AQUI</span>
              </div>
            </div>
          </li>
          <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
            <div className='rounded shadow-md bg-white mx-4'>
              <div className='border-gray-700 border-4 rounded-t h-64' />
              <div className='flex flex-col my-2 mx-4'>
                <span className='text-gray-800 text-lg'>Privacy and GDPR</span>
                <span className='text-gray-800 text-base'>DESCREVA AQUI</span>
              </div>
            </div>
          </li>
          <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
            <div className='rounded shadow-md bg-white mx-4'>
              <div className='border-gray-700 border-4 rounded-t h-64 reversing'/>
              <div className='flex flex-col my-2 mx-4'>
                <span className='text-gray-800 text-lg'>Reverse Engineering</span>
                <span className='text-gray-800 text-base'>
                  This area studies assembly languages, computer architectures, reverse engineering techniques, malwares and low level linux systems.
                </span>
              </div>
            </div>
          </li>
          <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
            <div className='rounded shadow-md bg-white mx-4'>
              <div className='border-gray-700 border-4 rounded-t h-64' />
              <div className='flex flex-col my-2 mx-4'>
                <span className='text-gray-800 text-lg'>Web Security</span>
                <span className='text-gray-800 text-base'>DESCREVA AQUI</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .container-top {
          background-image: url(/static/images/bgfull.jpg);
          height: 250px;
        }
        .reversing {
          background-image: url(/static/images/rev.jpg);
          height: 200x;
        }
      `}</style>
    </main>
    <Footer />
  </React.Fragment>
);

export default Fronts;
