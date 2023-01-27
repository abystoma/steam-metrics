import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className='flex items-center justify-between pt-4 mb-10'>
      <img
        onClick={() => navigate('/')}
        className='w-40 cursor-pointer hover:scale-105'
        src='logo_steam.png'
        alt='logo'
      />
      <SearchBar />
    </nav>
  );
};

export default NavBar;
