import { useState } from "react";
import axios from "axios";

function Form(props) {
  const [name, setName] = useState('');
  const [cost, setCost] = useState(0);
  const [category, setCategory] = useState('');
  
  // When submit button is clicked, collects and sends form data as post request.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name,
      cost,
      category
    }
    await axios.post('http://localhost:9000/api/expenses', data)
      setName('');
      setCost(0);
      setCategory('');
      
      props.setRefreshKey(oldKey => oldKey +1);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <label>
        Cost:
        <input
          type="number"
          value={cost}
          onChange={event => setCost(event.target.value)}
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;