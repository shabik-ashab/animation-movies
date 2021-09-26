import logo from './logo.svg';
import './App.css';
import Movie from './component/movie/Movie';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Movie></Movie>
    </div>
  );
}

export default App;