import React from 'react'
import Article from './components/Article'
import Footer from './components/Footer'
import Header from './components/Header'
import ImageGrid from './components/ImageGrid'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Article />
        <ImageGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
