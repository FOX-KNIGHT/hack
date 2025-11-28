import { SearchBar } from '@/components/search/SearchBar';

export function HeroSection() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        Club. Create. Collaborate.
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        Discover colleges and their clubs. Find your community, explore opportunities, and connect with like-minded students.
                    </p>
                    <div className="pt-4">
                        <SearchBar />
                    </div>
                </div>
            </div>
        </section>
    );
}
