import React from 'react';
import { getStoredCart } from '../../Utils/fakeDB';
import { Link, useLoaderData } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'


const AppliedJobs = () => {

    // let myData = JSON.parse(localStorage.getItem('myData'));

    // Update the content of your page with the data
    // let dataContainer = document.getElementById('data-container');
    // dataContainer.innerHTML = JSON.stringify(myData);
    const pData = useLoaderData()


    let cart = [];

    const savedCart = getStoredCart()
    for (const id in savedCart) {
        const foundProduct = pData.find(product => product.id === id)
        if (foundProduct) {
            cart.push(foundProduct)
        }
    }
    // console.log(cart);

    return (
        <div className='my-container'>
            {/* <h1>Applied job page{myData}</h1> */}
            <h1 className='text-5xl text-center'>Applied Jobs</h1>
            {
                cart.map(jobCart => (

                    <li key={jobCart.id} className='flex flex-col py-6 sm:flex-row sm:justify-between'>
                        <div className='flex w-full space-x-2 sm:space-x-4'>
                            <img
                                className='flex-shrink-0 object-cover w-40 h-25 border-transparent rounded outline-none sm:w-64 sm:h-40 '
                                src={jobCart.logo}
                                alt='Polaroid camera'
                            />
                            <div className='flex flex-col justify-between w-full pb-4'>
                                <div className='flex justify-between w-full pb-2 space-x-2'>
                                    <div className='space-y-1'>
                                        <h3 className='text-lg font-semibold leading-snug sm:pr-8'>
                                            {jobCart.title}
                                        </h3>
                                        <p className='text-sm text-gray-400'>{jobCart.name}</p>
                                        <div className='flex'>
                                            <span className='border px-2 py-1 rounded border-blue-700 hover:bg-blue-200 cursor-pointer me-2'>{jobCart.position1}</span>
                                            <span className='border px-2 py-1 rounded border-blue-700 hover:bg-blue-200 cursor-pointer'>{jobCart.position2}</span>
                                        </div>
                                        <div className='flex'>
                                            <span className='flex text-sm my-2 me-3'>
                                                <MapPinIcon className="h-5 w-5 text-gray-500  " />{jobCart.location}
                                            </span>
                                            <span className='flex text-sm my-2'>
                                                <CurrencyDollarIcon className="h-5 w-5 text-gray-500 " />{jobCart.salary}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='text-right'>
                                        <Link to={`/job/${jobCart.id}`} className='flex justify-center'>
                                            <span className='py-3 px-5  bg-blue-400 hover:bg-blue-700 rounded'>View Details</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>


                ))
            }
        </div>
    );
};

export default AppliedJobs;