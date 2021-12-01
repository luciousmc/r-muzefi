import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <main>
        {/* Sidbar  */}
        <Sidebar />

        {/* Main Content */}
      </main>

      <div>{/* PLayer */}</div>
    </div>
  );
}
