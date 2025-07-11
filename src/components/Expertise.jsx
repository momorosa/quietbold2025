import { aboutContent } from '../content/aboutText.js'

export default function Expertise() {
    return(
        <div className="w-full h-screen flex flex-col lg:flex-row text-white overflow-auto">

        {/* ──────────────────────────────── */}
        {/* Content panel */}
        {/* ──────────────────────────────── */}
        
        <div className="relative flex-none w-full h-1/2 lg:w-1/2 lg:h-full lg:mx-12 p-4">
            <h1 className="text-3xl font-bold py-4 text-yellow-mellow">
                { aboutContent.coreStrengthsTitle }
            </h1>
            <p className="pt-4 pb-2 text-lg font-medium">
                { aboutContent.coreStrengths[0].subtitle }
            </p>
            <p className="text-gray-400 lg:w-4/5">
                { aboutContent.coreStrengths[0].description }
            </p>
            <p className="pt-4 pb-2 text-lg font-medium">
                { aboutContent.coreStrengths[1].subtitle }
            </p>
            <p className="text-gray-400 lg:w-4/5">
                { aboutContent.coreStrengths[1].description }
            </p>
            <p className="pt-4 pb-2 text-lg font-medium">
                { aboutContent.coreStrengths[2].subtitle }
            </p>
            <p className="text-gray-400 lg:w-4/5">
                { aboutContent.coreStrengths[2].description }
            </p>
            <p className="pt-4 pb-2 text-lg font-medium">
                { aboutContent.coreStrengths[3].subtitle }
            </p>
            <p className="text-gray-400 lg:w-4/5">
                { aboutContent.coreStrengths[3].description }
            </p>
        </div>
        {/* ──────────────────────────────── */}
        {/* Canvas section */}
        {/* ──────────────────────────────── */}
        
        <div className="w-full h-auto lg:w-1/2 lg:h-full lg:pr-12 bg-warm-gray backdrop-blur lg:pt-32 px-8 z-10 mb-50 lg:mb-0">
        </div>
        </div>

    )
}