import SearchResults from '../components/SearchResults';
import SearchBar from '../components/SearchBar';
import SteamUsersOnline from '../components/SteamUsersOnline';
import TopGames from '../components/TopGames';

const Home = () => {
  return (
    <div className='bg-[#0c1820] h-screen'>
      <SteamUsersOnline />
      <nav>
        <img
          className='w-40'
          src={`${process.env.PUBLIC_URL}/logo_steam.png`}
          alt='banner'
        />
        <SearchBar />
      </nav>
      <TopGames />

      <SteamUsersOnline />
    </div>
  );
};

export default Home;
