import './App.css';
import Table from './components/Table';
import InputForm from './components/InputForm';
import { useState } from 'react'

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="App">
      <h1 className="title">Expense Tracker</h1>
      <InputForm refreshKey={refreshKey} setRefreshKey={setRefreshKey}/>
      <Table className="table" refreshKey={refreshKey} setRefreshKey={setRefreshKey}/>
    </div>
  );
}

export default App;
