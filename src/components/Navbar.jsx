export default function Navbar()
{
    return (
        <div className="flex justify-between items-center p-6">
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
            <a href="/" className="group relative inline-block hover:cursor-pointer">
                <svg 
                    className="w-full h-full"
                    width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9.33329V6.66663H28V9.33329H4ZM4 25.3333V22.6666H28V25.3333H4ZM4 17.3333V14.6666H21.3333V17.3333H4Z" fill="white"/>
                </svg>
            </a>
        </div>
    )
}