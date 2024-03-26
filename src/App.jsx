import SearchBar from "./Component/SearchBar"
import { Showtemp } from "./Component/Showtemp"
import { DataProvider } from "./utils/context"

function App() {


  return (
    <>
    <DataProvider>
    <div className="h-screen w-screen bg-[url('./assets/forest_bg.jpeg')] bg-cover  flex  flex-col align-middle  ">
      <SearchBar/>  
      <Showtemp/>
    </div>
    </DataProvider>
    </>
  )
}

export default App
