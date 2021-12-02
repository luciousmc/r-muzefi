import { useSession } from 'next-auth/react';

function MainContent() {
  const { data: session } = useSession();

  return (
    <div className='flex flex-grow text-white'>
      <h1>Main Contenttttt</h1>
      <header>
        <div>
          <img src={session?.user.image} alt='User Image' />
        </div>
      </header>
    </div>
  );
}

export { MainContent };
