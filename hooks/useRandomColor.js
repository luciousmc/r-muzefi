import { useEffect, useState } from 'react';

export default function useRandomColor() {
  const [randomColor, setRandomColor] = useState('from-pink-500');

  const colors = [
    'from-pink-500',
    'from-purple-500',
    'from-green-500',
    'from-blue-500',
    'from-yellow-500',
    'from-indigo-500',
    'from-pink-500',
  ];

  useEffect(() => {
    setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
  }, []);

  return { randomColor };
}
