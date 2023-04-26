import './App.css';
import Header from './components/header';
import Card from './components/card';
import Api from './Api';

function App() {
  return (
    <div className="App">
      <Header name='mehra' />
      <Card name='sahil' number='1234567890'/>
      <Card name='saniul' number='0987654321'/>
      
    </div>
  );
}

export default App;
