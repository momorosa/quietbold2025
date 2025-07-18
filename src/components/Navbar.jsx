import { useState } from 'react'
import DropdownMenuMobile from './DropdownMenuMobile.jsx'
import Shuffle from './Shuffle.jsx'
import { IconMenu, IconClose } from './icons/IconMenu.jsx'

export default function Navbar()
{
    const [ isOpen, setIsOpen ] = useState(false)

    return (<>
        <div className="flex-column md:flex lg:flex justify-between items-center p-6 z-50 relative backdrop-blur-sm">
            <a href="/" className="group relative inline-block hover:cursor-pointer">
                <svg 
                    className="w-full h-full"
                    width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        className="transition-all duration-500 group-hover:fill-yellow-mellow"
                        d="M22.5352 14.5225H6.50977V16.0254H22.5352V22.5352H0V8.0127H16.0244V6.50977H0V0H22.5352V14.5225Z" fill="#FFFFFF"/>
                    <circle 
                        className="transition-all duration-500 delay-200 group-hover:fill-yellow-mellow "
                        cx="11.1547" cy="28.6198" r="3.38028" fill="#FFFFFF"/>
                </svg>
            </a>
            <div className="h-8 text-white">
                <Shuffle />
            </div>
            {/* <button onClick={() => setIsOpen(!isOpen)} className="group relative w-8 h-8">
                <div
                    className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                >
                    <IconMenu className="hover:cursor-pointer" />
                </div>
                <div
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                >
                    <IconClose className="hover:cursor-pointer" />
                </div>
            </button> */}
        </div>
        {isOpen && <DropdownMenuMobile isOpen={isOpen} />}
    </>
    )
}
