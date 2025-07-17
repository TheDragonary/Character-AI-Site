import { UserIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl font-heading font-bold">Ch.ai Cafe</h1>
            <p className="mt-4 text-2xl mb-4 font-accent">AI characters, brewed just for you</p>
            <div className="flex gap-4 items-center flex-col sm:flex-row">
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