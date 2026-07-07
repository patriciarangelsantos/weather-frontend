import React from 'react';

export default function SearchBar({ searchTerm, onSearchChange, onBuscar }) {
  return (
    <div style={{ marginBottom: '20px', boxSizing: 'border-box', width: '100%' }}>
      <input
        type="text"
        placeholder="Enter a city..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          marginBottom: '8px',
          boxSizing: 'border-box'
        }}
      />
      <button
        onClick={onBuscar}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          backgroundColor: '#4a90e2',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          boxSizing: 'border-box'
        }}
      >
        Search
      </button>
    </div>
  );
}