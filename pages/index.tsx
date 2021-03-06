import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import APIResult from "../types/APIResult";
import MovieListResult from "../types/MovieListResult";
import data from "../utils/requests";

type HomeProps = {
  results: MovieListResult[];
};

const Home = ({ results }: HomeProps) => {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />
      <Results results={results} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.genre as string;

  const request: APIResult = await fetch(
    `https://api.themoviedb.org/3${data[genre]?.url || data.fetchTrending.url}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  const results = request.results as MovieListResult[];

  return {
    props: {
      results,
    },
  };
};
