import {useState, useEffect} from 'react';
import axios from 'axios';

function Table() {
  const [posts, setPosts] = useState([]);
  // Fetches posts from server
  useEffect(() => {
    const axiosPosts = async () => {
      const response = await axios('http://localhost:9000/api/expenses');
      setPosts(response.data);
    };
    axiosPosts();
  }, [posts])

    const handleDelete = async id => {
      // first removes post from UI, by filtering out and resetting state, then deletes from database.
      const newPosts = posts.filter((item) => item.id !== id);
 
      setPosts((prev) => {
        return [
          ...prev,
          newPosts
        ]});

      await axios.delete(`http://localhost:9000/api/expense/${id}`);
    }


  const axiosPostMap = 

  posts.map((post, index) => {
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
  });

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
        <>{posts ? axiosPostMap: null}</>
    </table>

  )
}

export default Table
