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


  const axiosPostMap = posts.map((post, index) => {
    return (
      <tbody key={index}>
          <tr>
            <td>{post.name}</td>
            <td>${post.cost}</td>
            <td>{post.category}</td>
            <td>
              <button className="btn btn-primary" type="submit" form="delete" value="Submit">Delete</button>
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