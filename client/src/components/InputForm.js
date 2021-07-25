import { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './InputForm.css';


function InputForm(props) {
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
    <Form id="form">
      <FormGroup className="form-item">
        <Label for="name" className="label">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </FormGroup>
      <FormGroup className="form-item">
        <Label for="cost" className="label">Cost</Label>
        <Input
          type="number"
          name="cost"
          id="cost"
          placeholder="0.00"
          value={cost}
          onChange={event => setCost(event.target.value)}
        />
      </FormGroup>
      <FormGroup className="form-item">
        <Label for="category" className="label">Category</Label>
        <Input
          type="text"
          name="category"
          id="category"
          placeholder="Enter Category"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
      </FormGroup>
      <br></br>
      <Button value="submit" onClick={handleSubmit}>Submit</Button>
    </Form>
  );
}

export default InputForm;