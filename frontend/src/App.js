import { useEffect, useState } from "react";
import ListComponent from "./components/ListComponent";

import api from './services/api';

function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    config.headers['Authorization'] = 'Token ' + localStorage.getItem('token');

    async function loadApi(){
      const response = await api.get('/', config);
      setList(response.data);
      setLoading(false)
      console.log(response.data);
    }
    loadApi();
  }, []);

  return (
    list.map(lista => (
      <ListComponent key={lista.id} listName={lista.name} items={lista.item_set} />
    ))
  );
}

export default App;
