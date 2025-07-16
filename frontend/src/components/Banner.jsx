import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()
    const [currentMessage, setCurrentMessage] = useState(0)

    const messages = [
        {
            title: "Calming Environment",
            description: "Experience TMS therapy in our serene, relaxing treatment rooms designed for your comfort and peace of mind."
        },
        {
            title: "Healing starts here",
            subtitle: "The right answers the first time",
            description: "Effective treatment depends on getting the right diagnosis. Our experts diagnose and treat the toughest medical challenges."
        },
        {
            title: "Medical-free treatment",
            description: "Using transcranial magnetic stimulation (TMS). A medical and mental treatment breakthrough made possible by new technology advancements."
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessage((prev) => (prev + 1) % messages.length)
        }, 5000) // Change message every 5 seconds

        return () => clearInterval(interval)
    }, [messages.length])

    return (
        <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
            {/* ------- Left Side ------- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                    <p>{messages[currentMessage].title}</p>
                    {messages[currentMessage].subtitle && (
                        <p className='mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-blue-100'>
                            {messages[currentMessage].subtitle}
                        </p>
                    )}
                </div>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl text-blue-50 mt-4 max-w-2xl'>
                    {messages[currentMessage].description}
                </p>
                <button 
                    onClick={() => { navigate('/login'); scrollTo(0, 0) }} 
                    className='bg-white text-sm sm:text-base text-[#595959] px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'
                >
                    Create account
                </button>
                
                {/* Carousel Indicators */}
                <div className='flex gap-2 mt-6'>
                    {messages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentMessage(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                index === currentMessage 
                                    ? 'bg-white' 
                                    : 'bg-white/50 hover:bg-white/75'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* ------- Right Side ------- */}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
            </div>
        </div>
    )
}

export default Banner