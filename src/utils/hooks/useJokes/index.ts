import axios from 'axios';
import { useEffect, useState } from 'react';
import { IJokeResponse } from '../../types/api';

interface IUseJokesReturn {
  joke: IJokeResponse | null;
  refetch: () => Promise<void>;
}

const useJokes = (): IUseJokesReturn => {
  const [joke, setJoke] = useState<IJokeResponse | null>(null);

  const getJokes = async () => {
    const res = await axios.get<IJokeResponse>(
      process.env.REACT_APP_JOKE_API as string
    );
    setJoke(res.data);
  };

  const refetch = async (): Promise<void> => {
    await getJokes();
  };

  useEffect(() => {
    getJokes();
  }, []);

  return { joke, refetch };
};

export default useJokes;
