import React from 'react';
import '../index.css';
import bg from '../assets/bg-baking.jpg';
import logo from '../assets/logo-bakery.png';
import Fortune from '../assets/search-bakery.png';

const Hero = () => {
    return (
        <section id='home' className="w-full min-h-screen flex items-center justify-center bg-[#fefefe] pt-16 px-4">
            {/* logo */}
            <div className="absolute top-5 md:-top-7 left-1/2 transform -translate-x-1/2 z-80">
                <img
                    src={logo}
                    alt="Logo"
                    className="w-50 md:w-50 lg:w-60 aspect-square object-cover rounded-full brightness-100 contrast-100"
                />
            </div>

            {/* background */}
            <div className="w-full max-w-[1200px] md:rounded-[32px] rounded-none overflow-hidden bg-white relative mx-auto shadow-[40px_0_60px_-20px_rgba(0,0,0,0.1),-40px_0_60px_-20px_rgba(0,0,0,0.1)]">
                <div className="absolute inset-0 bg-white opacity-20 z-0 pointer-events-none"></div>
                <div
                    className="hero-bg w-full min-h-[670px] bg-no-repeat bg-center bg-[length:100%_100%] brightness-[1.15] contrast-90 relative z-0 h-[500px] md:h-[700px]"
                    style={{ backgroundImage: `url(${bg})` }}
                >
                    {/* Text */}
                    <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-50 w-[90%] max-w-xl px-4">
                        <h1
                            className="text-2xl md:text-4xl font-bold text-[#2a1a10] mb-4"
                            style={{
                                textShadow: '2px 2px 4px rgba(0,0,0,0.5), 0 0 10px rgba(42,26,16,0.3)',
                            }}
                        >
                            Search for the Taste You Love 🤎
                        </h1>
                    </div>

                    {/* Fortune Cookie Image */}
                    <div>
                        <img
                            src={Fortune}
                            alt="Fortune Cookie"
                            className="absolute top-1/2 left-1/2 
                                w-[400px] md:w-[550px] lg:w-[600px] 
                                transform -translate-x-1/2 -translate-y-[115%] md:-translate-y-[95%] 
                                z-80 drop-shadow-[0_8px_15px_rgba(0,0,0,0.7)] 
                                brightness-[0.9] contrast-[1] 
                                animate-fadeIn 
                                transition-transform duration-500 ease-in-out 
                                hover:scale-105 hover:-translate-y-[95%] md:hover:-translate-y-[80%]"
                        />

                        {/* Deskripsi dan CTA */}
                        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 text-center z-50 w-[80%] max-w-md px-2">
                            <p className="text-[#2a1a10] text-xs md:text-sm font-medium leading-relaxed">
                                From oven to heart crafted with love and passion. <br /> Taste the sweetness of life with every bite of our homemade delights. 🧁✨
                            </p>
                            <a
                                href="#product"
                                className="inline-block mt-4 bg-[#7b4a16] hover:bg-[#5c3611] text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
                            >
                                Browse Our Products
                            </a>
                        </div>

                        <style>
                            {`
                                @keyframes fadeIn {
                                    from { opacity: 0; transform: scale(0.95); }
                                    to { opacity: 1; transform: scale(1); }
                                }
                                .animate-fadeIn {
                                    animation: fadeIn 0.8s ease-out forwards;
                                }
                            `}
                        </style>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;