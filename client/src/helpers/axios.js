import {useState, useEffect} from 'react';
import axios from 'axios';

function Axios() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const axiosPosts = async () => {
      const response = await axios('http://localhost:9000/');
      setPosts(response.data)
    };
    axiosPosts();
  }, [])


  const axiosPostMap = posts.map((post) => {
    return (
      <div className="row">
        <h3>{post.id}</h3>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    )
  })

  return <>{axiosPostMap}</>
}

export default Axios