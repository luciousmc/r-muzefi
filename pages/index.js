import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Muzefi - A Sleek Spotify Clone</title>
      </Head>

      <main>
        {/* Sidbar  */}
        <Sidebar />

        {/* Main Content */}
      </main>

      <div>{/* PLayer */}</div>
    </div>
  );
}
