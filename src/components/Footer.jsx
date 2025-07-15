import { FancyLink } from './FancyLink.jsx'

export default function Footer() {
    return(
        // <footer className="fixed bottom-0 left-0 w-full h-16 text-center text-warm-gray-light p-4 backdrop-blur-xs">
        <footer className="w-full h-16 text-center text-warm-gray-light p-4 lg:fixed lg:bottom-0 lg:left-0 lg:bg-warm-gray/80">
            ©2025 - Rosa Choi.{' '}
            <FancyLink href="/stack" secondary>
                Crafted with love.
            </FancyLink>
        </footer>
    )
}