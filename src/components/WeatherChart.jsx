import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function WeatherChart({ data }) {
  const chartData = data.map(item => ({
    time: new Date(item.searchedAt).toLocaleTimeString(),
    temperature: item.temperature
  }));

  return (
    <div style={{ marginTop: '20px' }}>
      <h4 style={{ textAlign: 'center' }}>Temperature History</h4>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="temperature" stroke="#4a90e2" activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeatherChart;