import './App.css';
import Card from './components/Card/card';
import { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState("");
  const [color, setColor] = useState("f9b234");

  const colors = ["f9b234", "3ecd5e", "e44002", "952aff", "cd3e94", "4c49ea"];

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes', {method: 'GET'})
    .then(response => response.json())
    .then(data => {
      setQuote(data[0]);
      const randomColor = getRandomColor()
      console.log(randomColor);
      setColor(randomColor);
    });
  };

  const getRandomColor = () => {
    let randomColor;
    do {
      randomColor = colors[Math.floor(Math.random() * colors.length)];
    } while (randomColor === color);
    return randomColor;
  };

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100vw', height: '100vh', overflow: 'hidden'}}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Card content={quote} color={color} />
      </div>
      <div>
        <button onClick={fetchQuote} style={{ backgroundColor: "#" + color, color: "#fff", fontWeight: "bold", fontSize: "20px", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer", marginTop: "10px" }}>Refresh</button>
      </div>
      <div style={{fontWeight: 'bold', color: 'white', position: 'absolute', top: '20px', left: '20px', paddingLeft: "25px", paddingRight: "25px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: "20px"}}>
        All the Quotes being used are fetched from <span style={{fontWeight: 'lighter'}}><a href={'https://ron-swanson-quotes.herokuapp.com/v2/quotes'} target='_blank' style={{ color: "#" + color}}>{'https://ron-swanson-quotes.herokuapp.com/v2/quotes'}</a></span>
      </div>
      <div style={{fontWeight: 'bold', color: 'white', position: 'absolute', top: '20px', right: '20px', paddingLeft: "25px", paddingRight: "25px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: "20px"}}>
        Github : <span style={{fontWeight: 'lighter'}}><a href={'https://github.com/Binit06/quotes'} target='_blank' style={{ color: "#" + color}}>{'https://github.com/Binit06/quotes'}</a></span>
      </div>
    </div>
  );
}

export default App;
