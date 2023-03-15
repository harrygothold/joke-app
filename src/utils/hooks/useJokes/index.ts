/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IJokeResponse } from '../../types/api';
import useBlacklist from '../useBlacklist';
import useCategory from '../useCategory';

interface IUseJokesReturn {
  joke: IJokeResponse | null;
  refetch: () => Promise<void>;
}

const useJokes = (): IUseJokesReturn => {
  const [joke, setJoke] = useState<IJokeResponse | null>(null);

  const { blacklist } = useBlacklist();
  const { category } = useCategory();

  const getJokes = async () => {
    const url = `${
      process.env.REACT_APP_JOKE_API
    }/${category}?&blacklistFlags=${blacklist.toString()}&type=twopart`;
    const res = await axios.get<IJokeResponse>(url);
    setJoke(res.data);
  };

  const refetch = async (): Promise<void> => {
    await getJokes();
  };

  useEffect(() => {
    getJokes();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return { joke, refetch };
};

export default useJokes;
