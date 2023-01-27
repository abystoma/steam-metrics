import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between pt-4 mb-10'>
      <img className='w-40' src={'./public/logo_steam.png'} alt='logo' />
      <SearchBar />
    </nav>
  );
};

export default NavBar;
