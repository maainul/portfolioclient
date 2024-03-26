import React from 'react'
import { ReactComponent as LogoWhite } from "../img/logo-white.svg";
import { ReactComponent as FBImage } from "../img/icon-facebook.svg";
import { ReactComponent as YTImage } from "../img/icon-youtube.svg";
import { ReactComponent as TWImage } from "../img/icon-twitter.svg";
import { ReactComponent as PNTImage } from "../img/icon-pinterest.svg";
import { ReactComponent as INImage } from "../img/icon-instagram.svg";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer className="bg-veryDarkBlue">
                {/* Flex Container */}
                <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                    {/* Logo and social links */}
                    <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                        <div>
                            {/* Logo */}
                            <LogoWhite />
                        </div>
                        {/* Social Links */}
                        <div className=" flex justify-center space-x-4">
                            <FBImage />
                            <YTImage />
                            <TWImage />
                            <PNTImage />
                            <INImage />
                        </div>
                    </div>
                    {/*----------------Link Container-------------*/}
                    <div className="flex justify-around space-x-32">
                        <div className="flex flex-col space-y-3 text-white">
                            <Link to={"/about"} className="hover:text-darkGrayishBlue">About</Link>
                            <Link to={"/education"} className="hover:text-darkGrayishBlue">Education</Link>
                            <Link to={"/experience"} className="hover:text-darkGrayishBlue">Experience</Link>
                            <Link to={"/blog"} className="hover:text-darkGrayishBlue">Blog</Link>
                        </div>
                        <div className="flex flex-col space-y-3 text-white">
                            <Link to={"/about"} className="hover:text-darkGrayishBlue">About</Link>
                            <Link to={"/education"} className="hover:text-darkGrayishBlue">Education</Link>
                            <Link to={"/experience"} className="hover:text-darkGrayishBlue">Experience</Link>
                            <Link to={"/blog"} className="hover:text-darkGrayishBlue">Blog</Link>
                        </div>
                    </div>
                    {/* Input Container */}
                    <div className="flex flex-col justify-between">
                        <form className="flex space-x-3">
                            <input className="flex-1 px-4 rounded-full focus:outline-none" placeholder="Updated in your inbox" />

                            <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">Go</button>
                        </form>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
