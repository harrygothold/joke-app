import { Dispatch, SetStateAction, useState } from 'react';

interface IUseToggleReturn {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const useToggle = (): IUseToggleReturn => {
  const [toggle, setToggle] = useState(false);

  return { toggle, setToggle };
};

export default useToggle;
