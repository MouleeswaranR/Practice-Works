import { Box ,useColorModeValue} from "@chakra-ui/react"
import { Routes,Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import CreatePage from "../pages/CreatePage"
import NavBar from "./components/NavBar"
import { useProductStore } from "./store/product"

function App() {
  const {products}=useProductStore();

  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100","gray.900")}>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/create" element={<CreatePage/>}></Route>
        </Routes>
      </Box>
    </>
  )
}

export default App
