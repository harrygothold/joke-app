import { ChangeEvent, InputHTMLAttributes } from 'react';
import { IFilterOption, TCategory } from '../../utils/types/filters';
import './index.scss';

export interface IFiltersProps {
  title: string;
  options: IFilterOption[];
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  filterType?: InputHTMLAttributes<HTMLInputElement>['type'];
  selectedValue?: TCategory | string;
}

const ROOT_CLASSNAME = 'Filters';

const Filters = ({
  title,
  options,
  handleChange,
  filterType = 'checkbox',
  selectedValue,
}: IFiltersProps) => {
  return (
    <div className={ROOT_CLASSNAME}>
      <h3>{title}</h3>
      <ul>
        {options.map((option) => (
          <li key={option.label}>
            <label htmlFor={option.value}>
              {option.label}
              <input
                type={filterType}
                value={option.value}
                name={option.value}
                id={option.value}
                onChange={handleChange}
                {...(filterType === 'radio' && {
                  checked: selectedValue === option.value ?? option.default,
                })}
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
