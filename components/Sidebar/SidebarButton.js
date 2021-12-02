function SidebarButton({ text, Icon, btnFunc }) {
  return (
    <button
      onClick={() => btnFunc && btnFunc()}
      className='flex items-center space-x-2 hover:text-white'
    >
      <Icon className='h-5 w-5' />
      <p>{text}</p>
    </button>
  );
}

export default SidebarButton;
