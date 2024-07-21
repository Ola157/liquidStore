import React from 'react'
import { ChevronDownIcon, HomeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavExpand = ({ handleCurrentClick, currentClick }) => {

    const { firstName, lastName, lastLogin } = useSelector(state => state.auth)

    const navDoc = [
        {
            title: 'Your Accounts',
            icon: <ChevronDownIcon className='size-5' />

        },
        {
            title: 'Your Profile',
            icon: <ChevronDownIcon className='size-5' />

        },
        {
            title: 'Your Security',

        }
        // {
        //     title: 'Help & Support',
        //     class: '',
        //     icon: <ChevronDownIcon className='size-5' />

        // }
    ]

    return (
        <nav className={`bg-white w-full hidden md:block after:content-[""] relative  ${currentClick ? 'border-b-[#5a8c00] border-b-4 ' : 'border-b border-black/20'} z-30 h-fit flex flex-col`}>
            <div className='w-full lg:w-10/12 px-5 lg:px-0 mx-auto'>
                <div className='flex flex-row justify-between w-full'>
                    <div className='h-full flex items-center'>
                        <div className='py-2'>
                            <p className='font-semibold tracking-tight text-xl'>Mr {lastName?.charAt(0)}. {firstName}</p>
                            <p className='flex items-center tracking-tight text-xs text-black/80 gap-x-2'><LockClosedIcon className='size-3' /> <span>Last logged on {lastLogin}</span></p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between text-theme font-medium text-sm tracking-tight'>
                        <div className='flex items-center px-2 py-3 hover:bg-gray-100 hover:text-theme_light cursor-pointer transition-colors duration-200 ease-in-out'>
                            <Link to={'/accounts'}><HomeIcon className='size-5' /></Link></div>
                        {navDoc.map((nav, index) => {

                            const isVisible = new RegExp(nav.title, 'i').test(currentClick);

                            return (
                                <button
                                    onClick={() => handleCurrentClick(nav.title)}
                                    key={index}
                                    className={`${index === navDoc.length - 1 && "border-r"} ${isVisible ? 'bg-[#5a8c00] text-white' : 'hover:bg-gray-100 hover:text-theme_light'}
                                        flex items-center gap-x-1 border-l px-2 py-3 w-fit cursor-pointer transition-colors duration-200 ease-in-out
                                        `}>
                                    <span>{nav.title}</span>
                                    <span className={`${isVisible ? 'rotate-180' : 'rotate-0'}`}>{nav.icon}</span>
                                </button>)
                        })}

                        <button className='border-r px-2 py-3 border-gray-500/20 w-fit hover:bg-gray-100 hover:text-theme_light cursor-pointer transition-colors duration-200 ease-in-out'>Log off</button>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default NavExpand
