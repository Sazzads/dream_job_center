import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import JobDetails from '../JobDetails/JobDetails';


const Job = ({ job }) => {

    return (
        <div>
            <div className="border p-10 m-10">
                <img className='h-20 w-35 mb-3' src={job.logo} alt="" />
                <h3 className='font-bold mb-1'>{job.title}</h3>
                <p className='font-thin text-sm mb-1'>{job.name}</p>
                <div className='flex'>
                    <span className='border px-2 py-1 rounded border-blue-700 hover:bg-blue-200 cursor-pointer me-2'>{job.position1}</span>
                    <span className='border px-2 py-1 rounded border-blue-700 hover:bg-blue-200 cursor-pointer'>{job.position2}</span>
                </div>
                <div className='flex'>
                    <span className='flex text-sm my-2 me-3'>
                        <MapPinIcon className="h-5 w-5 text-gray-500  " />{job.location}
                    </span>
                    <span className='flex text-sm my-2'>
                        <CurrencyDollarIcon className="h-5 w-5 text-gray-500 " />{job.salary}
                    </span>
                </div>
                <div className='flex flex-col items-center md:flex-row'>
                    <Link to='/' className='btn md:w-auto md:mr-4'>
                        <div className='inline-flex  items-center justify-center w-full h-full'>
                            <p className='mr-3'>View Details</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;