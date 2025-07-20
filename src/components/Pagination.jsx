import { FancyLink } from './FancyLink'
import TextButton from './TextButton.jsx'

export default function Pagination({ prev, next }) {
    return(
        <nav aria-label="Pagination" className="w-full py-8 flex justify-end items-center pr-6 lg:pr-16 mb-20">
        {/* Previous link (if provided) */}
            {prev ? (
                <TextButton
                    href={ prev.href }
                    className="font-medium px-5 py-3 mt-4"
                    aria-label={ prev.ref }
                    leftIcon="west"
                    iconSize="md-18"
                    rel="noopener noreferrer"
                >
                    
                    { prev.title }
                </TextButton>
            ) : (
                <span className="text-gray-400">&nbsp;</span>
            )}

      {/* Separator */}

        <span className="text-gray-500 hidden sm:inline px-2 py-3 mt-4">|</span>

      {/* Next link (if provided) */}
            {next ? (
                <TextButton
                    href={ next.href }
                    className="font-medium px-5 py-3 mt-4"
                    aria-label={ prev.ref }
                    rightIcon="east"
                    iconSize="md-18"
                    rel="noopener noreferrer"
                >
                    { next.title }
                </TextButton>
            ) : (
                <span className="text-gray-400">&nbsp;</span>
            )}
        </nav>
    )
}