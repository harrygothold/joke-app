import { useState } from 'react';
import { TInputChange } from '../../types';
import { TBlacklistFilters } from '../../types/filters';

interface IUseBlacklistReturn {
  blacklist: TBlacklistFilters[];
  handleBlacklistChange: (event: TInputChange) => void;
}

const useBlacklist = (): IUseBlacklistReturn => {
  const [blacklist, setBlacklist] = useState<TBlacklistFilters[]>([]);

  const handleBlacklistChange = (event: TInputChange) => {
    const currentFilters = blacklist;
    if (Array.isArray(currentFilters)) {
      currentFilters.push(event.target.value as TBlacklistFilters);
      setBlacklist(currentFilters);
    } else {
      setBlacklist([event.target.value as TBlacklistFilters]);
    }
  };

  return { blacklist, handleBlacklistChange };
};

export default useBlacklist;
