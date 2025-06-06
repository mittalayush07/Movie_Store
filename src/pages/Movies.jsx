import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/card";

const Movies = () => {
    const moviesData = useLoaderData();
    console.log(moviesData);
    return (
        <>
            <ul className="container grid grid-three--cols">
                {moviesData.Search.map((curMovie) => {
                    return <Card key={curMovie.imdbID} curMovie={curMovie} />;
                })}
            </ul>
        </>
    )
}
export default Movies;