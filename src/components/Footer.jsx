import { FancyLink } from './FancyLink.jsx'

export default function Footer() {
    return(
        <footer className="w-full text-center text-warm-gray-light p-4">
            ©2025 - Rosa Choi.{' '}
            <FancyLink href="/stack" secondary>
                Crafted with love.
            </FancyLink>
        </footer>
    )
}