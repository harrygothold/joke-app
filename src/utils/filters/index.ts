import { capitalizeFirstLetter } from '../string';
import { IFilterOption, TBlacklistFilters, TCategory } from '../types/filters';

export const createFiltersList = <T extends TCategory | TBlacklistFilters>(
  filters: T[],
  defaultSelected?: T
): IFilterOption[] => {
  const list: IFilterOption[] = filters.map((filter) => ({
    value: filter,
    label: capitalizeFirstLetter(filter),
    default: filter === defaultSelected,
  }));

  return list;
};
