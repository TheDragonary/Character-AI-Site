import Image from "next/image";
import CharacterCard from "@/components/CharacterCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const characters = [
    {
        name: "Frieren",
        description: "Frieren: Beyond Journey's End",
        imageUrl: "/characters/frieren.png",
    },
    {
        name: "Furina",
        description: "Genshin Impact",
        imageUrl: "/characters/furina.png",
    },
    {
        name: `Miles "Tails" Prower`,
        description: "Sonic the Hedgehog",
        imageUrl: "/characters/Miles _Tails_ Prower.png",
    },
];

export default function Home() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center sm:text-left">
                    Ch.ai Cafe
                </h1> 
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center sm:text-left">
                    AI characters, brewed just for you
                </p>

                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <a
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faUser} size="lg"/>
                        Login/Register
                    </a>
                    <a
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[200px]"
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Character Library
                    </a>
                </div>
                {/* Popular Characters Section */}
                <section className="w-full max-w-5xl mx-auto mb-16 mt-16">
                    <h2 className="text-3xl font-semibold mb-6">Popular Characters</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Character Cards */}
                        {characters.map((char) => (
                            <CharacterCard
                                key={char.name}
                                name={char.name}
                                description={char.description}
                                imageUrl={char.imageUrl}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                
            </footer>
        </div>
    );
}