import './App.css';
import SearchBar from './components/SearchBar';
import SteamUsersOnline from './components/SteamUsersOnline';
import logo_steam from './components/logo_steam.png';

const App = () => {
  return (
    <div className='bg-[#0c1820] h-screen'>
      <nav>
        <img className='w-40' src={logo_steam} alt='logo' />
      </nav>

      <SearchBar />
      <SteamUsersOnline/>
    </div>
  );
};

export default App;

