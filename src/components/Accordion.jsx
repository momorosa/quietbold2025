import { useState, useRef, useEffect } from 'react'

const base = "p-4 border-b border-warm-gray-medium"

export default function Accordion({ 
    title, 
    outcomes, 
    children, 
    defaultOpen = false,
    className = "" 
}) {

    const [ open, setOpen ] = useState(defaultOpen)
    const content = useRef(null)
    const [ maxHeight, setMaxHeight ] = useState("0px")

    // Measure description height whenever its content changes
    useEffect(() => {
        if(content.current) {
            setMaxHeight(open? `${content.current.scrollHeight}px` : "0px")
        }
    }, [ open, children ])

    const toggle = () => setOpen((prev) => !prev)

    return(
        <div className={`${base} ${className} relative group transition-colors duration-200`}>
        {/* Header – title + toggle icon */}
            <button
                onClick={toggle}
                className="w-full flex justify-between items-center py-1 focus:outline-none"
                aria-expanded={open}
            >
                <h3 className="font-medium text-yellow-mellow">{title}</h3>

                {/* Material “add” icon rotates to form an “×” when open */}
                <span className={`material-icons text-yellow-mellow p-2 transform transition-transform duration-300 ease-in-out group-hover:scale-110 ${
                    open ? "rotate-45" : "rotate-0"}`}>
                    add
                </span>
                </button>

            {/* Always‑visible key outcomes */}
            { outcomes && (
                <p className="font-medium py-2 flex items-center">
                    <span className="material-icons pr-2">bar_chart</span>
                    {outcomes}
                </p>
            )}

        {/* Expandable description */}
            <div
                ref={content}
                style={{ maxHeight }}
                className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
            >
            {/* Optional fade‑in – uncomment if desired */}
            {/* <div className={`transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}> */}
                <p className="text-gray-400 leading-relaxed">{children}</p>
            {/* </div> */}
            </div>
        </div>

    )
}