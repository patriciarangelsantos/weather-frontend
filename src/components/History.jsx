import React, { useState } from 'react';
import axios from 'axios';

function History({ city }) {
  const [historico, setHistorico] = useState([]);

  function buscarHistorico() {
    axios.get(`http://localhost:8080/api/weather/history?city=${city}`)
      .then(({ data }) => setHistorico(data))
      .catch(() => setHistorico([]));
  }

  return (
    <div style={{ marginTop: '15px' }}>
      <button onClick={buscarHistorico}>View History</button>
      {historico.length > 0 && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {historico.map((item, index) => (
            <li key={index} style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>
              {item.city} — {item.temperature}°C
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default History;