function SidebarButton({ text, Icon }) {
  return (
    <button className='flex items-center space-x-2 hover:text-white'>
      <Icon className='h-5 w-5' />
      <p>{text}</p>
    </button>
  );
}

export default SidebarButton;
