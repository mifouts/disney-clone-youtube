import MoviesCarousel from "@/components/MoviesCarousel";

export default function Home() {
  return (
    <main className="text-red-500">
      <h1>lets build disney</h1>
      <div className="flex flex-col space-y-2 xl:mt-48">
        <MoviesCarousel movies={[]} title="Upcoming" />
      </div>
    </main>
  );
}
