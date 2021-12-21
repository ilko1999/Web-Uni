import './App.css';
import { useEffect, useState } from 'react';
import InfoList from './components/InfoList';
import React from 'react'


function Sedmica4() {

    
  const [data, setData] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://swapi.dev/api/people',
      );
      const json = await res.json();
      setData(json.results);
    };
    fetchData();
  }, []);

    return (
        <div className="App">
      <InfoList data={data}/>
    </div>
    )
}

export default Sedmica4
