import { aboutContent } from '../content/aboutText.js'
import Button from './Button.jsx'

export default function About()
{
    return(
        <div className="flex flex-col gap-8 m-8 text-white">
            <h1 className="text-3xl font-bold">{ aboutContent.headline }</h1>
            <p>{ aboutContent.intro }</p>
            <p>{ aboutContent.background }</p>
            <p>{ aboutContent.passion }</p>
            <Button 
                    href="mailto:momorosa.design@gmail.com"
                    className="font-medium text-black bg-yellow-mellow py-4 w-64 rounded-tr-xl rounded-bl-xl hover:bg-linear-to-r from-yellow-mellow to-yellow-mellow-light hover:cursor-pointer transition-all duration-500"
                    aria-label="send message"
                    rightIcon="send"
                    iconSize="md-18"
                    target="_blank" 
                    rel="noopener noreferrer"
            >
                { aboutContent.buttonText}
            </Button>
        </div>  
    )
}