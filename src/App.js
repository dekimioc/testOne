import './App.css';
import Header from './components/Header/Header';
import CardsWrapper from './components/CardsWrapper/CardsWrapper';

function App() {
  console.log(process.env.REACT_APP_GIT_URL)
  return (
    <div className="App">
        <Header title="Gists" />
        <CardsWrapper />
    </div>
  );
}

export default App;
