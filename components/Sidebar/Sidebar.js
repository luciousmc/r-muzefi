import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from '@heroicons/react/outline';
import SidebarButton from './SidebarButton';

function Sidebar() {
  return (
    <aside className='text-gray-500 p-5 text-sm border-r border-gray-900'>
      <div className='space-y-4'>
        <SidebarButton text='Home' Icon={HomeIcon} />
        <SidebarButton text='Search' Icon={SearchIcon} />
        <SidebarButton text='Library' Icon={LibraryIcon} />

        <hr className='border-t-[0.1px] border-gray-900' />

        <SidebarButton text='Create Playlist' Icon={PlusCircleIcon} />
        <SidebarButton text='Liked Songs' Icon={HeartIcon} />
        <SidebarButton text='Your Episodes' Icon={RssIcon} />

        <hr className='border-t-[0.1px] border-gray-900' />
      </div>
    </aside>
  );
}

export { Sidebar };
