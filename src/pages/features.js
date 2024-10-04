import React from 'react';
import Header from '../components/header';
import Footers from '../components/footers';
import { Card } from 'flowbite-react';
import { IoIosTimer } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { PiVideo } from "react-icons/pi";

const Features = () => {

    const cardsFeatures = [
        {
            id: 1,
            title: 'Input Topics Easily',
            description: 'Quickly add your main topics and subtopics through a user-friendly interface.',
        },
        {
            id: 2,
            title: 'Select Course Format',
            description: 'Opt for either Theory + Images or Theory + Videos for a tailored educational experience.',
        },
        {
            id: 3,
            title: 'AI Course Creation',
            description: 'Leverage cutting-edge AI technology to produce detailed and engaging courses based on your inputs.',
        },
        {
            id: 4,
            title: 'Adaptable Learning Options',
            description: 'Support various learning preferences with a mix of visual, auditory, and textual resources.',
        },
        {
            id: 5,
            title: 'Custom Course Path',
            description: 'Get a personalized course outline crafted to match your unique learning goals.',
        },
        {
            id: 6,
            title: 'Preview Your Course',
            description: 'Review a live preview of your course content before final approval and download.',
        },
    ];    

    const cardsWork = [
        {
            id: 1,
            title: 'Input Your Topics',
            description: 'Start your course creation by entering your chosen topics along with any relevant subtopics.',
        },
        {
            id: 2,
            title: 'Select Your Preferences',
            description: 'Pick between Theory + Images or Theory + Videos to tailor your learning experience.',
        },
        {
            id: 3,
            title: 'AI Course Generation',
            description: 'Observe how our AI transforms your inputs into a customized course tailored for you.',
        }
    ];
    
    const cardBenefit = [
        {
            id: 1,
            title: 'Save Time',
            description: 'Eliminate hours of manual planning with our instant course creation feature.',
            icon: <IoIosTimer className="text-xl max-md:text-lg dark:text-white" />
        },
        {
            id: 2,
            title: 'Quality AI Materials',
            description: 'Receive top-notch content through AI-driven suggestions and enhancements.',
            icon: <BsSearch className="text-xl max-md:text-lg dark:text-white" />
        },
        {
            id: 3,
            title: 'Engaging Learning Experience',
            description: 'Keep learners engaged with a variety of media formats to enhance understanding.',
            icon: <PiVideo className="text-xl max-md:text-lg dark:text-white" />
        }
    ];
    
    const style = {
        "root": {
            "base": "max-w-sm flex rounded-none border border-black bg-white shadow-none dark:border-white dark:bg-black m-4",
            "children": "flex h-full flex-col justify-center gap-3 p-5",
            "horizontal": {
                "off": "flex-col",
                "on": "flex-col md:max-w-xl md:flex-row"
            },
            "href": "hover:bg-white dark:hover:bg-black"
        },
        "img": {
            "base": "",
            "horizontal": {
                "off": "rounded-none",
                "on": "h-96 w-full rounded-none object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            }

        }
    }

    const styleTwo = {
        "root": {
            "base": "max-w-sm flex rounded-none  bg-white shadow-none dark:bg-black m-4",
            "children": "flex h-full flex-col justify-center gap-3 p-5",
            "horizontal": {
                "off": "flex-col",
                "on": "flex-col md:max-w-xl md:flex-row"
            },
            "href": "hover:bg-white dark:hover:bg-black"
        },
        "img": {
            "base": "",
            "horizontal": {
                "off": "rounded-none",
                "on": "h-96 w-full rounded-none object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            }

        }
    }

    return (
        <div className='h-screen flex flex-col'>
            <Header isHome={false} className="sticky top-0 z-50" />
            <div className='dark:bg-black flex-1'>
                <div className='flex-1 flex flex-col items-center justify-center'>
                    <h1 className="text-6xl font-black mt-14 max-md:text-3xl dark:text-white">Features</h1>
                    <p className="text-center text-black mt-6 max-w-2xl font-medium max-md:text-xs dark:text-white">
                        Craft your courses Instantly
                    </p>
                    <div className='mt-16 flex flex-wrap items-center justify-center'>
                        {cardsFeatures.map((card) => (
                            <Card key={card.id} theme={style}>
                                <h5 className='text-xl font-black tracking-tight text-black dark:text-white'>
                                    {card.title}
                                </h5>
                                <p className='font-normal text-sm text-black dark:text-white'>{card.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className='flex-1 flex flex-col items-center justify-center'>
                    <h1 className="text-4xl font-black mt-14 max-md:text-2xl dark:text-white">Benefits</h1>
                    <div className='mt-16 flex flex-wrap items-center justify-center'>
                        {cardBenefit.map((card) => (
                            <Card key={card.id} theme={style}>
                                {card.icon}
                                <h5 className='text-xl font-black tracking-tight text-black dark:text-white'>
                                    {card.title}
                                </h5>
                                <p className='font-normal text-sm text-black dark:text-white'>{card.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className='flex-1 flex flex-col items-center justify-center'>
                    <h1 className="text-4xl font-black mt-14 max-md:text-2xl dark:text-white">How It Works</h1>
                    <div className='my-16 flex flex-wrap items-center justify-center'>
                        {cardsWork.map((card) => (
                            <Card key={card.id} theme={styleTwo}>
                                <p className='text-black dark:text-white'>{card.id}</p>
                                <h5 className='text-xl font-black tracking-tight text-black dark:text-white'>
                                    {card.title}
                                </h5>
                                <p className='font-normal text-sm text-black dark:text-white'>{card.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
            <Footers className="sticky bottom-0 z-50" />
        </div>
    );
};

export default Features;
