import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherChart from './components/WeatherChart';
import Compare from './components/Compare';

export default function App() {
  const [busca, setBusca] = useState('');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(false);
  const [historico, setHistorico] = useState([]);

  function handleBuscar() {
    setLoading(true);
    setErro(null);
    setResultado(null);

    axios.get(`http://localhost:8080/api/weather/current?city=${busca}`)
      .then(({ data }) => {
        setResultado(data);
        return axios.get(`http://localhost:8080/api/weather/history?city=${busca}`);
      })
      .then(({ data }) => {
        setHistorico(data);
      })
      .catch(() => {
        setErro('City not found. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div style={{ width: '400px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Dashboard de Clima</h2>
      <SearchBar searchTerm={busca} onSearchChange={setBusca} onBuscar={handleBuscar} />
      {loading && <p style={{ textAlign: 'center', color: '#888' }}>Buscando...</p>}
      {erro && <p style={{ textAlign: 'center', color: 'red' }}>{erro}</p>}
      {resultado && (
        <>
          <WeatherCard
            city={resultado.name}
            temperature={resultado.main.temp}
            description={resultado.weather[0].description}
            humidity={resultado.main.humidity}
          />
          {historico.length > 0 && <WeatherChart data={historico} />}
          <Compare />
        </>
      )}
    </div>
  );
}