
import { Link } from "react-router-dom"
 const Home = () => {
    return (
        <div >
            <div>
            <h1 className="text-blue-600 text-shadow-blue-50">Welcome to Image Handling App</h1>
<p  className="text-gray-700 mt-5">Here you can upload and manage your images easily.</p>
</div>
<div className="mt-78 ml-90">
    <Link className="bg-blue-500 rounded-md text-xl font-medium" to="/create-post">Create a New Post</Link>
</div>
        </div>
    )
}
export default Home