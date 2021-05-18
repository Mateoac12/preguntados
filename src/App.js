import Quiz from 'components/Quiz';
import Timer from 'components/Timer';
import LifeContextProvider from 'context/lifeContext';
import './App.css';

function App() {
  return (
    <LifeContextProvider>
      <div className="App">
        <Timer />
        <Quiz />
      </div>
    </LifeContextProvider>
  );
}

export default App;
