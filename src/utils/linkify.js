import { FancyLink } from '../components/FancyLink.jsx'

const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")

export function linkify(text, links) {
    // One big regex that matches any key
    const pattern = new RegExp(
    `(${Object.keys(links).map(escapeRegExp).join("|")})`,
    "gi"
    )
    const parts = text.split(pattern)

    return parts.map((part, i) => {
        // find the original key (case-insensitive)
        const key = Object.keys(links).find(
            (k) => k.toLowerCase() === part.toLowerCase()
        )

        // if it's a maatch, return a FancyLink
        if (key) {
            return (
                <FancyLink key={ i } href={ links[key] } secondary id="primary-link-text">
                    { part }
                </FancyLink>
            )
        }

        // otherwises, just return the text
        return <span key={ i }>{ part }</span>
    })

}