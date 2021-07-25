import './App.css';
import Table from './components/Table';
import Form from './components/Form';
import { useState } from 'react'

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="App">
      <Form refreshKey={refreshKey} setRefreshKey={setRefreshKey}/>
      <Table refreshKey={refreshKey} setRefreshKey={setRefreshKey}/>
    </div>
  );
}

export default App;
