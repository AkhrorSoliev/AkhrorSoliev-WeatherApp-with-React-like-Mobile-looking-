import React from 'react'
const api = {
  key: '3d17197cb08ab8c23ac139348e444742',
  base: 'https://openweathermap.org/data/2.5/',
}

function App() {
  return <div className="app">
    <main>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
        />
      </div>
    </main>
  </div>
}

export default App
