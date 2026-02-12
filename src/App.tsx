import ('./App.css');
import { useEffect, useState } from 'react';
//import other components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:3001/api/hello')
      .then((res) => res.json())
      .then((res) => setData(res.message));
  }, []);

  return (
  <>
    <Navbar />
    <Header />
    <div className='view-container'>
      {/** hier könnte man sachen laden */}
    </div>
    <div className='default-content'>
      <h2>React + Hono</h2>
      <p>Server sagt: {data}</p>
    </div>
    <p>Das ist Test-Content in einem p-Element.</p>
    <Footer />
  </>
  );
}

export default App;