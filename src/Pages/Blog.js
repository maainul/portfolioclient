import React from 'react'
import { ReactComponent as HTMLIcon } from "../img/icons8-html-5.svg";

import Footer from './Footer';
import BlogSidebar from './BlogSidebar';


export const Blog = () => {
    return (
        <div className='min-h-screen flex flex-col gap-8 bg-gray-100'>
            <div className='flex gap-4 flex-grow'>
                <BlogSidebar />

                {/* Blog Titles */}
                <section className='bg-gray w-full'>
                    {/* Search Icons and bars */}
                    <div className='p-8'>
                        <input placeholder='Search' className='h-8 border-2 p-4 rounded-md focus:outline-none w-full' />
                    </div>

                    {/* Blog Item List*/}
                    <div className='flex flex-col text-left justify-center px-8 md:flex-row pb-8'>
                        <div className='border-2 p-1 hover:cursor-pointer hover:text-brightRed md:px-4'>Latest</div>
                        <div className='border-2 p-1 hover:cursor-pointer hover:text-brightRed md:px-4'>Frontend</div>
                        <div className='border-2 p-1 hover:cursor-pointer hover:text-brightRed md:px-4'>Backend</div>
                        <div className='border-2 p-1 hover:cursor-pointer hover:text-brightRed md:px-4'>Devops</div>
                        <div className='border-2 p-1 hover:cursor-pointer hover:text-brightRed md:px-4'>Testing</div>
                        <div className='border-2 p-1 hover:cursor-pointer hover:text-brightRed md:px-4'>Today</div>
                    </div>


                    <div className='px-8 grid md:grid-cols-2 lg:grid-cols-3 text-sm gap-4 '>
                        {/* 1 */}
                        <div className='flex flex-col-reverse md:flex-row bg-white rounded-md hover:bg-brightRedSupLight hover:cursor-pointer'>
                            {/* left info */}
                            <div className='flex flex-col space-y-4 w-full py-4 pl-4 pr-2'>
                                <h1 className='text-md font-semibold'>Lorem ipsome Tilte of the tile yet published</h1>
                                <p className='text-darkGrayishBlue'> Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger
                                    team goals in view</p>
                                <div className='flex justify-between'>
                                    <div className='flex gap-4 justify-start items-center'>
                                        <HTMLIcon />
                                        <p>1 day ago</p>
                                    </div>
                                    {/* Types */}
                                    <div className='flex gap-1 mt-2 px-8'>
                                        <p className='bg-green-600 p-1 text-xs text-white font-semibold'>Frontend</p>
                                        <p className='bg-green-600 p-1 text-xs text-white font-semibold'>React</p>
                                    </div>
                                </div>
                            </div>
                            {/* image */}
                            <div className='w-44 overflow-hidden rounded-r-md justify-center items-center flex bg-gray-300 '>
                                <img src='https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/01/html-vs-html5.webp' className='h-full' />
                            </div>
                        </div>

                        {/* 1 */}
                        <div className='flex flex-col-reverse md:flex-row bg-white rounded-md hover:bg-brightRedSupLight hover:cursor-pointer'>
                            {/* left info */}
                            <div className='flex flex-col space-y-4 w-full py-4 pl-4 pr-2'>
                                <h1 className='text-md font-semibold'>Lorem ipsome Tilte of the tile yet published</h1>
                                <p className='text-darkGrayishBlue'> Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger
                                    team goals in view</p>
                                <div className='flex justify-between'>
                                    <div className='flex gap-4 justify-start items-center'>
                                        <HTMLIcon />
                                        <p>1 day ago</p>
                                    </div>
                                    {/* Types */}
                                    <div className='flex gap-1 mt-2 px-8'>
                                        <p className='bg-green-600 p-1 text-xs text-white font-semibold'>Frontend</p>
                                        <p className='bg-green-600 p-1 text-xs text-white font-semibold'>React</p>
                                    </div>
                                </div>
                            </div>
                            {/* image */}
                            <div className='w-44 overflow-hidden rounded-r-md justify-center items-center flex bg-gray-300 '>
                                <img src='https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/01/html-vs-html5.webp' className='h-full' />
                            </div>
                        </div>
                        {/* 1 */}
                        <div className='flex flex-col-reverse md:flex-row bg-white rounded-md hover:bg-brightRedSupLight hover:cursor-pointer'>
                            {/* left info */}
                            <div className='flex flex-col space-y-4 w-full py-4 pl-4 pr-2'>
                                <h1 className='text-md font-semibold'>Lorem ipsome Tilte of the tile yet published</h1>
                                <p className='text-darkGrayishBlue'> Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger
                                    team goals in view</p>
                                <div className='flex justify-between'>
                                    <div className='flex gap-4 justify-start items-center'>
                                        <HTMLIcon />
                                        <p>1 day ago</p>
                                    </div>
                                    {/* Types */}
                                    <div className='flex gap-1 mt-2 px-8'>
                                        <p className='bg-green-600 p-1 text-xs text-white font-semibold'>Frontend</p>
                                        <p className='bg-green-600 p-1 text-xs text-white font-semibold'>React</p>
                                    </div>
                                </div>
                            </div>
                            {/* image */}
                            <div className='w-44 overflow-hidden rounded-r-md justify-center items-center flex bg-gray-300 '>
                                <img src='https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/01/html-vs-html5.webp' className='h-full' />
                            </div>
                        </div>
                        {/* 1 */}
                        <div className='flex flex-col-reverse md:flex-row bg-white rounded-md hover:bg-brightRedSupLight hover:cursor-pointer'>
                            {/* left info */}
                            <div className='flex flex-col space-y-4 w-full py-4 pl-4 pr-2'>
                                <h1 className='text-md font-semibold'>Lorem ipsome Tilte of the tile yet published</h1>
                                <p className='text-darkGrayishBlue'> Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger
                                    team goals in view</p>
                                <div className='flex justify-between'>
                                    <div className='flex gap-4 justify-start items-center'>
                                        <HTMLIcon />
                                        <p>1 day ago</p>
                                    </div>
                                    {/* Types */}
                                    <div className='flex gap-1 mt-2 px-8'>
                                        <p className='bg-green-600 p-1 text-xs text-white font-semibold'>Frontend</p>
                                        <p className='bg-green-600 p-1 text-xs text-white font-semibold'>React</p>
                                    </div>
                                </div>
                            </div>
                            {/* image */}
                            <div className='w-44 overflow-hidden rounded-r-md justify-center items-center flex bg-gray-300 '>
                                <img src='https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/01/html-vs-html5.webp' className='h-full' />
                            </div>
                        </div>
                        {/* 1 */}
                        <div className='flex flex-col-reverse md:flex-row bg-white rounded-md hover:bg-brightRedSupLight hover:cursor-pointer'>
                            {/* left info */}
                            <div className='flex flex-col space-y-4 w-full py-4 pl-4 pr-2'>
                                <h1 className='text-md font-semibold'>Lorem ipsome Tilte of the tile yet published</h1>
                                <p className='text-darkGrayishBlue'> Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger
                                    team goals in view</p>
                                <div className='flex justify-between'>
                                    <div className='flex gap-4 justify-start items-center'>
                                        <HTMLIcon />
                                        <p>1 day ago</p>
                                    </div>
                                    {/* Types */}
                                    <div className='flex gap-1 mt-2 px-8'>
                                        <p className='bg-green-600 p-1 text-xs text-white font-semibold'>Frontend</p>
                                        <p className='bg-green-600 p-1 text-xs text-white font-semibold'>React</p>
                                    </div>
                                </div>
                            </div>
                            {/* image */}
                            <div className='w-44 overflow-hidden rounded-r-md justify-center items-center flex bg-gray-300 '>
                                <img src='https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/01/html-vs-html5.webp' className='h-full' />
                            </div>
                        </div>
                        {/* 1 */}
                        <div className='flex flex-col-reverse md:flex-row bg-white rounded-md hover:bg-brightRedSupLight hover:cursor-pointer'>
                            {/* left info */}
                            <div className='flex flex-col space-y-4 w-full py-4 pl-4 pr-2'>
                                <h1 className='text-md font-semibold'>Lorem ipsome Tilte of the tile yet published</h1>
                                <p className='text-darkGrayishBlue'> Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger
                                    team goals in view</p>
                                <div className='flex justify-between'>
                                    <div className='flex gap-4 justify-start items-center'>
                                        <HTMLIcon />
                                        <p>1 day ago</p>
                                    </div>
                                    {/* Types */}
                                    <div className='flex gap-1 mt-2 px-8'>
                                        <p className='bg-green-600 p-1 text-xs text-white font-semibold'>Frontend</p>
                                        <p className='bg-green-600 p-1 text-xs text-white font-semibold'>React</p>
                                    </div>
                                </div>
                            </div>
                            {/* image */}
                            <div className='w-44 overflow-hidden rounded-r-md justify-center items-center flex bg-gray-300 '>
                                <img src='https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/01/html-vs-html5.webp' className='h-full' />
                            </div>
                        </div>
                        {/* 1 */}
                        <div className='flex flex-col-reverse md:flex-row bg-white rounded-md hover:bg-brightRedSupLight hover:cursor-pointer'>
                            {/* left info */}
                            <div className='flex flex-col space-y-4 w-full py-4 pl-4 pr-2'>
                                <h1 className='text-md font-semibold'>Lorem ipsome Tilte of the tile yet published</h1>
                                <p className='text-darkGrayishBlue'> Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger
                                    team goals in view</p>
                                <div className='flex justify-between'>
                                    <div className='flex gap-4 justify-start items-center'>
                                        <HTMLIcon />
                                        <p>1 day ago</p>
                                    </div>
                                    {/* Types */}
                                    <div className='flex gap-1 mt-2 px-8'>
                                        <p className='bg-green-600 p-1 text-xs text-white font-semibold'>Frontend</p>
                                        <p className='bg-green-600 p-1 text-xs text-white font-semibold'>React</p>
                                    </div>
                                </div>
                            </div>
                            {/* image */}
                            <div className='w-44 overflow-hidden rounded-r-md justify-center items-center flex bg-gray-300 '>
                                <img src='https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/01/html-vs-html5.webp' className='h-full' />
                            </div>
                        </div>
                        {/* 1 */}
                        <div className='flex flex-col-reverse md:flex-row bg-white rounded-md hover:bg-brightRedSupLight hover:cursor-pointer'>
                            {/* left info */}
                            <div className='flex flex-col space-y-4 w-full py-4 pl-4 pr-2'>
                                <h1 className='text-md font-semibold'>Lorem ipsome Tilte of the tile yet published</h1>
                                <p className='text-darkGrayishBlue'> Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger
                                    team goals in view</p>
                                <div className='flex justify-between'>
                                    <div className='flex gap-4 justify-start items-center'>
                                        <HTMLIcon />
                                        <p>1 day ago</p>
                                    </div>
                                    {/* Types */}
                                    <div className='flex gap-1 mt-2 px-8'>
                                        <p className='bg-green-600 p-1 text-xs text-white font-semibold'>Frontend</p>
                                        <p className='bg-green-600 p-1 text-xs text-white font-semibold'>React</p>
                                    </div>
                                </div>
                            </div>
                            {/* image */}
                            <div className='w-44 overflow-hidden rounded-r-md justify-center items-center flex bg-gray-300 '>
                                <img src='https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/01/html-vs-html5.webp' className='h-full' />
                            </div>
                        </div>
                        {/* 1 */}
                        <div className='flex flex-col-reverse md:flex-row bg-white rounded-md hover:bg-brightRedSupLight hover:cursor-pointer'>
                            {/* left info */}
                            <div className='flex flex-col space-y-4 w-full py-4 pl-4 pr-2'>
                                <h1 className='text-md font-semibold'>Lorem ipsome Tilte of the tile yet published</h1>
                                <p className='text-darkGrayishBlue'> Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger
                                    team goals in view</p>
                                <div className='flex justify-between'>
                                    <div className='flex gap-4 justify-start items-center'>
                                        <HTMLIcon />
                                        <p>1 day ago</p>
                                    </div>
                                    {/* Types */}
                                    <div className='flex gap-1 mt-2 px-8'>
                                        <p className='bg-green-600 p-1 text-xs text-white font-semibold'>Frontend</p>
                                        <p className='bg-green-600 p-1 text-xs text-white font-semibold'>React</p>
                                    </div>
                                </div>
                            </div>
                            {/* image */}
                            <div className='w-44 overflow-hidden rounded-r-md justify-center items-center flex bg-gray-300 '>
                                <img src='https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/01/html-vs-html5.webp' className='h-full' />
                            </div>
                        </div>
                        {/* 1 */}
                        <div className='flex flex-col-reverse md:flex-row bg-white rounded-md hover:bg-brightRedSupLight hover:cursor-pointer'>
                            {/* left info */}
                            <div className='flex flex-col space-y-4 w-full py-4 pl-4 pr-2'>
                                <h1 className='text-md font-semibold'>Lorem ipsome Tilte of the tile yet published</h1>
                                <p className='text-darkGrayishBlue'> Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger
                                    team goals in view</p>
                                <div className='flex justify-between'>
                                    <div className='flex gap-4 justify-start items-center'>
                                        <HTMLIcon />
                                        <p>1 day ago</p>
                                    </div>
                                    {/* Types */}
                                    <div className='flex gap-1 mt-2 px-8'>
                                        <p className='bg-green-600 p-1 text-xs text-white font-semibold'>Frontend</p>
                                        <p className='bg-green-600 p-1 text-xs text-white font-semibold'>React</p>
                                    </div>
                                </div>
                            </div>
                            {/* image */}
                            <div className='w-44 overflow-hidden rounded-r-md justify-center items-center flex bg-gray-300 '>
                                <img src='https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/01/html-vs-html5.webp' className='h-full' />
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <Footer />
        </div>

    )
}

