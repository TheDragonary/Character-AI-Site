import Hero from "@/components/Hero";
import PopularCharacters from "@/components/PopularCharacters";
import FadeSection from "@/components/FadeSection";

export default function Home() {
    return (
        <div className="h-screen overflow-y-scroll scroll-snap-y scroll-snap-mandatory">
        <section className="relative h-screen scroll-snap-start bg-gray-700 bg-[url('/hero-bg.jpg')] bg-blend-multiply">
            <FadeSection><Hero /></FadeSection>
        </section>
        <section className="relative h-screen scroll-snap-start bg-gray-900">
            <FadeSection><PopularCharacters /></FadeSection>
        </section>
        </div>
    );
}