import { useEffect, useState } from 'react';
import Card from './Card';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch('https://pokeapi.deno.dev/pokemon');
      const newData = await req.json();
      setData(newData);
    };

    fetchData();
  }, []);

  return (
    <main className='px-4 py-8'>
      <h1 className='text-center text-3xl'>Kreative Pokédex - HackISU v2</h1>
      <ul className='mt-8 flex flex-wrap justify-center gap-4'>
        {data.map((result) => (
          <Card
            key={result.id}
            name={result.name}
            description={result.description}
            imageUrl={result.imageUrl}
            color={result.color}
          />
        ))}
      </ul>
    </main>
  );
};

export default Home;
