import React from 'react';
import Header from '../components/header';
import Footers from '../components/footers';
import slide from '../res/img/about.svg'
import { useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { company, name } from '../constants';

const About = () => {

    const navigate = useNavigate();

    function redirectContact() {
        navigate("/contact");
    }

    return (
        <div className='h-screen flex flex-col'>
            <Header isHome={false} className="sticky top-0 z-50" />
            <div className='dark:bg-black flex-1'>
                <div className='flex-1 flex flex-col items-center justify-center px-3'>
                    <h1 className="text-6xl font-black mt-14 max-md:text-3xl dark:text-white">About</h1>
                    <p className="text-center text-black mt-6 max-w-2xl font-medium max-md:text-xs dark:text-white">
                        Welcome to {name}!
                    </p>
                </div>
                <div className="px-7 max-md:px-3 justify-center items-center pb-10 dark:bg-black mt-14 ">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 h-full p-4 flex flex-col items-center md:items-start justify-center">
                            <h2 className="text-4xl font-black mb-2 max-md:text-2xl dark:text-white" >About Us</h2>
                            <p className="text-black mb-2 mt-2 max-md:text-center max-md:text-xs dark:text-white">
                                At {company}, we are dedicated to revolutionizing the way people learn. Our platform harnesses the power of AI to create customized courses tailored to your needs.
                            </p>
                        </div>
                        <div className="md:w-1/2 h-full">
                            <img
                                src={slide}
                                alt="Your Alt Text"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex flex-col items-center justify-center px-20 max-md:px-3'>
                    <h1 className="text-center text-4xl font-black mt-14 max-md:text-2xl dark:text-white">Our Mission</h1>
                    <p className="text-black mb-2 mt-8 text-center max-md:text-xs dark:text-white">
                    Our mission is to make education accessible and personalized for everyone. We aim to empower learners by providing high-quality, structured courses that cater to diverse interests and learning styles.
                    </p>
                </div>
                <div className='flex-1 flex flex-col items-center justify-center px-20 max-md:px-3'>
                    <h1 className="text-center text-4xl font-black mt-20 max-md:text-2xl dark:text-white">Join Us on the Learning Journey</h1>
                    <p className="text-black mb-2 mt-8 text-center max-md:text-xs dark:text-white">
                    Join us as we embark on an exciting learning journey! Whether you're looking to enhance your skills or explore new topics, Snap Courses is here to guide you every step of the way. Let’s learn together!
                    </p>
                    <Button onClick={redirectContact} className='max-w-xs my-10 items-center justify-center text-center border-black dark:border-white dark:bg-black dark:text-white bg-white text-black font-bold rounded-none w-full enabled:hover:bg-white enabled:focus:bg-white enabled:focus:ring-transparent dark:enabled:hover:bg-black dark:enabled:focus:bg-black dark:enabled:focus:ring-transparent'>Contact</Button>
                </div>
            </div>
            <Footers className="sticky bottom-0 z-50" />
        </div>
    );
};

export default About;
