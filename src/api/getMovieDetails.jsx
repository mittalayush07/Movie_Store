export const getMovieDetails = async({params})=>{
    const id = params.movieID
        
    try{
        const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`);
        const data = response.json();
        return data;        
    }
    catch (error){
        console.log(error);
    }

}