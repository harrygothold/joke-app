import { ChangeEvent, useCallback, useState } from "react";
import { TCategory } from "../../types/filters";

interface IUseCategoryReturn {
  category: TCategory;
  handleCategoryChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const useCategory = (): IUseCategoryReturn => {
  const [category, setCategory] = useState<TCategory>("Any");

  const handleCategoryChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setCategory(event.target.value as TCategory);
    },
    []
  );

  return {
    category,
    handleCategoryChange,
  };
};

export default useCategory;
