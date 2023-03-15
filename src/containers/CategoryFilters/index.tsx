import { ChangeEvent } from 'react';
import Filters from '../../components/Filters';
import { categoryData } from '../../data/category';
import { createFiltersList } from '../../utils/filters';
import { TCategory } from '../../utils/types/filters';

interface ICategoryFilterProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  category: TCategory;
}

const CategoryFilter = ({ handleChange, category }: ICategoryFilterProps) => {
  return (
    <Filters
      options={createFiltersList<TCategory>(categoryData, 'Any')}
      title="Category"
      handleChange={handleChange}
      filterType="radio"
      selectedValue={category}
    />
  );
};

export default CategoryFilter;
