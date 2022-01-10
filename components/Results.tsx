import MovieListResult from "../types/MovieListResult";
import Movie from "./Movie";

type ResultsProps = {
  results: MovieListResult[];
};

const Results = ({ results }: ResultsProps) => {
  return (
    <section>
      {results.map((result) => (
        <Movie key={result.id} result={result} />
      ))}
    </section>
  );
};

export default Results;
