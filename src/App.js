import logo from './logo.svg';
import './App.css';
import Dropdown from './components/mck_dropdown/mck_dropdown';

function App() {
  return (
    <div className="App">
      <Dropdown 
        labelname="Hersteller"
        options={['Apple', 'Samsung', 'Motorola', 'LG', 'Sony', 'Google', 'HTC', 'Huawei', 'OnePlus', 'MIUI']}
      />
    </div>
  );
}

export default App;
