import axios from "axios";
const SearchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=73bSkfBiyyIfbIIr05-B9nKE_XhX8ePbR6fMaX%20VFW4'
    const respónse = await axios.get(url, {
params:{
    query: term
}
    })
    console.log(Response)
    return Response.data.results
} 
export default SearchImage
