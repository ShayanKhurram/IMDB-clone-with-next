
import React from "react";
import Results from "./components/Results";
import fetchdata from "./components/fetchdata"


export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(
      `https://api.themoviedb.org/3${
          genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'
      }?api_key=393be4d0d2ac40752e7498d76b476fef&language=en-US&page=1`
  );
  
  const data = await res.json();
  if (!res.ok) {
      throw new Error('Failed to fetch data');
  }

  const results = data.results;
  console.log(results);

  return (
    <div>
        <Results results={results} />
    </div>


  );
  
  
  
}
