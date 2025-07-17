import Image from "next/image";

interface CharacterCardProps {
    name: string;
    description: string;
    imageUrl: string;
}

export default function CharacterCard({ name, description, imageUrl }: CharacterCardProps) {
    return (
        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl p-4 shadow hover:shadow-lg transition">
            <div className="w-full h-40 relative mb-4 rounded-md overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>
            <h3 className="text-xl font-heading font-semibold">{name}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1 font-accent">
                {description}
            </p>
        </div>
    );
}