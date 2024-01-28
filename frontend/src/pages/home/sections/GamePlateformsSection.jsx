import useSWR from 'swr';
import GamePlatformCard from '../components/GamePlatformCard.jsx';
import { fetcherGet } from '../../../lib/clientFectcher/clientFetcher.js';
import { GAME_NEWS_URL } from '../../../lib/api/api.js';

const GamePlatformsSection = () => {
  const { data: news, error, isLoading } = useSWR(GAME_NEWS_URL, fetcherGet);

  if (isLoading) {
    return <div className='text-center'>Chargement...</div>;
  }

  if (error) {
    return <div className='text-center'>échec du chargement</div>;
  }

  return (
    <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      <div className='col-span-3'>
        <h1 className='leading-12 mb-12 text-center text-5xl font-semibold text-white'>Les jeux qui ont le plus marqué nos joueurs sur la plateforme !</h1>
      </div>

      {news.results.map(game => (
        <GamePlatformCard
          key={game.id}
          name={game.name}
          image_background={game.image_background}
          games_count={game.games_count}
          year_start={game.year_start && game.year_start}
          year_end={game.year_end && game.year_end}
        />
      ))}
    </section>
  );
};
export default GamePlatformsSection;
