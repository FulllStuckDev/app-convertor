import React from 'react';
import { Header } from './components/Header';
import { Blocks } from './components/Blocks';
import './index.css';

function App() {
  const [fromCurrency, setFromCurrency] = React.useState('UAH')
  const [toCurrency, setToCurrency] = React.useState('USD')
  const [fromPrice, setFromPrice] = React.useState(0)
  const [toPrice, setToPrice] = React.useState(0)

  

  React.useEffect(() => {
    fetch('https://cdn.cur.su/api/latest.json')
    .then((res)=> res.json())
    .then((json) => {
      ratesRef.current = json.rates
      onChangeToPrice(0)
    }) 
      .catch ((err) => {
      console.warn(err);
      alert('Не удалось получить информацию')
    })
  }, []);

  
  const ratesRef = React.useRef({})

  const onChangeFromPrice = (value) => {
    const price = value / ratesRef.current[fromCurrency]
    const result = price * ratesRef.current[toCurrency]
    setToPrice(result.toFixed(2))
    setFromPrice(value)
  }
  
  const priceUSD = (1 * ratesRef.current['UAH']).toFixed(2)
  const priceEUR = ((1 * ratesRef.current['EUR']) * ratesRef.current['UAH']).toFixed(2)

  const onChangeToPrice = (value) => {
    const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value
    setFromPrice(result.toFixed(2))
    setToPrice(value)
  }
  React.useEffect(()=>{
    onChangeFromPrice(fromPrice)
  }, [fromCurrency]) 
  React.useEffect(()=>{
    onChangeToPrice(toPrice)
  }, [toCurrency]) 
  return (
    <div className="App">
      <Header 
        priceUSD={priceUSD}
        priceEUR={priceEUR}
      />
      <Blocks 
        fromPrice={fromPrice}
        fromCurrency={fromCurrency}
        setFromCurrency={setFromCurrency} 
        onChangeFromPrice={onChangeFromPrice}
        toPrice={toPrice}
        toCurrency={toCurrency}
        setToCurrency={setToCurrency}
        onChangeToPrice={onChangeToPrice}
      />
    </div>
  );
}

export default App;