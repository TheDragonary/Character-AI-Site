import CharacterCard from '@/components/CharacterCard';

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

export default function PopularCharacters() {
    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-900">
            <h2 className="text-4xl font-semibold text-center mb-8">Popular Characters</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
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
    );
}