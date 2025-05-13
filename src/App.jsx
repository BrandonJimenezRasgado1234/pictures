import { useState } from "react"
import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"
import SearchImages from "./api"


function App() {
  const [images, setimages] = useState(0)

const handlesubmit = async(term) => {
  console.log('usted esta buscando: ', term)
  const result= await SearchImages(term)
  setimages(result)

}
return{
    <>
<h1>pictures app</h1>
<SearchBar onsubmit=(handlesubmit)/>
<ImageList images=(images)/>
    </>
   
}

}

export default App
