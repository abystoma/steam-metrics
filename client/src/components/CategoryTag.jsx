const CategoryTag = ({ name }) => {
  return (
    <div>
      <img src={'./public/tag.png'} alt='tag' />
      <p>{name}</p>
    </div>
  );
};

export default CategoryTag;
