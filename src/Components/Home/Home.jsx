import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import coverPic from '../../../src/assets/images/cover.png'
import Category from '../Category/Category';

const Home = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
                {/* Text Content */}
                <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                    <div className='max-w-xl mb-6 lg:mt-8'>

                        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                            The mind is its  own place, and in itself can make a{' '}
                            <span className=' text-blue-400'> heaven of hell,</span><span className='text-blue-400'> a hell of heaven.</span>
                        </h2>
                        <p className='text-base text-gray-700 md:text-lg'>
                            Explore career options. Follow your passion. Rise to your potential. Syracuse University’s programs connect you with leading scientists and scholars who can prepare you for the careers of today and tomorrow.
                        </p>
                    </div>
                    <div className='flex flex-col items-center md:flex-row'>
                        <Link to='/appliedJobs' className='btn md:w-auto md:mr-4'>
                            <div className='inline-flex items-center justify-center w-full h-full'>
                                <p className='mr-3'>Get Started</p>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* Lottie Animation */}
                <div className='relative lg:w-1/2 '>
                    <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
                        <img src={coverPic} alt="" />
                    </div>
                </div>


            </div>
            {/* job caragorys list started  */}
            <div className='my-container'>
                <div className=' flex flex-col items-center mb-6'>
                    <h1 className='text-3xl font-bold py-3'>Job Category Order</h1>
                    <p className='font-thin'>It takes just one job to develop a successful relationship that can propel your career forward.</p>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-4 '>
                    {
                        categories.map(category => <Category key={category.id} category={category}></Category>)
                    }
                </div>
            </div>

        </div>

    );
};

export default Home;