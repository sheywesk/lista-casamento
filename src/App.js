import Header from './header/Header';
import Items from './body/Items';
import './App.css';
import MusicPlayer from './music-player/MusicPlayer';

function App() {
  return (
      <div className="App">
          <Header />
          <Items/>
          <MusicPlayer/>
      </div>
  );
}

export default App;
