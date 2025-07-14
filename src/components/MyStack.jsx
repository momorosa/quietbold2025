import { myStack } from "../content/myStack.js";
import { FancyLink } from "./FancyLink.jsx";

export default function MyStack()
{
    return(
        <div className="w-full h-screen flex flex-col lg:flex-row text-white mb-80 pt-24">
            <div className="relative flex-none w-full h-2/5 p-4 lg:w-1/2 lg:h-full lg:m-8">
                <h1 className="text-3xl font-bold py-4 text-yellow-mellow">
                    { myStack.title }
                </h1>
                <p> { myStack.description } </p>
                <section>
                    <h2 className="text-2xl py-4 uppercase">
                        {myStack.designStack.title}
                    </h2>
                    {myStack.designStack.stacks.map(({ tool, description }) => (
                        <p key={tool} className="py-1 flex items-start">
                            <span className="material-icons text-yellow-mellow mr-2">
                                chevron_right
                            </span>
                            <span>
                            {tool}:{' '}
                                <span className="text-gray-400">{description}</span>
                            </span>
                        </p>
                    ))}
                    <p className="ml-6 py-2">  
                        <FancyLink
                            href="https://medium.com/@momorosa.design/a-step-by-step-guide-to-bringing-an-ai-character-to-life-2828514037bc"
                            secondary
                        >
                            See it in action
                        </FancyLink>    
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl py-4 uppercase">
                        {myStack.devStack.title}
                    </h2>
                    {myStack.devStack.stacks.map(({ tool, description }) => (
                        <p key={tool} className="py-1 flex items-start">
                            <span className="material-icons text-yellow-mellow mr-2">
                                chevron_right
                            </span>
                            <span>
                            {tool}:{' '}
                                <span className="text-gray-400">{description}</span>
                            </span>
                        </p>
                    ))}
                </section>
                <section>
                    <h2 className="text-2xl py-4 uppercase">
                        {myStack.aiStack.title}
                    </h2>
                    {myStack.aiStack.stacks.map(({ tool, description }) => (
                        <p key={tool} className="py-1 flex items-start">
                            <span className="material-icons text-yellow-mellow mr-2">
                                chevron_right
                            </span>
                            <span>
                            {tool}:{' '}
                                <span className="text-gray-400">{description}</span>
                            </span>
                        </p>
                    ))}
                </section>
                <section>
                    <h2 className="text-2xl py-4 uppercase">
                        {myStack.vrStack.title}
                    </h2>
                    {myStack.vrStack.stacks.map(({ tool, description }) => (
                        <p key={tool} className="py-1 flex items-start">
                            <span className="material-icons text-yellow-mellow mr-2">
                                chevron_right
                            </span>
                            <span>
                            {tool}:{' '}
                                <span className="text-gray-400">{description}</span>
                            </span>
                        </p>
                    ))}
                </section>
            </div>
        </div>
    )
}