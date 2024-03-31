import React from 'react'
import { ReactComponent as CSSIcon } from "../img/icons8-css3.svg";
import { ReactComponent as TailwindIcon } from "../img/icons8-tailwindcss.svg";
import { ReactComponent as JSIcon } from "../img/icons8-javascript.svg";
import { ReactComponent as ReactIcon } from "../img/icons8-react-native.svg";
import { ReactComponent as Logo } from "../img/logo.svg";
import { Link } from 'react-router-dom';
import { ReactComponent as HTMLIcon } from "../img/icons8-html-5.svg";

const BlogSidebar = () => {
    return (
        <div>
            {/* Left Side */}
            <section className='hidden md:block md:w-64 lg:w-72 text-sm bg-white p-8 space-y-6 h-full'>
                <div>
                    <Logo />
                </div>
                <div className=''>
                    <div className='font-semibold uppercase'>Frontend</div>
                    <div className='flex flex-col space-y-0 ml-8 uppercase'>
                        <Link className='flex items-center hover:bg-brightRedSupLight mt-1'><HTMLIcon className='w-6 mr-2' /><span className='text-sm'>HTML</span></Link>
                        <Link className='flex items-center hover:bg-brightRedSupLight'><CSSIcon className='w-6 mr-2' /> CSS</Link>
                        <Link className='flex items-center hover:bg-brightRedSupLight'><TailwindIcon className='w-6 mr-2' /> Tailwindcss</Link>
                        <Link className='flex items-center hover:bg-brightRedSupLight'><JSIcon className='w-6 mr-2' /> Javascript</Link>
                        <Link className='flex items-center hover:bg-brightRedSupLight'><ReactIcon className='w-6 mr-2' /> React</Link>
                    </div>
                </div>
                <div className=''>
                    <div className='font-semibold uppercase'>Backend</div>
                    <div className='flex flex-col space-y-0 ml-8 uppercase'>
                        <Link className='flex items-center hover:bg-brightRedSupLight mt-1'><HTMLIcon className='w-6 mr-2' />HTML</Link>
                        <Link className='flex items-center hover:bg-brightRedSupLight'><CSSIcon className='w-6 mr-2' /> CSS</Link>
                        <Link className='flex items-center hover:bg-brightRedSupLight'><TailwindIcon className='w-6 mr-2' /> Tailwindcss</Link>
                        <Link className='flex items-center hover:bg-brightRedSupLight'><JSIcon className='w-6 mr-2' /> Javascript</Link>
                        <Link className='flex items-center hover:bg-brightRedSupLight'><ReactIcon className='w-6 mr-2' /> React</Link>
                    </div>
                </div>
                <div className=''>
                    <div className='font-semibold uppercase'>Backend</div>
                    <div className='flex flex-col space-y-0 ml-8 uppercase'>
                        <Link className='flex items-center hover:bg-brightRedSupLight mt-1'><HTMLIcon className='w-6 mr-2' />HTML</Link>
                        <Link className='flex items-center hover:bg-brightRedSupLight'><CSSIcon className='w-6 mr-2' /> CSS</Link>
                        <Link className='flex items-center hover:bg-brightRedSupLight'><TailwindIcon className='w-6 mr-2' /> Tailwindcss</Link>
                        <Link className='flex items-center hover:bg-brightRedSupLight'><JSIcon className='w-6 mr-2' /> Javascript</Link>
                        <Link className='flex items-center hover:bg-brightRedSupLight'><ReactIcon className='w-6 mr-2' /> React</Link>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default BlogSidebar
