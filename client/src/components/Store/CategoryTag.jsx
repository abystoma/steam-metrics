const CategoryTag = ({ name }) => {
  return (
    <div className='bg-category-bg mt-2 mr-3 flex px-2 py-1 rounded-lg items-center'>
      <img src={'./public/tag.png'} alt='tag' />
      <p>{name}</p>
    </div>
  );
};

export default CategoryTag;
 