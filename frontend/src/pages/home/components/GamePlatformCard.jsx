const GamePlatformCard = ({ name, image_background, games_count, year_start, year_end }) => {
  return (
    <div className='rounded-md border border-slate-900 bg-gray-900 p-4 text-white shadow-lg'>
      <h2 className='text-xl font-bold'>{name}</h2>
      {image_background && <img className='mt-2 h-40 w-full rounded-md object-cover' src={image_background} alt={name} />}
      <p className='mt-2'>Games Count: {games_count}</p>
      {year_start && <p>Start Year: {year_start}</p>}
      {year_end && <p>End Year: {year_end}</p>}
    </div>
  );
};
export default GamePlatformCard;
