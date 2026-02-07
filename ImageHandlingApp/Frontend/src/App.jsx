
import {BrowserRouter,Routes,Route}  from "react-router-dom"
import Home from "./pages/Home.jsx"
import Allposts from "./pages/Allposts.jsx"
import CreatePost from "./pages/CreatePost.jsx"
import Navbar from "./components/Navbar.jsx"
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/posts" element={<Allposts/>}/>
      <Route path="/create-post" element={<CreatePost/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App