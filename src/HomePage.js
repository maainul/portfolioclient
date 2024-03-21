import {ReactComponent as Logo} from "./img/logo.svg";
import {ReactComponent as HeroLeftImage} from "./img/illustration-intro.svg";
import React from "react";


export const HomePage =() => {
    return (
        <div>
           {/* Navigation*/}
            <section className="container mx-auto p-6 relative">
                {/*------------------Flex Container ---------*/}
                <div className="flex items-center justify-between">
                {/*------Logo ---*/}
                    <div className="pt-2">
                        <Logo className="cursor-pointer" />
                    </div>
                {/*------Menu Items -----*/}
                    <div className="hidden space-x-6 font-semibold md:flex">
                        <a href="#" className="hover:text-darkGrayishBlue">About</a>
                        <a href="#" className="hover:text-darkGrayishBlue">Education</a>
                        <a href="#" className="hover:text-darkGrayishBlue">Experience</a>
                        <a href="#" className="hover:text-darkGrayishBlue">Blog</a>
                    </div>
                {/*------Button-------*/}
                    <a className="hidden p-3 px-6 pt-2 text-white baseline bg-brightRed rounded-full font-semibold
                    hover:bg-brightRedLight cursor-pointer md:block">
                        Get Started
                    </a>
                {/*-----Hamburger Icon ------*/}

                </div>


            </section>

            {/*------ HERO SECTION -----------*/}
            <section id="hero">
                {/*---- FLEX CONTAINER ------------*/}
                <div
                    className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
                {/*----- LEFT ITEM --------*/}
                    <div className="flex flex-col mb-32 space-y-12 md:w-1/2 ">
                        {/*---- Hero Text ------*/}
                        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                            Bring everyone together to build better product
                        </h1>
                        {/*----Secondary Text ------*/}
                        <p className="text-darkGrayishBlue text-center max-w-sm md:text-left ">
                            Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger
                            team goals in view
                        </p>
                        {/*---- Button -----*/}
                        <div className="flex justify-center md:justify-start">
                            <a
                                href="#"
                                className="p-3 px-6 pt-2 text-white baseline bg-brightRed rounded-full font-semibold hover:bg-brightRedLight cursor-pointer md:block">
                                Get Started
                            </a>
                        </div>
                    </div>
                    {/*----- IMAGES --------*/}
                    <div className="">
                            <HeroLeftImage />
                    </div>
                </div>
            </section>

            {/*------- FEATURES SECTION -------*/}
            <section id="features">
                <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row" >
                    {/*---- Whats different -----*/}
                    <div className="flex flex-col space-y-12 md:w-1/2">
                        <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                            What's different about Manger ?
                        </h2>
                        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                            Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view
                        </p>
                    </div>
                    {/*---- Numbered List -----*/}
                    <div className="flex flex-col space-y-3 md:w-1/2">
                        <div className="flex flex-col space-x-6 md:space-y-0">
                            <div className="flex items-center space-x-2 bg-brightRedSupLight md:bg-transparent">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed font-bold">01
                                </div>
                                <h3 className="text-base font-bold">Track Company-wide Progress</h3>
                            </div>
                            <div className="px-8 py-2">
                                <p className="text-darkGrayishBlue">
                                    See how day-to-day tasks fit into the wider vision.Go from tracking progress at the
                                    milestone level all the way done to the smallest details.
                                    See how day-to-day tasks fit into the wider vision.Go from tracking progress at the
                                    milestone level all the way done to the smallest details
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col space-x-6 md:space-y-0 ">
                            <div className="flex items-center space-x-2 bg-brightRedSupLight md:bg-transparent">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed font-bold">02
                                </div>
                                <h3 className="text-base font-bold">Track Company-wide Progress</h3>
                            </div>
                            <div className="px-8 py-2">
                                <p className="text-darkGrayishBlue">
                                    See how day-to-day tasks fit into the wider vision.Go from tracking progress at the
                                    milestone level all the way done to the smallest details.
                                    See how day-to-day tasks fit into the wider vision.Go from tracking progress at the
                                    milestone level all the way done to the smallest details
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col space-x-6 md:space-y-0 ">
                            <div className="flex items-center space-x-2 bg-brightRedSupLight md:bg-transparent">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed font-bold">03
                                </div>
                                <h3 className="text-base font-bold">Track Company-wide Progress</h3>
                            </div>
                            <div className="px-8 py-2">
                                <p className="text-darkGrayishBlue">
                                    See how day-to-day tasks fit into the wider vision.Go from tracking progress at the
                                    milestone level all the way done to the smallest details.
                                    See how day-to-day tasks fit into the wider vision.Go from tracking progress at the
                                    milestone level all the way done to the smallest details
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*------- Testimonials SECTION -------*/}
            <section id="testimonials">
                <div className="container px-5 mx-auto mt-32 text-center">
                    <h2 className="text-4xl font-bold text-center">
                        What's Different About Manager
                    </h2>
                {/*----- Testimonials Container --------*/}
                    <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                    {/* -------------Testimonial 1---------------*/}
                        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:1/3">
                            <img className="w-16 h-16 rounded-full -mt-14"
                                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""/>
                            <h5 className="text-lg font-bold">Anisha Li</h5>
                            <p className="text-lg text-darkGrayishBlue">
                                "See how day-to-day tasks fit into the wider vision.
                                Go from tracking progress at the milestone level all the way done to the smallest details.
                                See how day-to-day tasks fit into the wider vision."
                            </p>
                        </div>

                        {/* -------------Testimonial 1---------------*/}
                        <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:1/3">
                            <img className="w-16 h-16 rounded-full -mt-14"
                                 src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                 alt=""/>
                            <h5 className="text-lg font-bold">Anisha Li</h5>
                            <p className="text-lg text-darkGrayishBlue">
                                "See how day-to-day tasks fit into the wider vision.
                                Go from tracking progress at the milestone level all the way done to the smallest details.
                                See how day-to-day tasks fit into the wider vision."
                            </p>
                        </div>

                        {/* -------------Testimonial 3---------------*/}
                        <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:1/3">
                            <img className="w-16 h-16 -mt-14 rounded-full"
                                 src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                 alt=""/>
                            <h5 className="text-lg font-bold">Anisha Li</h5>
                            <p className="text-lg text-darkGrayishBlue">
                                "See how day-to-day tasks fit into the wider vision.
                                Go from tracking progress at the milestone level all the way done to the smallest details.
                                See how day-to-day tasks fit into the wider vision."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/*------CTA SECTION -----------*/}
            <section id="cta" className="bg-brightRed mt-20">
            {/* --- Flex Container -----*/}
                <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0 ">
                {/*    ---- Heading -------*/}
                    <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left"> Simplify how your works today</h2>
                    {/*---- Button -----*/}
                    <div className="flex justify-center md:justify-start">
                        <a
                            href="#"
                            className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-100 font-bold">
                            Get Started
                        </a>
                    </div>
                </div>
            </section>


        </div>
    );
}

/*
 <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed font-bold">
                                        01
                                    </div>
                                    <h3 className="text-base font-bold md:mb-4 md:hidden">Track Company-wide
                                        Progress</h3>
                                </div>
                            </div>
                            <div>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">Track Company-wide Progress</h3>
                            </div>
                            <p className="text-darkGrayishBlue">
                                See how day-to-day tasks fit into the wider vision.Go from tracking progress at the
                                milestone level all the way done to the smallest details
                            </p>
 */