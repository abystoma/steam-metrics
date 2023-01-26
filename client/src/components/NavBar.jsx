import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <nav>
      <img className='w-40' src={'./public/logo_steam.png'} alt='logo' />
      <SearchBar />
    </nav>
  );
};

export default NavBar;
