import MovieListResult from "../types/MovieListResult";
import Movie from "./Movie";
import FlipMove from "react-flip-move";

type ResultsProps = {
  results: MovieListResult[];
};

const Results = ({ results }: ResultsProps) => {
  console.log(results);

  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center ">
      {results.map((result) => (
        <Movie key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;
