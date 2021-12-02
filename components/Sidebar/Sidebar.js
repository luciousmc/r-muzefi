import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
  ExternalLinkIcon,
} from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import SidebarButton from './SidebarButton';
import useSpotify from '../../hooks/useSpotify';

function Sidebar() {
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const spotifyApi = useSpotify();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  console.log(`playlists`, playlists);

  return (
    <aside className='text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide'>
      <div className='space-y-4'>
        <SidebarButton
          btnFunc={signOut}
          text='Logout (Temp)'
          Icon={ExternalLinkIcon}
        />
        <SidebarButton text='Home' Icon={HomeIcon} />
        <SidebarButton text='Search' Icon={SearchIcon} />
        <SidebarButton text='Library' Icon={LibraryIcon} />

        <hr className='border-t-[0.1px] border-gray-900' />

        <SidebarButton text='Create Playlist' Icon={PlusCircleIcon} />
        <SidebarButton text='Liked Songs' Icon={HeartIcon} />
        <SidebarButton text='Your Episodes' Icon={RssIcon} />

        <hr className='border-t-[0.1px] border-gray-900' />

        <p className='cursor-pointer hover:text-white'>Playlist Name</p>
        <p className='cursor-pointer hover:text-white'>Playlist Name</p>
        <p className='cursor-pointer hover:text-white'>Playlist Name</p>
        <p className='cursor-pointer hover:text-white'>Playlist Name</p>
        <p className='cursor-pointer hover:text-white'>Playlist Name</p>
        <p className='cursor-pointer hover:text-white'>Playlist Name</p>
        <p className='cursor-pointer hover:text-white'>Playlist Name</p>
        <p className='cursor-pointer hover:text-white'>Playlist Name</p>
        <p className='cursor-pointer hover:text-white'>Playlist Name</p>
        <p className='cursor-pointer hover:text-white'>Playlist Name</p>
        <p className='cursor-pointer hover:text-white'>Playlist Name</p>
        <p className='cursor-pointer hover:text-white'>Playlist Name</p>
        <p className='cursor-pointer hover:text-white'>Playlist Name</p>
        <p className='cursor-pointer hover:text-white'>Playlist Name</p>
        <p className='cursor-pointer hover:text-white'>Playlist Name</p>
        <p className='cursor-pointer hover:text-white'>Playlist Name</p>
        <p className='cursor-pointer hover:text-white'>Playlist Name</p>
      </div>
    </aside>
  );
}

export { Sidebar };
