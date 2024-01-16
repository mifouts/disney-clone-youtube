import { Movie } from "@/typings";

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div>
      <p>{movie.title}</p>
    </div>
  );
}

export default MovieCard;
