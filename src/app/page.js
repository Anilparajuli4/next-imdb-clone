import Results from "@/Component/Results";

const API_KEY = process.env.API_KEY

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending"
  const res = await fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&language=en-us&page=1`, { next: { revalidate: 10000 } });
  if (!res.ok) {
    throw new Error('failed to fetched data')
  }
  const data = await res.json()
  const result = data.results
  return (
    <div>
      <Results results={result} />
    </div>
  )
}
