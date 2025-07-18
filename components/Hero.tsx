import { UserIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl font-heading font-bold">Ch.ai Café</h1>
            <p className="mt-4 text-2xl font-accent">Brewing Bots & Banter</p>
            <p className='font-accent text-xl text-gray-300 text-center md:text-center max-w-6xl mx-auto md:px-4 lg:px-0 mt-8 leading-relaxed'>
                Unleash digital companionship at Ch.ai Café—chat with your favorite AI characters anytime,<br></br>whether on the site or through Discord. You can enjoy:
            </p>
                <ul className='list-disc list-inside font-accent mx-auto text-lg leading-relaxed space-y-1 mt-6 mb-6'>
                    <li><strong>Seamless conversation continuity</strong> <em>- Your chats pick up where they left off, no matter the platform</em></li>
                    <li><strong>Effortless character management</strong> <em>- Add characters to your profile and easily switch between them</em></li>
                    <li><strong>Massive library of genres and personalities</strong> <em>- Chat with a wide range of unique characters</em></li>
                    <li><strong>Discord integration</strong> <em>- Your chats and characters, fully synced with our Discord bot</em></li>
                </ul>
            <p className='font-accent text-xl text-gray-300 text-center md:text-center max-w-6xl mx-auto md:px-4 lg:px-0 mb-8 leading-relaxed'>
                Dive in and discover what Ch.ai has to offer.
            </p>
            <div className="flex gap-4 items-center flex-col sm:flex-row mt-4">
                <a
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-sans font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <UserIcon className="w-6 h-6" />
                    Login/Register
                </a>
                <a
                    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center gap-2 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-sans font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <MagnifyingGlassIcon className="w-6 h-6" />
                    Explore Characters
                </a>
            </div>
        </section>
    );
}