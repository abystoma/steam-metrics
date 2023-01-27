import Features from './Features';

const GameInfo = ({ game, playerCount }) => {
  return (
    <div>
      <div className='flex justify-around bg-component-bg rounded-xl my-12 text-white font-pop_semi text-5xl pb-5'>
        <h1 className='text-green-txt'>
          <span className='text-lg'>Playing Now</span>
          <br />
          {playerCount[0]}
        </h1>
        <h1>
          <span className='text-lg'>24 Hour Peak</span>
          <br />
          {playerCount[1]}
        </h1>
        <h1>
          <span className='text-lg'>All Time Peak</span>
          <br />
          {playerCount[2]}
        </h1>
      </div>

      <div className='flex mb-14 bg-component-bg px-6 py-4 rounded-xl'>
        <div className='basis-[60%]'>
          <h1 className='font-pop_semi text-xl text-gray-alt-txt mb-1'>
            About
          </h1>
          <p className='font-pop_reg text-[#f3f3f3] text-sm leading-6'>
            {game.short_description}
          </p>
        </div>
        <div className='w-1 mx-5 bg-category-bg' />

        <Features game={game} />
      </div>
    </div>
  );
};

export default GameInfo;
