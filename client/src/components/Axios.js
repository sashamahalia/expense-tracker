import {useState, useEffect} from 'react';
import axios from 'axios';

function Axios() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const axiosPosts = async () => {
      const response = await axios('http://localhost:9000/api/expenses');
      setPosts(response.data);
    };
    axiosPosts();
  }, [])

    const handleDelete = async id => {
      const newPosts = posts.filter((item) => item.id !== id);
 
      setPosts((prev) => {
        return {
          ...prev,
          newPosts
        }});

      await axios.delete(`http://localhost:9000/api/expense/${id}`);
    }


  const axiosPostMap = posts && posts.map((post, index) => {
    return (
      <tbody key={index}>
        {console.log(posts[0]._id)}
          <tr>
            <td>{post.name}</td>
            <td>${post.cost}</td>
            <td>{post.category}</td>
            <td>
              <button className="btn btn-primary" type="button" onClick={() => handleDelete(post._id)}>Delete</button>
            </td>
          </tr>
      </tbody>
    )
  })

  return (
    <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Cost</th>
            <th scope="col">Category</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <>{axiosPostMap}</>
    </table>

  )
}

export default Axios
