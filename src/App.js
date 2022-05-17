import './App.css';
import Location from './components/Location';
import Loader from './components/Loader';
import ryckandmortytitle from './images/ryckandmorty-title.png';
import { useState } from 'react';
import useAxiosLocation from './hooks/useAxiosLocation';
import ResidentInfo from './components/ResidentInfo';
import useSuggestion from './hooks/useSuggestion';

function App() {

  const [inputValue, setInputValue] = useState('');
  const { location } = useAxiosLocation(inputValue);

  const [mod, setMod] = useState(false);
  const { handlerInput, searchLocation, setHandlerInput } = useSuggestion(mod);

  return (
    <div className="App">

      <Loader />

      <header>
        <img src={ryckandmortytitle} alt="" />
      </header>

      <input type="text" onChange={e => setHandlerInput(e.target.value)} placeholder={mod ? 'Location' : 'ID'} />
      <button className='search' onClick={() => setInputValue(handlerInput, setHandlerInput(''))}>Search</button>
      <ul className='suggestionsearch'>
        {
          mod && handlerInput ? searchLocation.map(location => (
            <li key={location.id} onClick={() => setInputValue(location.id, setHandlerInput(''))}>{location.name}</li>
          )) : ''
        }
      </ul>
      <button className='mod' onClick={() => setMod(!mod)}>{mod ? 'Location' : 'ID'}</button>

      <Location location={location} />

      <ul className='resident-info'>
        {
          location.residents?.map(resident => (
            <ResidentInfo key={resident} info={resident} />
          ))
        }
      </ul>

    </div>
  );
}

export default App;
