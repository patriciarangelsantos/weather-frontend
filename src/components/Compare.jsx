import React, { useState } from 'react';
import axios from 'axios';

function Compare() {
  const [city1, setCity1] = useState('');
  const [city2, setCity2] = useState('');
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  function handleComparar() {
    setLoading(true);
    setErro(null);
    setResultado(null);

    axios.get(`http://localhost:8080/api/weather/compare?city1=${city1}&city2=${city2}`)
      .then(({ data }) => setResultado(data))
      .catch(() => setErro('City not found. Please try again.'))
      .finally(() => setLoading(false));
  }

  return (
    <div style={{ marginTop: '40px', textAlign: 'center', maxWidth: '400px', margin: '40px auto' }}>
    <input
        type="text"
        placeholder="City 1"
        value={city1}
        onChange={(e) => setCity1(e.target.value)}
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '130px' }}
    />
     <input
        type="text"
        placeholder="City 2"
        value={city2}
        onChange={(e) => setCity2(e.target.value)}
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '130px' }}
    />
    <button
    onClick={handleComparar}
    style={{ padding: '8px 16px', backgroundColor: '#4a90e2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
    >
    Compare
    </button>

      {loading && <p>Loading...</p>}
      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      {resultado && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          {resultado.map((city, index) => (
            <div key={index} style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '8px', width: '150px' }}>
              <h4>{city.name}</h4>
              <p style={{ fontSize: '1.5rem', color: '#4a90e2', fontWeight: 'bold' }}>{city.main.temp}°C</p>
              <p>{city.weather[0].description}</p>
              <p>Humidity: {city.main.humidity}%</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Compare;