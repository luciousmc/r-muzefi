import { ChevronDownIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistIdState, playlistState } from '../../atoms/playlistAtom';
import useRandomColor from '../../hooks/useRandomColor';
import useSpotify from '../../hooks/useSpotify';

function MainContent() {
  const { data: session } = useSession();
  const { randomColor } = useRandomColor();
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  const playlistId = useRecoilValue(playlistIdState);
  const spotifyApi = useSpotify();

  useEffect(() => {
    const getPlayList = async () => {
      try {
        spotifyApi.setAccessToken(session.user.accessToken);

        const data = await spotifyApi.getPlaylist(playlistId);
        console.log(`data`, data);
        setPlaylist(data.body);
      } catch (error) {
        console.error('an error occured', error.message);
      }
    };

    if (session) getPlayList();
  }, [spotifyApi, playlistId, session]);

  return (
    <div className='flex-grow text-white'>
      <header className='absolute top-5 right-8'>
        <div className='flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2'>
          <img
            className='rounded-full w-10 h-10'
            src={session?.user.image}
            alt='User Image'
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className='h-5 w-5' />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b from-green-500 to-black h-80 text-white p-8`}
      >
        <img
          className='h-44 w-44 shadow-2xl'
          src={playlist?.images?.[0]?.url}
          alt='Album Cover'
        />
        <div>
          <p>PLAYLIST</p>
          <h1 className='text-2xl md:text-3xl xl:text-5xl font-bold'>
            {playlist?.name}
          </h1>
        </div>
      </section>
    </div>
  );
}

export { MainContent };
